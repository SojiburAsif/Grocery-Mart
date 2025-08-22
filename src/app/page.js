import Image from "next/image";
import Hero from "./shared/Hero";
import Prodect from "./shared/prodect";
import Work from "./shared/hero2";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Prodect></Prodect>
      <Work></Work>
    </div>
  );
}
