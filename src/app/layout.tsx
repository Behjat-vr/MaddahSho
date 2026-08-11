import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";

export const metadata: Metadata = {
  title: "مداح شو | پلتفرم هوشمند آموزش مداحی",
  description: "صدایت را بساز. مهارتت را تقویت کن. بهتر بخوان. پلتفرم هوشمند آموزش مداحی با پشتیبانی هوش مصنوعی",
  keywords: "مداحی, آموزش مداحی, صداسازی, مداح شو, هوش مصنوعی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link
          href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://cdn.jsdelivr.net/gh/fontiran/iransans@v1.0.0/css/iransans.css"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
