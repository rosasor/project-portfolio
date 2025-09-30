"use client"

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const ProgressBar = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
      })

    return (
        <motion.div
            className="fixed top-0 right-0 left-0 origin-left h-[10px] bg-violet-500 z-100 select-none"    
            style={{ scaleX }}
        >
            
        </motion.div>
    );
};

export default ProgressBar;