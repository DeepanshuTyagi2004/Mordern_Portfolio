import Clients from "@/components/Clients";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 items-center flex-col justify-center mx-auto sm:px-10 px-5 overflow-hidden scroll-smooth">
      <div className="max-w-7xl w-full mx-auto">
        <FloatingNav
          navItems={navItems}
        />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
      </div>
    </main>
  );
}
