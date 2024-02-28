import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KBTech",
  description: "Transforming Your Dreams Into Digital Realities",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black">
      <body className={inter.className}>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
