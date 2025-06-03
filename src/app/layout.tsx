import type { Metadata } from "next";
import "./globals.css";

import Footer from "@/common/Footer";
import Header from "@/common/Header";
import { Noto_Sans } from "next/font/google";
import { GoogleTranslateProvider } from "./GoogleLanguageProvider";
import Providers from "./provider";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Electricity Commission",
  description: "Nepal Electricity Authority",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.variable} antialiased font-noto-sans bg-background-400`}
      >
        <Providers>
          <GoogleTranslateProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              {/* <BotPopup /> */}
              <div className="flex-grow">{children}</div>
              <Footer />
            </div>
          </GoogleTranslateProvider>
        </Providers>
      </body>
    </html>
  );
}
