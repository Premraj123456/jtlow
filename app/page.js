import Image from "next/image";
import Card from "./components/card";
import { BellElectric, Car, Church, Network } from "lucide-react";
import WorkCard from "./components/workCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ThyagarajPaul from "./components/thyagarajpaul";

export default function App() {
  return (
    <main>
      <section>

        <div className="relative text-white">
          <Image className="h-150 w-screen lg:h-screen object-cover" alt="worship" src={"/img.jpg"} width={1000} height={1000}/>
          
          <div className="md:left-20 lg:left-40 md:text-left md:pr-100 lg:pr-150 xl:pr-180 absolute top-30 flex items-center flex-col justify-center text-center py-15 gap-7 mx-4">
          
            <h1 className="font-extrabold text-4xl md:md:text-5xl  px-4">Pulling souls from fire, reaching the unreached.</h1>
            <Link href="/donate" className="w-full">
            <button className="bg-orange-500 font-bold md:w-1/2 w-full py-3 rounded-lg hover:opacity-80 transition active:bg-orange-600">Join the Mission</button>
            </Link>
          </div>

        </div>

      </section>



      <section className="p-5 space-y-7 text-center py-11 px-14 md:px-40 lg:px-60">
        <h2 className="font-extrabold text-3xl md:text-4xl lg:text-5xl">Who We Are</h2>
        <p className="text-xl md:text-2xl lg:text-3xl">Jesus - True Light of the World (JTLOW) is a Christian Trust legally registered to serve and spread the Gospel of Jesus Christ to the unknown—people who’ve never heard of Him. We are committed to pulling souls from fire by sharing the light of the Gospel in unreachable villages, isolated areas, and unreached hearts.</p>
      </section>

      <section className="p-5 md:px-20 lg:px-40 flex flex-col items-center space-y-5 text-center py-11 px-14 bg-black text-white font-bold ">
        <h2 className="font-extrabold text-3xl mb-12">Our Calling</h2>
        <h3 className="bg-white text-black w-fit px-2 py-0.5 rounded">Mission</h3>
        <p className="text-5xl mb-15 "> To preach the Gospel where no one else reaches.</p>
        
        
        {/* <h3 className="bg-white text-black w-fit px-2 py-0.5 rounded">Vision</h3>
        <p className="text-3xl"> To build churches in disconnected villages, form daily outreach teams, and share God’s Word through digital devices to those we physically cannot reach.</p>
     */}
      
      </section>




      <section className="p-5 space-y-5 pt-7 text-center">
        <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl">Our Work in Action</h2>
        <p className="text-lg md:px-30 lg:px-60">From village outreaches to baptisms and prayer meetings, every moment reflects our mission—spreading the light of Jesus where it’s never been before.</p>
        <Link href="/work">
        <button className="bg-black md:w-1/3 lg:1/8 text-white font-bold w-full py-3 rounded-lg hover:opacity-85 transition active:bg-gray-600"> View Gallery</button>
        </Link>
        {/* <p>Church Service Clips</p> */}
        {/* <p>Carousel of outrach photos, baptism photos, church gathering photos, community prayer session photos and more... and a button to see all by category</p> */}
        <span className="md:grid md:grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-4 md:px-20 lg:px-30">
        <WorkCard img="/AmazonPhotos/12.jpg" tag="Gathering" title="Church Fellowship" description={"Worshippers united in spirit and truth, lifting up the name of Jesus together."} />
        <WorkCard img="/AmazonPhotos/6.jpg" tag="Gospel" title="Outreach" description="Taking the good news of Jesus to the streets, villages, and unreached souls." />
        <WorkCard img="/photos/2.jpeg" tag="Save" title="Baptism" description="New lives in Christ—public declarations of faith through water baptism." />
        <WorkCard img="/AmazonPhotos/5.jpeg" tag="Community" title="Community prayer sessions and Gathering" description="Hearts joined in prayer and fellowship, building strong bonds in Christ." />
        </span>
      </section>



      <ThyagarajPaul />


      <section className="p-5 space-y-8 text-center py-11 ">
        <h2 className="font-extrabold text-3xl">Your Support Builds the Kingdom</h2>
        <p className="text-lg">Every donation is used transparently to:</p>
          
          <span className="md:px-20 lg:px-30 md:grid md:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
          <Card icon={<Church color="red" />} title="Churches" description="Build churches in areas with no Christian presence." />
          <Card icon={<Car color="red"/>} title="Vehicles" description="Equip vehicles for outreach to isolated villages." />
          <Card icon={<Network color="red" />} title="Network" description="Develop a network of preaching teams." />
          <Card icon={<BellElectric color="red"/>} title="Distribution" description="Distribute electronic devices with the Word of God where human access is limited." />
          </span>
          
          <p className="text-lg font-bold mt-15 md:text-xl">&quot;Your giving brings Jesus to places where no one else can go.&quot;</p>

      <Link href="/donate">
      <button className="bg-orange-500 max-w-2xl font-bold w-full py-3 rounded-lg text-white hover:opacity-90 transition active:bg-orange-600">Donate</button>

      </Link>
      </section>






    </main>
  );
}