import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";


export default function Header() {
  return (
    <header className="text-white bg-black p-4 flex justify-between items-center px-5">
      
      <h1 className="text-3xl font-bold text-white"><Link href={"/"}>JTLOW</Link></h1>

      <Sheet className="lg:hidden">
  <SheetTrigger ><Menu className="lg:hidden"/></SheetTrigger>
  <SheetContent className="w-1/2 bg-black border-0 text-white">
    <SheetHeader className="hidden">
      <SheetTitle></SheetTitle>
      <SheetDescription>
      </SheetDescription>
    </SheetHeader>

    <div className="flex flex-col p-4 pt-9 gap-3">
      <a href="/about" className="hover:underline"><p className="text-xl font-bold">About</p></a>
      <a href="/work" className="hover:underline"><p className="text-xl font-bold">Our Work</p></a>
      <a href="/legal" className="hover:underline"><p className="text-xl font-bold">Legal</p></a>
      <a href="/donate" className="hover:underline"><p className="text-xl font-bold">Donate</p></a>
      <a href="/contact" className="hover:underline"><p className="text-xl font-bold">Contact Us</p></a>
    </div>
  </SheetContent>
</Sheet>

<div className=" p-4  gap-5 hidden lg:flex font-bold">
      <a href="/about" className="hover:underline"><p className="text-xl font-bold">About</p></a>
      <a href="/work" className="hover:underline"><p className="text-xl font-bold">Our Work</p></a>
      <a href="/legal" className="hover:underline"><p className="text-xl font-bold">Legal</p></a>
      <a href="/donate" className="hover:underline"><p className="text-xl font-bold">Donate</p></a>
      <a href="/contact" className="hover:underline"><p className="text-xl font-bold">Contact Us</p></a>
    </div>

    </header>
  );
}