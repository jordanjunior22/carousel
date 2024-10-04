import Image from "next/image";
import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <div className="flex items-center justify-center p-4 md:p-20">
      <Carousel/>
    </div>
  );
}
