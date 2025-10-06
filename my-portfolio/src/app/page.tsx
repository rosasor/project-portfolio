"use client"
import AboutPreview from "@/components/AboutPreview";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import EmblaCarousel from '@/components/EmblaCarousel'
// import { EmblaOptionsType } from 'embla-carousel'

// const OPTIONS: EmblaOptionsType = { loop: true }
// const SLIDE_COUNT = 8
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

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
      <EmblaCarousel />

      <AboutPreview />
      </motion.div>
    </div>
  );
}
