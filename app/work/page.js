import { Youtube } from "lucide-react";
import Image from "next/image";


export default function OurWork() {

  
  return (
<>
    <section className="bg-black text-white p-5 space-y-7 py-13">
    <h1 className="font-extrabold text-4xl">Every step we&apos;re taking leads us to the Kingdom of God.</h1>
    {/* <button className="bg-orange-500 font-bold w-full py-3 rounded-lg hover:opacity-80 transition active:bg-orange-600">Donate</button> */}

   </section>

    <main className="p-5 space-y-5">

      
      <h1 className="font-extrabold text-4xl">Gallery</h1>
      <p className="text-lg">From village outreaches to baptisms and prayer meetings, every moment reflects our mission—spreading the light of Jesus where it’s never been before.</p>
       
       <a href="https://youtube.com/@agape-love">

       <button className="bg-red-600 flex justify-center gap-2 text-white font-bold w-full py-3 rounded-lg hover:opacity-80 transition active:bg-orange-600"> <Youtube />  <p>View on Youtube</p></button>
       </a>

       <section className="grid grid-cols-2 gap-2 py-5">
        <Image className="col-span-2 rounded-lg" src={"/AmazonPhotos/1.jpg"} width={1000} height={1000}/>
        {/* <Image src={"/photos/1.jpeg"} width={1000} height={1000}/> */}
        <Image className="rounded-lg" src={"/AmazonPhotos/1.jpg"} width={1000} height={1000}/>
        <Image className="rounded-lg"  src={"/AmazonPhotos/3.jpeg"} width={1000} height={1000}/>
        <Image className="rounded-lg" src={"/AmazonPhotos/4.jpeg"} width={1000} height={1000}/>
        <Image className="rounded-lg" src={"/AmazonPhotos/5.jpeg"} width={1000} height={1000}/>

        <Image className="col-span-2 rounded-lg" src={"/photos/4.jpeg"} width={1000} height={1000}/>

        <Image className="rounded-lg" src={"/AmazonPhotos/6.jpg"} width={1000} height={1000}/>

        <Image className="rounded-lg" src={"/AmazonPhotos/7.jpeg"} width={1000} height={1000}/>
        <Image className="rounded-lg" src={"/AmazonPhotos/9.jpeg"} width={1000} height={1000}/>
        <Image className="rounded-lg" src={"/AmazonPhotos/10.jpeg"} width={1000} height={1000}/>
        <Image className="rounded-lg" src={"/AmazonPhotos/11.jpeg"} width={1000} height={1000}/>
        <Image className="rounded-lg" src={"/AmazonPhotos/12.jpg"} width={1000} height={1000}/>
        
        
        <Image className="rounded-lg" src={"/AmazonPhotos/8.jpeg"} width={1000} height={1000}/>
        <Image className="rounded-lg" src={"/AmazonPhotos/2.jpg"} width={1000} height={1000}/>

        <Image className="rounded-lg" src={"/photos/2.jpeg"} width={1000} height={1000}/>
        <Image className="rounded-lg" src={"/photos/3.jpeg"} width={1000} height={1000}/>

        <Image className="col-span-2 rounded-lg"  src={"/AmazonPhotos/13.jpg"} width={1000} height={1000}/>

       </section>
    </main>

    </>
  );
}