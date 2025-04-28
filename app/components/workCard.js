import Image from "next/image";

export default function WorkCard({tag, title, description, img }) {
  return (
<div className="space-y-3 shadow-xl py-5 rounded-xl">

      <Image className="rounded-lg rounded-b-none" src={img} width={1000} height={1000} alt="alt"/>
      <h3 className="bg-black ml-4 text-white w-fit px-2 py-0.5 rounded-lg text-sm font-black ">{tag}</h3>

      <h4 className="text-lg font-bold -mt-1 pl-4">{title}</h4>
      <h5 className="  pl-4  -mt-1 ">{description}</h5>
  </div>
  );
}
