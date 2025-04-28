// "use client"

import { Mail, Phone,  Locate } from "lucide-react";
// import { useRef, useState } from "react";

export default function Contact() {
    // const nameRef = useRef("")
    // const emailRef = useRef("")
    // const messageRef = useRef("")

    // const [success, setSuccess] = useState(true)

    // function handleSubmit(e){
    //     e.preventDefault()
    //     const name = nameRef.current?.value
    //     const email = emailRef.current?.value
    //     const message = messageRef.current?.value
    //     console.log(name, email, message)
    //     setSuccess(true)
        

    // }

  return (
    <main>
          <section className="bg-black text-white p-5 space-y-7 py-13">
        <h1 className="font-extrabold text-4xl">Contact Us</h1>

       </section>

       <section className="p-5 space-y-5 text-lg">
            <h1 className="font-extrabold text-4xl">Get in Touch</h1>
            <p className="text-lg">Contact us for any type of queries. We&apos;re here to support you, whether you need prayer or simply want to connect.</p>
            
            {/* <h1 className="text-3xl font-bold text-white mb-4">JTLOW</h1> */}
            <div className="flex items-center gap-3"><Mail color="red" /><p className="opacity-70">jesustruelightoftheworld@gmail.com</p></div>
            <div className="flex items-center gap-3"><Phone color="red" /><p className="opacity-70" >+91 6302524327</p></div>
            <div className="flex items-center gap-3"> <Locate color="red" /><p className="opacity-70">Bhupathipet Gudur Mahabaubabad, India , 506134</p></div>
            

            <form action="https://formsubmit.co/jesustruelightoftheworld@gmail.com" method="POST" className="flex flex-col gap-1">

                <label className="text-sm">Name</label>
                <input  required className="bg-gray-100 rounded-lg h-10 mb-3 p-4" type="text" name="name"/>

                <label className="text-sm">Email</label>
                <input   required className="bg-gray-100 rounded-lg h-10 mb-3 p-4" type="email" name="email" />

                <label className="text-sm">Message</label>
                <textarea  required className="bg-gray-100 rounded-lg h-10 mb-5 p-4" type="text" name="message" />
            
                <button type="submit"  className="bg-orange-600 flex justify-center gap-2 text-white font-bold w-full py-3 rounded-lg hover:opacity-80 transition active:bg-orange-700 mb-2">Submit</button>
                {/* { success ? <p className="text-green-600 mb-4 text-center font-semibold text-[17px]">Thanks for your message! We will get back soon.</p> : null} */}
            </form>

            

    </section>
      
    </main>
  );
}