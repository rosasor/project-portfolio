import { NavigationMenu } from "radix-ui";
import { Switch } from "radix-ui";
import "../app/styles/NavigationMenu.css"
import Link from "next/link"

const NavBar = () => {
    return (
        <div className="flex justify-center w-full">
        <NavigationMenu.Root className="flex">
            <NavigationMenu.List className="flex gap-8">
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
                    <Switch.Root className="relative h-[25px] w-[42px] cursor-default rounded-full bg-gray-500 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=checked]:bg-blue-500">
                        <Switch.Thumb className="flex items-center justify-center block size-[21px] translate-x-0.5 rounded-full bg-white transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[19px]">
                        </Switch.Thumb>
                    </Switch.Root>
                </div>

            </NavigationMenu.List>
        </NavigationMenu.Root>
        </div>
    )
}

export default NavBar;