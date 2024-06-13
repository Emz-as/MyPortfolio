
import { Intro } from "./components/Intro";
import { Body } from "./components/body";
import { Navbar } from "./components/navbar";

export default function Home() {
  return (
    <main className="w-full h-screen ">
      <Navbar/>
      <Intro/>
      <Body/>
    </main>
    
  );
}
