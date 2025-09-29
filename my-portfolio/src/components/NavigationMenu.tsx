import { NavigationMenu } from "radix-ui";
import Link from "next/link"
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
    return (
        <div className="flex justify-center w-full">
        <NavigationMenu.Root className="flex">
            <NavigationMenu.List className="flex gap-8 items-center">
                <NavigationMenu.Item className="flex">
                    {/* Home */}
                    <Link 
                        href={"/"} 
                        className="font-bold text-md"
                    >
                        Home
                    </Link>     
                </NavigationMenu.Item>

                {/* Projects */}
                <NavigationMenu.Item className="flex">
                    <Link 
                        href={"/projects"} 
                        className="font-bold text-md"
                    >
                        Next
                    </Link>
                </NavigationMenu.Item>

                {/* About */}
                <NavigationMenu.Item className="flex">
                    <Link 
                        href={"/about"} 
                        className="font-bold text-md"
                    >
                        More
                    </Link>
                </NavigationMenu.Item>

                {/* Dark Mode Switch*/}
                <div className="flex items-center gap-[1rem]">
                    <ThemeToggle />
                </div>

            </NavigationMenu.List>
        </NavigationMenu.Root>
        </div>
    )
}

export default NavBar;