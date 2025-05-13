import Image from "next/image";
import { skills } from "./skills.constant";

const Skills = () => {
  return (
    <div id="Skills" className=" pb-16 mt-10 md:mt-24 lg:mt-0">
      <div className="">
        {/* Title */}
        <div className="text-center ">
          <h2 className="text-2xl md:text-3xl xl:text-4xl font-semibold mb-8 lg:mb-16 drop-shadow-sm">
            My Skills
          </h2>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-10">
          {skills.map((category, index) => (
            <div
              key={index}
              className="bg-white/5 border border-blue-600 rounded-2xl p-6 shadow-lg backdrop-blur hover:shadow-blue-500/40 transition-all duration-300"
            >
              {/* Card Title */}
              <h3 className="text-xl md:text-2xl font-semibold text-center mb-6">
                {category.title}
              </h3>

              {/* Skill List */}
              <ul className="flex flex-wrap justify-center gap-4">
                {category.skills.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-2  px-4 py-2 rounded-md text-sm hover:scale-105 transition-transform duration-200 border shadow-2xl"
                  >
                    {/* <img src={item.image} alt={item.name} className="w-5 h-5" /> */}
                    <div className="relative w-5 h-5">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                    </div>
                    <p className="text-sm font-medium text-center">
                      {item.name}
                    </p>
                  </div>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
