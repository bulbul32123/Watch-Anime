import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import StoreProvider from "./StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Watch",
  description: "Watch the best anime in the world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + ' w-full h-full 2xl:max-w-[1400px] mx-auto no-scrollbar'}>
        <StoreProvider>
          <Header />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
