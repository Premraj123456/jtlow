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
  const hasLink = Boolean(link);
  return (
    <div className=" shadow-lg rounded-2xl p-5 space-y-2 text-left">
      <h3 className="font-bold text-2xl">{title}</h3>
      <p className="text-lg">{description}</p>


        {hasLink ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 font-bold text-black hover:opacity-80"
          >
            Donate Now
            <ArrowRight />
          </a>
        ) : (
          <p className="flex items-center gap-1 font-bold text-gray-400">
            Details coming soon
            <ArrowRight />
          </p>
        )}
     {/* <p>Bank details here if from wise</p> */}
      
    </div>
  );
}