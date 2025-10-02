import { Box } from "@radix-ui/themes";
import ImageCard from "./ui/ImageCard";
import { motion } from "framer-motion";

const ImageCarousel = () => {
    const images = [
        "/Elena_Rosa_Wheelen_Headshot.jpeg",
        "/Elena_Rosa_Wheelen_Headshot.jpeg",
        "/Elena_Rosa_Wheelen_Headshot.jpeg",
        "/Elena_Rosa_Wheelen_Headshot.jpeg",
    ];

    // Calculate widths
    const imageWidth = 200; // ImageCard width (min-w-50/max-w-50)
    const gap = 32; // gap-8 = 2rem = 32px
    const totalImageWidth = imageWidth - gap;
    
    // Calculate the distance to move (width of one complete set of images)
    const translateDistance = images.length * totalImageWidth;

    return (
        <Box className="overflow-hidden max-w-[70%] mx-auto my-12">
            <motion.div 
                className="flex gap-8"
                animate={{
                    // x: [-translateDistance, 0]
                    x: [0, -translateDistance]
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 20,
                        ease: "linear",
                    },
                }}
            >
                {/* Render images twice for seamless loop */}
                {[...images, ...images].map((item, idx) => (
                    <div key={idx} className="flex-shrink-0">
                        <ImageCard image={item} />
                    </div>
                ))}
            </motion.div>
        </Box>
    );
}

export default ImageCarousel;