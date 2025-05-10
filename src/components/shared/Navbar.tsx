"use client";

import { Button } from "../ui/button";
import Link from "next/link";
import { Gwendolyn } from "next/font/google";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun } from "lucide-react";
import { useMounted } from "@/hooks/useMounted";
const gwendolyn = Gwendolyn({
  subsets: ["latin"],
  weight: ["400", "700"], // Gwendolyn supports 400 & 700
});
const menu = ["Home", "Project", "Blogs", "Contact"];

const Navbar = () => {
  const { setTheme, resolvedTheme } = useTheme();
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
          <Menu />
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
      </div>
    </div>
  );
};

export default Navbar;
