import React from "react"
import NavBar from "./components/navbar"
import Footer from "./components/footer"
import { Hero } from "./components/hero"
import { About } from "./components/about";
import { Services } from "./components/services";




export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Footer />
    </div>
  );
}
