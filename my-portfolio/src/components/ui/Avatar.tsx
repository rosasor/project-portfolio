import * as React from "react";
import { Avatar } from "radix-ui";

const HeroAvatar = () => (
	<>
	<div className="flex gap-5 pt-2">
		<Avatar.Root className="inline-flex max-w-30 w-full h-auto min-w-30 min-h-40 select-none items-center justify-center overflow-hidden rounded-full bg-background align-middle outline-neutral-100 dark:outline-neutral-600 outline-1 outline-offset-3">
			<Avatar.Image
				className="size-full rounded-[inherit] object-cover "
				src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
				alt="Colm Tuite"
			/>
			<Avatar.Fallback
				className="leading-1 flex size-full items-center justify-center bg-white text-[15px] font-medium text-violet11"
				delayMs={600}
			>
				ELENA
			</Avatar.Fallback>
		</Avatar.Root>
	</div>
	</>
);

export default HeroAvatar;