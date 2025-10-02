import * as React from "react";
import { Avatar } from "radix-ui";

//on click, toast "elena says hello"

const HeroAvatar = () => (
	
	<div className="flex gap-5 pt-8">
		<Avatar.Root 
			className="inline-flex max-w-30 w-full h-auto min-w-30 min-h-40 select-none items-center 
			justify-center overflow-hidden rounded-full bg-background align-middle outline-neutral-100 
			dark:outline-neutral-600 outline-1 outline-offset-3 hover:scale-105 transition-all duration-500 hover:rotate-2
			cursor-pointer">
			<Avatar.Image
				className="size-full rounded-[inherit] object-cover"
				src="/Elena_Headshot.svg"
				alt="Elena Rosa Wheelen"
			/>
			<Avatar.Fallback
				className="leading-1 flex size-full items-center justify-center bg-white text-[15px] font-medium text-violet11"
				delayMs={600}
			>
				ELENA
			</Avatar.Fallback>
			
		</Avatar.Root>
	</div>
);

export default HeroAvatar;