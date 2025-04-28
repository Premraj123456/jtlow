import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jesus - True Light of the World (JTLOW)",
  description: "Pulling souls from fire, reaching the unreached.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <Header />
        {children}
        <section className="bg-black text-white mb-7 mx-4 rounded-2xl md:mx-30 lg:mx-50 ">
        <h2 className="text-2xl font-extrabold p-5 italic md:text-3xl lg:text:5xl">“Pulling souls from fire, one light at a time.”</h2>
      </section>

        <Footer />
      </body>
      
    </html>
  );
}
