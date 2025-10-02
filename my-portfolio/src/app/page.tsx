"use client"
import ImageCarousel from "@/components/ImageCarousel";
import AboutPreview from "@/components/AboutPreview";
import Header from "@/components/Header";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <motion.div
        initial={{opacity:0, y:25}}
        whileInView={{opacity:1, y:0}}
        viewport={{once: true}}
        transition={{duration:0.8, delay:0.2}}
      >
      
      
      <header className="">
        <Header />
      </header>
      <ImageCarousel />
      <AboutPreview />
      </motion.div>
    </div>
  );
}
