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
      className="h-[93vh] flex flex-col gap-6 lg:flex-row items-center"
    >
      <div className="flex-1 flex justify-center">
        <div className="relative w-[250px]  md:w-[350px] h-[250px] md:h-[350px]">
          {/* Outer holographic spinning ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="absolute inset-0 rounded-full bg-conic from-blue-500 via-fuchsia-500 to-rose-400 blur-md opacity-60 z-0"
          />

          {/* Middle neon ring with slower spin */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            className="absolute inset-3 rounded-full border-2 border-dashed border-blue-500 opacity-50 blur-[1px] z-0"
          />

          {/* Pulsing glow layer */}
          <motion.div
            animate={{
              scale: [1, 1.04, 1],
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-6 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 opacity-20 blur-xl z-0"
          />

          {/* Circular Image with soft glow ring */}
          <div className="absolute inset-[18px] rounded-full overflow-hidden z-10 border border-white/10 shadow-[0_0_25px_rgba(255,255,255,0.1)] backdrop-blur-sm">
            <Image
              src={profileImage}
              alt="profile"
              fill
              className="object-cover"
            />
          </div>

          {/* Optional center pulse dot */}
          {/* <motion.div
          animate={{ scale: [1, 1.6, 1], opacity: [1, 0.3, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-400 rounded-full blur-sm z-30"
        /> */}
        </div>
      </div>
      <div className="flex-1 space-y-2 lg:space-y-6">
        <h1 className=" text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
          Hi, I am Md Jewel <br /> Mia
        </h1>
        <h2 className="flex items-center gap-2 text-xl md:text-2xl lg:text-3xl font-bold">
          I'm a{" "}
          <span className="text-green">
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
        <p className="text-xl">
          Creative, motivated, and always learning. Focused on building clean,
          scalable, and user-friendly web apps.
        </p>
        <Link href="#Contact">
          <Button variant="outline" className="group flex items-center gap-2 cursor-pointer">
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

// "use client";

// import Image from "next/image";
// import profileImage from "../../../public/assests/profileImage/jewel.png";
// import { motion } from "framer-motion";

// const Banner = () => {
//   return (
//     <div
//       id="Home"
//       className="h-screen flex justify-center items-center "
//     >
//       <div className="relative w-[320px] h-[320px] group">
//         {/* Outer segmented robotic ring */}
//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
//           className="absolute inset-0 z-0 rounded-full border-2 border-transparent border-t-blue-500 border-b-fuchsia-500 border-dashed opacity-60 blur-sm"
//         />

//         {/* Mid-layer metallic scanner ring */}
//         <motion.div
//           animate={{ rotate: -360 }}
//           transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
//           className="absolute inset-2 z-0 rounded-full border-4 border-fuchsia-500/20 border-dotted"
//         />

//         {/* Radar pulse */}
//         <motion.div
//           animate={{
//             scale: [1, 1.5],
//             opacity: [0.5, 0],
//           }}
//           transition={{
//             duration: 2,
//             repeat: Infinity,
//             ease: "easeOut",
//           }}
//           className="absolute top-1/2 left-1/2 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-xl z-0"
//         />

//         {/* Light sweep */}
//         {/* <motion.div
//           initial={{ x: "-100%" }}
//           animate={{ x: "100%" }}
//           transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
//           className="absolute inset-0 z-20 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm"
//         /> */}

//         {/* Main Image with subtle glow */}
//         <div className="absolute inset-4 rounded-full overflow-hidden z-10 shadow-[0_0_40px_#0000ff] border border-white/10">
//           <Image
//             src={profileImage}
//             alt="profile"
//             fill
//             className="object-cover"
//           />
//         </div>

//         {/* Center glowing node */}
//         {/* <motion.div
//           animate={{
//             scale: [1, 1.4, 1],
//             opacity: [1, 0.2, 1],
//           }}
//           transition={{ duration: 3, repeat: Infinity }}
//           className="absolute top-1/2 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500 shadow-[0_0_15px_#f0f] z-30"
//         /> */}
//       </div>
//     </div>
//   );
// };

// export default Banner;
