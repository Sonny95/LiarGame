import "./globals.css";
import ReduxProvider from "./redux/provider";

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
