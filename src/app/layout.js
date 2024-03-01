import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KBTech",
  description: "Elevate Your Online Presence, Effortlessly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black">
      <body className={inter.className}>
        <div>
          <Navbar/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
