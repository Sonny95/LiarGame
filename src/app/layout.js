import "./globals.css";
import { Provider } from "./modules/provider";

export const metadata = {
  title: "Liar Game",
  description: "WHO IS LIAR?!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
