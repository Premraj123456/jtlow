
import Link from "next/link";
import { PayCard } from "../components/card";

export default function Donate() {
  return (
    <main>


       <section className="bg-black text-white p-5 space-y-7 py-13">
        <h1 className="font-extrabold text-4xl">Your generosity can make a difference.</h1>
        {/* <button className="bg-orange-500 font-bold w-full py-3 rounded-lg hover:opacity-80 transition active:bg-orange-600">Donate</button> */}

       </section>

       <section className="p-5 space-y-8 text-center py-11 ">
        <h2 className="font-extrabold text-3xl">Ways to Support</h2>
        <p className="text-lg mx-auto max-w-3xl">Generosity is our privilege at our Organization, as we follow the example of Jesus who was first generous towards us. Join us in fulfilling our vision to make a positive impact in the community and around the world.</p>

        <div className="mx-auto grid max-w-6xl gap-4 text-left md:grid-cols-2">
        <PayCard title="PayPal" description="Secure international donations in any currency through your PayPal account or linked card." link="https://paypal.me/prempayment"/>
        <div className="shadow-lg rounded-2xl p-5 space-y-2 text-left">
          <h3 className="font-bold text-2xl">UPI &amp; Bank Transfer (India and International)</h3>
          <p className="text-lg">For UPI, Indian bank transfer (NEFT/IMPS/RTGS), cards, or transfers in USD, GBP, EUR, AUD, NZD, CAD, HUF, or SGD, please contact us and we will share the correct account details for your country.</p>
          <Link href="/contact" className="inline-block font-bold text-black hover:opacity-80">
            Contact us for details →
          </Link>
        </div>
        </div>


        </section>



    </main>
  );
}