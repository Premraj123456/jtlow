
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
        <p className="text-lg">Generosity is our privilege at our Organization, as we follow the example of Jesus who was first generous towards us. Join us in fulfilling our vision to make a positive impact in the community and around the world.</p>
        
        <PayCard title="PayPal" description="Secure international donations in any currency through your PayPal account or linked card." link="https://paypal.me/prempayment"/>
        <PayCard title="UPI (India)" description="Quick and easy domestic giving using UPI apps like PhonePe, Google Pay, or Paytm." link="" />
        <PayCard title="Indian Bank Transfer" description="Direct bank deposits for donors within India via NEFT/IMPS/RTGS." link="" />
        <PayCard title="Credit/Debit Cards (India & International - via Razorpay)" description="Support us using your Indian or international Visa, MasterCard, or other major cards." link="" />
        <PayCard title="USD – U.S. Bank Transfer" description="Send U.S. Dollar donations directly to our registered U.S. bank account." link="" />
        <PayCard title="GBP – U.K. Bank Transfer" description="Support us in British Pounds through a secure transfer to our U.K. bank account." link="" />
        <PayCard title="EUR – European Bank Transfer" description="Donate in Euros directly to our Europe-based account with ease." link="" />
        <PayCard title="AUD – Australian Bank Transfer" description="Send your Australian Dollar support to our Australian banking partner." link="" />
        <PayCard title="NZD – New Zealand Bank Transfer" description="Help from New Zealand? Transfer NZ Dollars to our NZ account." link="" />
        <PayCard title="CAD – Canadian Bank Transfer" description="Canadian donors can directly contribute via our secure CAD banking option." link="" />
        <PayCard title="HUF – Hungarian Forint Transfer" description="Support our mission from Hungary with local currency transfers." link="" />
        <PayCard title="SGD – Singapore Dollar Transfer" description="Donate in Singapore Dollars to our SGD account securely and fast." link="" />
{/* 
        <button className="bg-orange-500 text-white font-bold w-full py-3 rounded-lg hover:opacity-80 transition active:bg-orange-600">Donate with Paypal</button>
        <button className="bg-orange-500 text-white font-bold w-full py-3 rounded-lg hover:opacity-80 transition active:bg-orange-600">India - UPI</button>
        <button className="bg-orange-500 text-white font-bold w-full py-3 rounded-lg hover:opacity-80 transition active:bg-orange-600">Credit or Debit Card</button>
        <button className="bg-orange-500 text-white font-bold w-full py-3 rounded-lg hover:opacity-80 transition active:bg-orange-600">Donate to our US Bank Account</button>
        <button className="bg-orange-500 text-white font-bold w-full py-3 rounded-lg hover:opacity-80 transition active:bg-orange-600">Donate to our UK Bank Account</button>
        <button className="bg-orange-500 text-white font-bold w-full py-3 rounded-lg hover:opacity-80 transition active:bg-orange-600">Donate to our Canadian Bank Account</button>
        <button className="bg-orange-500 text-white font-bold w-full py-3 rounded-lg hover:opacity-80 transition active:bg-orange-600">Donate to our Australian Bank Account</button> */}

        
        </section>


        

    </main>
  );
}