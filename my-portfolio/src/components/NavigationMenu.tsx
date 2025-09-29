import { NavigationMenu } from "radix-ui";
import Link from "next/link"
import ThemeToggle from "@/components/ThemeToggle";

const NavBar = () => {
    return (
        <div className="fixed top-[1.5rem] mx-auto left-1/2 transform -translate-x-1/2 z-10">
            <NavigationMenu.Root className="flex bg-background/80 backdrop-blur-sm rounded-full px-5 py-1 border-background/50 shadow-md shadow-neutral-950/5">
                <NavigationMenu.List className="flex gap-8 items-center">
                    <NavigationMenu.Item className="flex">
                        {/* Home */}
                        <Link 
                            href={"/"} 
                            className="font-bold text-md transition-colors hover:text-blue-500"
                        >
                            Home
                        </Link>     
                    </NavigationMenu.Item>

                    {/* Projects */}
                    <NavigationMenu.Item className="flex">
                        <Link 
                            href={"/projects"} 
                            className="font-bold text-md transition-colors hover:text-blue-500"
                        >
                            Next
                        </Link>
                    </NavigationMenu.Item>

                    {/* About */}
                    <NavigationMenu.Item className="flex">
                        <Link 
                            href={"/about"} 
                            className="font-bold text-md transition-colors hover:text-blue-500"
                        >
                            More
                        </Link>
                    </NavigationMenu.Item>

                    {/* Dark Mode Switch*/}
                    <div className="flex items-center">
                        <ThemeToggle />
                    </div>

                </NavigationMenu.List>
            </NavigationMenu.Root>
        </div>
    )
}

export default NavBar;