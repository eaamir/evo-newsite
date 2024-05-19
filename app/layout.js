import localFont from "next/font/local";
import "./globals.css";

const myFont = localFont({ src: "../public/font/FUTURA55REGULAR.woff2" });


export const metadata = {
  title: "evoStudio",
  description: "Creativity and Design Studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
