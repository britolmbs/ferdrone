import React from "react"
import Footer from "./components/footer"
import { Hero } from "./components/hero"
import { About } from "./components/about";
import { Services } from "./components/services";
import { Trabalhos } from "./components/trabalhos";




export default function Home() {
  return (
    <div>
  
      <Hero />
      <About />
      <Services />
      <Trabalhos />
      <Footer />
    </div>
  );
}
