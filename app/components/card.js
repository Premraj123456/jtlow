import { ArrowBigRight, ArrowRight } from "lucide-react";


export default function Card({title, description, icon}) {
  return (
    <div className=" shadow-lg rounded-2xl p-5 space-y-2 text-left">
      {icon}
      <h3 className="font-bold text-2xl">{title}</h3>
      <p className="text-lg">{description}</p>
    </div>
  );
}

export function PayCard({title, description, link}) {
  return (
    <div className=" shadow-lg rounded-2xl p-5 space-y-2 text-left">
      <h3 className="font-bold text-2xl">{title}</h3>
      <p className="text-lg">{description}</p>
      
      
        <a href={link} className="flex items-center gap-1 ">
          
          <a className="hover:opacity-80 text-black font-bold py-1">Donate Now</a>
          <ArrowRight />
        </a>
     {/* <p>Bank details here if from wise</p> */}
      
    </div>
  );
}