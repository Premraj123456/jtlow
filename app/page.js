import Image from "next/image";
import Card from "./components/card";
import { BellElectric, Car, Church, Network, Youtube } from "lucide-react";
import WorkCard from "./components/workCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ThyagarajPaul from "./components/thyagarajpaul";

export default function App() {
  return (
    <main>
      <section>

        <div className="relative text-white">
          <Image
            className="h-[36rem] w-full object-cover lg:h-screen"
            alt="Worship gathering at a JTLOW village outreach"
            src={"/img.jpg"}
            width={1600}
            height={900}
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-7 px-4 text-center md:items-start md:px-20 md:text-left lg:px-40">

            <h1 className="font-extrabold text-4xl md:text-5xl max-w-3xl">Pulling souls from fire, reaching the unreached.</h1>
            <Link
              href="/donate"
              className="block w-full rounded-lg bg-orange-500 py-3 text-center font-bold transition hover:opacity-80 active:bg-orange-600 md:w-64"
            >
              Join the Mission
            </Link>
          </div>

        </div>

      </section>



      <section className="space-y-7 px-6 py-11 text-center md:px-40 lg:px-60">
        <h2 className="font-extrabold text-3xl md:text-4xl lg:text-5xl">Who We Are</h2>
        <p className="text-xl md:text-2xl lg:text-3xl">Jesus - True Light of the World (JTLOW) is a Christian Trust legally registered to serve and spread the Gospel of Jesus Christ to the unknown—people who’ve never heard of Him. We are committed to pulling souls from fire by sharing the light of the Gospel in unreachable villages, isolated areas, and unreached hearts.</p>
        <p className="mx-auto w-fit rounded-lg bg-black px-3 py-1 text-base font-bold text-white md:text-lg">Founded in 2024 · Trust Reg. No. 16/2024, Telangana</p>
      </section>

      <section className="flex flex-col items-center space-y-5 bg-black px-6 py-11 text-center font-bold text-white md:px-20 lg:px-40 ">
        <h2 className="font-extrabold text-3xl mb-12">Our Calling</h2>
        <h3 className="bg-white text-black w-fit px-2 py-0.5 rounded">Mission</h3>
        <p className="text-4xl md:text-5xl mb-15 "> To preach the Gospel where no one else reaches.</p>
        
        
        {/* <h3 className="bg-white text-black w-fit px-2 py-0.5 rounded">Vision</h3>
        <p className="text-3xl"> To build churches in disconnected villages, form daily outreach teams, and share God’s Word through digital devices to those we physically cannot reach.</p>
     */}
      
      </section>




      <section className="space-y-5 p-5 pt-7 text-center">
        <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl">Our Work in Action</h2>
        <p className="text-lg md:px-30 lg:px-60">From village outreaches to baptisms and prayer meetings, every moment reflects our mission—spreading the light of Jesus where it’s never been before.</p>
        <Link
          href="/work"
          className="mx-auto block w-full rounded-lg bg-black py-3 font-bold text-white transition hover:opacity-85 active:bg-gray-600 md:w-1/3"
        >
          View Gallery
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


      <section className="space-y-5 bg-black px-6 py-11 text-center text-white md:px-20 lg:px-40">
        <p className="mx-auto w-fit rounded bg-white px-2 py-0.5 font-bold text-black">Digital Media Ministry</p>
        <h2 className="font-extrabold text-3xl md:text-4xl lg:text-5xl">Bible AI Films for Faith &amp; the Gospel</h2>
        <p className="mx-auto max-w-3xl text-lg md:text-xl">
          Alongside our village outreaches, we create Christian faith and Bible-based AI films — cinematic stories
          from Scripture designed to strengthen the faith of believers and carry the Gospel through digital media to
          screens everywhere, including places our teams cannot physically reach.
        </p>
        <a
          href="https://youtube.com/@agape-love"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto flex w-full max-w-md items-center justify-center gap-2 rounded-lg bg-red-600 py-3 font-bold text-white transition hover:opacity-80 active:bg-red-700"
        >
          <Youtube /> Watch Our Films on YouTube
        </a>
      </section>


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

      <Link
        href="/donate"
        className="mx-auto block w-full max-w-2xl rounded-lg bg-orange-500 py-3 font-bold text-white transition hover:opacity-90 active:bg-orange-600"
      >
        Donate
      </Link>
      </section>






    </main>
  );
}