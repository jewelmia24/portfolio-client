/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import profileImage from "../../../public/assests/profileImage/jewel.png";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Button } from "../ui/button";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
  return (
    <div
      id="Home"
      className="h-[93vh] flex flex-col gap-6 lg:flex-row items-center lg:text-left"
    >
      <div className="flex-1 flex justify-center">
        <div className="relative w-[300px] h-[300px] md:w-[360px] md:h-[360px] group">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="absolute inset-0 z-0 rounded-full border-2 border-transparent border-t-blue-500 border-b-fuchsia-500 border-dashed opacity-60 blur-sm"
          />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 38, ease: "linear" }}
            className="absolute inset-2 z-0 rounded-full border-4 border-fuchsia-500/20 border-dotted"
          />
          <motion.div
            animate={{
              scale: [1, 1.5],
              opacity: [0.5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
            className="absolute top-1/2 left-1/2 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-xl z-0"
          />

          <div className="absolute inset-4 rounded-full overflow-hidden z-10 shadow-[0_0_40px_#0000ff] border border-white/10">
            <Image
              src={profileImage}
              alt="profile"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 360px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-3 lg:space-y-6">
        <h1 className=" text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold">
          Hi, I am Md Jewel <br /> Mia
        </h1>
       
          <h2 className="flex items-center w-fitgap-2 text-xl md:text-2xl lg:text-3xl font-semibold">
            <p>I'm a</p>
            <span className="">
              <Typewriter
                options={{
                  strings: [
                    "MERN Stack Developer",
                    "Frontend Developer",
                    "Backend Developer",
                    "Full Stack Developer",
                    "Next.js Developer",
                    "React.js Developer",
                    "Node.js Developer",
                    "Express.js Developer",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </span>
          </h2>
        
        <p className=" text-sm md:text-base lg:text-lg">
          Creative, motivated, and always learning. Focused on building clean,
          scalable, and user-friendly web apps.
        </p>
        <Link href="#Contact">
          <Button className="group flex items-center gap-2 cursor-pointer mt-5">
            Contact
            <span className="transition-transform duration-300 group-hover:rotate-90">
              <FaArrowRightLong />
            </span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
