import { Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-white bg-black p-4 px-5 space-y-9 ">
    
    <section className="space-y-1.5 text-lg">
    <h1 className="text-3xl font-bold text-white mb-4">JTLOW</h1>
    <p className="opacity-70">Bhupathipet Gudur Mahabaubabad, India , 506134</p>
    <p className="opacity-70" >+91 6302524327</p>
    <p>jesustruelightoftheworld@gmail.com</p>
    <a href="https://youtube.com/@agape-love" ><Youtube color="red"/></a>
    </section>

    <section  className="space-y-1.5 font-semibold pb-12">
        <p className="hover:underline"><Link href="about">About</Link></p>
        <p className="hover:underline"><Link href="work">Our Work</Link></p>
        <p className="hover:underline"><Link href="legal">Legal</Link></p>
        <p className="hover:underline"><Link href="donate">Donate</Link></p>
        <p className="hover:underline"><Link href="contact">Contact</Link></p>
    </section>

    {/* <section  className="space-y-1.5 font-semibold pb-12">
        <p>Get Invloved</p>
        <p>Small Groups</p>
        <p>Events</p>
        <p>Kids</p>
        <p>Youth</p>
    </section> */}

    
  </footer>
  );
}