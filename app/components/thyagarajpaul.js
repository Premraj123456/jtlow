import Image from "next/image";

export default function ThyagarajPaul() {
  return (
    <div className="p-4 space-y-5 md:px-30 lg:px-30">
        <section className=" lg:flex lg:flex-row">
           <Image className="w-full lg:w-auto lg:h-fit mb-8 rounded-2xl" src={"/photos/thyagarajpaul.png"} width={1000} height={1000} alt="logo" />
           
           <div className="lg:ml-6 space-y-5">
           
           <h3 className="bg-black text-white w-fit px-3 py-1 rounded-lg font-bold ">Founder & Lead Pastor</h3>
           <h2 className="font-extrabold text-3xl">Thyagaraj Paul</h2>
           <p className="text-lg">Before coming to Christ, our founder Thyagaraj Paul was not a Christian. At a young age, he became completely paralyzed—unable to move his hands or legs—confined to a cot for six months. In 1999, a pastor told his father about Jesus and invited them to a three-day Christian healing meeting led by Man of God Judson Abraham.
   </p>

    
   

   
   </div>

         </section>




        <p className="text-lg">
        For two days, nothing happened. But that night, God gave both his father and the pastor a dream that a miracle would happen the next day. On the final day, when the pastor prayed, Thyagaraj saw a great light and miraculously stood up and walked for the first time. From that moment, his life changed forever.
        </p>


        <p className="text-lg">
        Judson Abraham prophesied: “Do His ministry.” Since then, Thyagaraj Paul has been preaching the Gospel tirelessly, reaching the unreachable. In 2004, he married and is now blessed with two children. He continues the mission God started in him—to bring light to dark places.</p>
</div>
  );
}