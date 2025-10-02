import { Card } from "@radix-ui/themes"
import React from "react"
import Image from "next/image"

interface CardProps {
    image: string
}

const ImageCard: React.FC<CardProps>= ({ image }) => {
    return (
            <Card className="flex flex-row justify-center items-center relative rounded-lg overflow-hidden min-h-50 max-h-50 min-w-50 max-w-50 bg-white">
                <Image 
                    src={image}
                    alt={image}
                    fill style={{ objectFit: "cover" }}
                    className="object-cover rounded-lg"
                />
            </Card>
    )
}

export default ImageCard;