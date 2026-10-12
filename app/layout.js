import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://jtlow.vercel.app"),
  title: {
    default: "Jesus - True Light of the World (JTLOW)",
    template: "%s | JTLOW",
  },
  description:
    "Jesus - True Light of the World (JTLOW) is a legally registered Christian Trust (Reg. No. 16/2024, Telangana, India) preaching the Gospel in unreached villages. Pulling souls from fire, reaching the unreached.",
  keywords: [
    "JTLOW",
    "Jesus True Light of the World",
    "Christian Trust India",
    "Gospel outreach",
    "village ministry Telangana",
    "Thyagaraj Paul",
    "Bible AI films",
    "Christian faith films",
  ],
  authors: [{ name: "JTLOW" }],
  openGraph: {
    type: "website",
    url: "https://jtlow.vercel.app",
    title: "Jesus - True Light of the World (JTLOW)",
    description: "Pulling souls from fire, reaching the unreached.",
    siteName: "JTLOW",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jesus - True Light of the World (JTLOW)",
    description: "Pulling souls from fire, reaching the unreached.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <Header />
        {children}
        <section className="bg-black text-white mb-7 mx-4 rounded-2xl md:mx-30 lg:mx-50 text-center">
        <h2 className="text-2xl font-extrabold p-5 italic md:text-3xl">“Pulling souls from fire, one light at a time.”</h2>
      </section>

        <Footer />
      </body>
      
    </html>
  );
}
