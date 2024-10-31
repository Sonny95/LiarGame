import { appendMutableCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "Liar Game",
  description: "WHO IS LIAR?!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
