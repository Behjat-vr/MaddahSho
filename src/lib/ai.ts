// ===== 9router / OpenAI-compatible LLM Client =====

const BASE_URL = process.env.NINEROUTER_BASE_URL || 'https://api.9router.com/v1';
const API_KEY = process.env.NINEROUTER_API_KEY || '';

interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface ChatCompletionResponse {
  choices: Array<{
    message: {
      role: string;
      content: string;
    };
  }>;
  usage?: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

// ===== Build System Prompt for Course =====
export function buildSystemPrompt(courseName: string, customPrompt?: string): string {
  if (customPrompt) return customPrompt;

  return `تو دستیار آموزشی دوره «${courseName}» در پلتفرم مداح شو هستی.

وظیفه تو فقط پاسخ دادن به سؤالات مرتبط با محتوای این دوره است.
از اطلاعات موجود در محتوای دوره استفاده کن.

اگر سؤال خارج از محدوده دوره بود، پاسخ نده و به کاربر بگو:
«این سؤال خارج از محتوای این دوره است. من فقط می‌توانم درباره مطالب همین دوره به شما کمک کنم.»

هرگز اطلاعات خارج از محتوای دوره را به عنوان محتوای آموزشی دوره معرفی نکن.
در صورت نبودن اطلاعات کافی، صادقانه اعلام کن که پاسخ در محتوای دوره موجود نیست.

پاسخ‌هایت باید:
- کوتاه و مفید باشند
- به زبان فارسی باشند
- آموزشی و انگیزه‌بخش باشند`;
}

// ===== Chat Completion =====
export async function chatCompletion(
  messages: ChatMessage[],
  model = 'gpt-4o-mini',
  temperature = 0.7,
  maxTokens = 1024
): Promise<{ content: string; tokensUsed: number }> {
  // If no API key configured, return a mock response
  if (!API_KEY) {
    return {
      content: 'سرویس هوش مصنوعی در حال حاضر در حالت آزمایشی است. لطفاً API Key را در تنظیمات سیستم وارد کنید.',
      tokensUsed: 0,
    };
  }

  try {
    const response = await fetch(`${BASE_URL}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model,
        messages,
        temperature,
        max_tokens: maxTokens,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('LLM API Error:', errorText);
      throw new Error(`LLM API returned ${response.status}`);
    }

    const data: ChatCompletionResponse = await response.json();
    const content = data.choices?.[0]?.message?.content || 'پاسخی دریافت نشد.';
    const tokensUsed = data.usage?.total_tokens || 0;

    return { content, tokensUsed };
  } catch (error) {
    console.error('LLM Error:', error);
    return {
      content: 'ارتباط با سرویس هوش مصنوعی برقرار نشد. لطفاً چند لحظه دیگر دوباره تلاش کنید.',
      tokensUsed: 0,
    };
  }
}

// ===== Exercise Analysis Prompt =====
export function buildExerciseAnalysisPrompt(courseName: string, exerciseTitle: string): string {
  return `تو یک تحلیلگر صوتی تخصصی در حوزه مداحی هستی.

دوره: «${courseName}»
تمرین: «${exerciseTitle}»

بر اساس تحلیل صوتی انجام شده، یک گزارش بازخورد تولید کن.

فرمت خروجی باید JSON باشد:
{
  "overallScore": عدد بین 0 تا 100,
  "strengths": ["نقطه قوت ۱", "نقطه قوت ۲"],
  "improvements": ["نکته بهبود ۱", "نکته بهبود ۲"],
  "details": [
    {"label": "وضوح صدا", "score": عدد, "maxScore": 100},
    {"label": "ریتم", "score": عدد, "maxScore": 100},
    {"label": "کنترل تنفس", "score": عدد, "maxScore": 100},
    {"label": "شدت صدا", "score": عدد, "maxScore": 100},
    {"label": "ثبات اجرا", "score": عدد, "maxScore": 100}
  ],
  "aiRecommendation": "توصیه مشخص و قابل اجرا",
  "nextExercise": "عنوان تمرین پیشنهادی بعدی"
}

نکات مهم:
- بازخورد مشخص، قابل اجرا و آموزشی باشد
- انگیزه‌بخش باشد
- ویژگی‌هایی که واقعاً قابل تحلیل نیستند را جعل نکن
- فقط JSON خالص برگردان`;
}
