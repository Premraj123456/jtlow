import ThyagarajPaul from "../components/thyagarajpaul";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

export default function About() {

    const beliefs = [
{title: "God", description : "We believe in one God, who exists in three persons - the Father, the Son, and the Holy Spirit - and is the creator of all things."},
{title: "The Gospel", description : "We believe that Jesus Christ is the Son of God, was born of a virgin, lived a sinless life, died on the cross for our sins, and rose from the dead on the third day, and will one day return to judge the living and the dead."},
{title: "The Bible", description : "We believe that the Bible is the inspired and authoritative Word of God, and is the final authority in matters of faith and practice."},
{title: "Salvation", description : "We believe that salvation is by grace through faith in Jesus Christ, and that all who believe in Him are born again and become children of God."},
{title: "The Holy Spirit", description : "We believe in the indwelling presence of the Holy Spirit, who empowers believers to live a holy life and to witness to the world about Jesus Christ."},
{title: "The Church", description : "We believe in the importance of the Church as the body of Christ, and that every believer should be a part of a local church."},
{title: "Baptism", description : "We believe in the sacraments of baptism and communion, which are symbolic acts that remind us of our faith in Jesus Christ and our unity as the Church."},
{title: "Unity", description : "We believe in the spiritual unity of all believers in our Lord Jesus Christ, regardless of race, gender, or denomination."},
    ]

  return (
    <main>
          <section className="bg-black text-white p-5 space-y-7 py-13">
    <h1 className="font-extrabold text-4xl">Who We Are</h1>
    {/* <button className="bg-orange-500 font-bold w-full py-3 rounded-lg hover:opacity-80 transition active:bg-orange-600">Donate</button> */}

   </section>


   <section className="p-5 space-y-7 text-center py-11 px-14">
        <h2 className="font-extrabold text-3xl">Discover the heart and vision behind Our Organization</h2>
        <p className="text-xl">To build churches in disconnected villages, form daily outreach teams, and share God’s Word through digital devices to those we physically cannot reach.</p>
      </section>

      <ThyagarajPaul />

      <section className="p-5 space-y-7 text-center py-11 px-14">
        <h2 className="font-extrabold text-3xl">Our Beliefs</h2>
        <p className="text-xl">Discover our unwavering beliefs at Church - rooted in God's Word, and centered on His love and grace.</p>
      </section>


      

      <section className="p-5">

      <Accordion type="single" collapsible className="w-full">

      <AccordionItem value="item-1">
        <AccordionTrigger className="font-extrabold text-xl h-18 text-center">{beliefs[0].title}</AccordionTrigger>
        <AccordionContent className="text-lg">
        {beliefs[0].description}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="font-extrabold text-xl h-18">{beliefs[1].title}</AccordionTrigger>
        <AccordionContent className="text-lg">
        {beliefs[1].description}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="font-extrabold text-xl h-18">{beliefs[2].title}</AccordionTrigger>
        <AccordionContent className="text-lg">
        {beliefs[2].description}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="font-extrabold text-xl h-18">{beliefs[3].title}</AccordionTrigger>
        <AccordionContent className="text-lg">
        {beliefs[3].description}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger className="font-extrabold text-xl h-18">{beliefs[4].title}</AccordionTrigger>
        <AccordionContent className="text-lg">
        {beliefs[4].description}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger className="font-extrabold text-xl h-18">{beliefs[5].title}</AccordionTrigger>
        <AccordionContent className="text-lg">
        {beliefs[5].description}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger className="font-extrabold text-xl h-18">{beliefs[6].title}</AccordionTrigger>
        <AccordionContent className="text-lg">
        {beliefs[6].description}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-8">
        <AccordionTrigger className="font-extrabold text-xl h-18">{beliefs[7].title}</AccordionTrigger>
        <AccordionContent className="text-lg">
        {beliefs[7].description}
        </AccordionContent>
      </AccordionItem>
      
      

    </Accordion>
     

      </section>
    </main>
  );
}