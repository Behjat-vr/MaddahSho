// ===== Eitaa Integration =====

const BOT_TOKEN = process.env.EITAA_BOT_TOKEN || '';
const EITAA_API_URL = 'https://eitaayar.ir/api/app';

// ===== Send Message to Eitaa User =====
export async function sendEitaaMessage(
  chatId: number | string,
  text: string,
): Promise<boolean> {
  if (!BOT_TOKEN || BOT_TOKEN === 'your-eitaa-bot-token') {
    console.log('[Eitaa Mock] Message to', chatId, ':', text);
    return true;
  }

  try {
    const response = await fetch(`${EITAA_API_URL}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        token: BOT_TOKEN,
        chat_id: chatId,
        text,
      }),
    });

    const data = (await response.json()) as { ok?: boolean };
    return data.ok === true;
  } catch (error) {
    console.error('Eitaa Send Error:', error);
    return false;
  }
}

// ===== Client-side Eitaa SDK helpers =====
// These are meant to be used in client components

/**
 * Check if running inside Eitaa WebView
 */
export function isInEitaa(): boolean {
  if (typeof window === 'undefined') return false;
  return !!(window as unknown as Record<string, unknown>).Eitaa;
}

/**
 * Get Eitaa WebApp object
 */
export function getEitaaWebApp(): unknown | null {
  if (typeof window === 'undefined') return null;
  const eitaa = (window as unknown as Record<string, Record<string, unknown>>).Eitaa;
  return eitaa?.WebApp || null;
}

/**
 * Get start_param from Eitaa
 */
export function getEitaaStartParam(): string | null {
  const webApp = getEitaaWebApp() as Record<string, Record<string, string>> | null;
  if (!webApp) return null;
  return webApp.initDataUnsafe?.start_param || null;
}

/**
 * Get user info from Eitaa
 */
export function getEitaaUser(): { id?: number; first_name?: string; last_name?: string } | null {
  const webApp = getEitaaWebApp() as Record<string, Record<string, Record<string, unknown>>> | null;
  if (!webApp) return null;
  const user = webApp.initDataUnsafe?.user;
  if (!user) return null;
  return {
    id: user.id as number | undefined,
    first_name: user.first_name as string | undefined,
    last_name: user.last_name as string | undefined,
  };
}
