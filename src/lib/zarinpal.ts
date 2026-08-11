// ===== ZarinPal Payment Integration =====

const MERCHANT_ID = process.env.ZARINPAL_MERCHANT_ID || '';
const IS_SANDBOX = process.env.ZARINPAL_SANDBOX === 'true';
const CALLBACK_URL = process.env.ZARINPAL_CALLBACK_URL || 'http://localhost:3000/api/payment/verify';

const BASE_URL = IS_SANDBOX
  ? 'https://sandbox.zarinpal.com/pg/v4'
  : 'https://api.zarinpal.com/pg/v4';

const PAYMENT_PAGE = IS_SANDBOX
  ? 'https://sandbox.zarinpal.com/pg/StartPay'
  : 'https://www.zarinpal.com/pg/StartPay';

interface PaymentRequestResponse {
  data: {
    authority: string;
    fee: number;
    fee_type: string;
    code: number;
    message: string;
  };
  errors: unknown[];
}

interface PaymentVerifyResponse {
  data: {
    code: number;
    message: string;
    card_hash: string;
    card_pan: string;
    ref_id: number;
    fee_type: string;
    fee: number;
  };
  errors: unknown[];
}

// ===== Create Payment Request =====
export async function createPaymentRequest(
  amount: number, // in Toman
  description: string,
  email?: string,
  mobile?: string,
  callbackUrl?: string,
): Promise<{ authority: string; paymentUrl: string } | null> {
  // If no merchant ID, return mock
  if (!MERCHANT_ID || MERCHANT_ID === 'your-zarinpal-merchant-id') {
    const mockAuthority = 'MOCK-' + Date.now().toString(36);
    return {
      authority: mockAuthority,
      paymentUrl: `${CALLBACK_URL}?Authority=${mockAuthority}&Status=OK`,
    };
  }

  try {
    const response = await fetch(`${BASE_URL}/payment/request.json`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        merchant_id: MERCHANT_ID,
        amount: amount * 10, // ZarinPal uses Rial
        description,
        callback_url: callbackUrl || CALLBACK_URL,
        metadata: { email, mobile },
      }),
    });

    const data: PaymentRequestResponse = await response.json();

    if (data.data.code === 100) {
      return {
        authority: data.data.authority,
        paymentUrl: `${PAYMENT_PAGE}/${data.data.authority}`,
      };
    }

    console.error('ZarinPal Error:', data);
    return null;
  } catch (error) {
    console.error('ZarinPal Request Error:', error);
    return null;
  }
}

// ===== Verify Payment =====
export async function verifyPayment(
  authority: string,
  amount: number, // in Toman
): Promise<{ success: boolean; refId?: string }> {
  // Mock payment
  if (authority.startsWith('MOCK-')) {
    return { success: true, refId: 'MOCK-REF-' + Date.now() };
  }

  if (!MERCHANT_ID || MERCHANT_ID === 'your-zarinpal-merchant-id') {
    return { success: true, refId: 'MOCK-REF-' + Date.now() };
  }

  try {
    const response = await fetch(`${BASE_URL}/payment/verify.json`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        merchant_id: MERCHANT_ID,
        amount: amount * 10,
        authority,
      }),
    });

    const data: PaymentVerifyResponse = await response.json();

    if (data.data.code === 100 || data.data.code === 101) {
      return { success: true, refId: data.data.ref_id.toString() };
    }

    return { success: false };
  } catch (error) {
    console.error('ZarinPal Verify Error:', error);
    return { success: false };
  }
}
