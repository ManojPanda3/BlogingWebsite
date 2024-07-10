import { Inter } from "next/font/google";
import NevigationBar from "@/components/NevigationBar";
export const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={"w-full h-full overflow-hidden" + inter.className}>
      <NevigationBar />
    </main>
  );
}
