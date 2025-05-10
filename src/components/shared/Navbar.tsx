"use client";

import { Button } from "../ui/button";
import Link from "next/link";
import { Gwendolyn } from "next/font/google";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun, X} from "lucide-react";
import { useMounted } from "@/hooks/useMounted";
import { useState } from "react";
import { Separator } from "../ui/separator";
const gwendolyn = Gwendolyn({
  subsets: ["latin"],
  weight: ["400", "700"], // Gwendolyn supports 400 & 700
});
const menu = ["Home", "Project", "Blogs", "Contact"];

const Navbar = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const mounted = useMounted();
  if (!mounted) return null;
  const handleToggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <div className="sticky to-0% z-50 ">
      <div className=" md:max-w-[90%] xl:max-w-[75%] mx-4 md:mx-auto py-2.5 ">
        {/* decstop view */}
        <div className="hidden lg:flex justify-between items-center">
          <Link href={"/"}>
            <h1
              className={` ${gwendolyn.className} text-4xl font- lg:text-5xl font-bold bg-gradient-to-r from-blue-700 via-purple-500 to-blue-700 bg-clip-text text-transparent`}
            >
              Jewel
            </h1>
          </Link>
          <ul className="flex justify-between gap-5 items-center">
            {menu.map((item, index) => (
              <Link href={`#${item}`} key={index}>
                {item}
              </Link>
            ))}
          </ul>
          <div className="flex items-center gap-2 ">
            <Button variant={"outline"}>Download Resume</Button>
            <Button onClick={handleToggleTheme} variant={"ghost"} size="icon">
              {resolvedTheme === "light" ? (
                <Moon size={32} />
              ) : (
                <Sun size={32} />
              )}
            </Button>
          </div>
        </div>
        {/* mobile & tablet view */}
        <div className=" flex justify-between items-center lg:hidden">
          <Menu onClick={() => setIsOpen(!isOpen)} />
          <div className=" flex items-center gap-1.5">
            <Link href={"/"}>
              <h1
                className={` ${gwendolyn.className} text-4xl font- lg:text-5xl font-bold bg-gradient-to-r from-blue-700 via-purple-500 to-blue-700 bg-clip-text text-transparent`}
              >
                Jewel
              </h1>
            </Link>
            <Button onClick={handleToggleTheme} variant={"ghost"} size="icon">
              {resolvedTheme === "light" ? (
                <Moon size={32} />
              ) : (
                <Sun size={32} />
              )}
            </Button>
          </div>
        </div>
        {/* blur bg */}
        {isOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-xs transition-opacity opacity-50 duration-300"
            onClick={()=>setIsOpen(false)}
          />
        )}
        {/* mobile & tablet menu */}
        <div
          className={`lg:hidden fixed top-0 left-0 w-[50%] bg-background shadow-xl z-50 transition-transform duration-300 ease-in-out ${
            isOpen
              ? "translate-x-0 mt-9 ml-4 rounded-md"
              : "-translate-x-full "
          }`}
        >
          <div className="flex flex-col gap-2 p-6">
            {menu.map((item, index) => (
              <Link
                key={index}
                href={`#${item}`}
                onClick={() => setIsOpen(false)}
                className="text-lg hover:underline"
              >
                {item}
              </Link>
            ))}
            <Separator className="mb-2"/>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Download Resume
            </Button>
            <X className="absolute right-3 top-3" onClick={()=>setIsOpen(!isOpen)}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
