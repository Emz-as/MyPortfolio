
import { Intro } from "./components/Intro";
import { Body } from "./components/body";
import { Experience } from "./components/experience";
import { Navbar } from "./components/navbar";
import {Skills} from "./components/skills";

export default function Home() {
  return (
    <main className="w-full h-screen ">
      <Navbar/>
      <Intro/>
      <Body/>
      <Skills/>
      <Experience/>
    </main>
    
  );
}
