import BlogSections from "@/components/BlogSections";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <main className={"bg-white" + inter.className}>
      <NavBar />
      <HeroSection />
      <BlogSections/>
    </main>
  );
}
