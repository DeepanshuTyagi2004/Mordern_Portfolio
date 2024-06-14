import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 items-center flex-col justify-center mx-auto sm:px-10 px-5 overflow-hidden">
      <div className="max-w-7xl w-full mx-auto">
        <FloatingNav
          navItems={[
            {
              name: 'Home',
              link: '/',
              icon: <FaHome />
            }
          ]}
        />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}