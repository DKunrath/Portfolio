import React from "react";
import Image, { StaticImageData } from "next/image";

interface ImageSkillsProps {
  name: string;
  img: StaticImageData | React.ComponentType<any>;
}

const ImageSkill: React.FC<ImageSkillsProps> = ({ name, img }) => {
  const isReactComponent = typeof img === "function";
  const IconComponent = isReactComponent
    ? (img as React.ComponentType<any>)
    : null;

  return (
    <div className="group cursor-pointer">
      <div className="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl border border-white/10 hover:border-white/20">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
          <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-sm group-hover:shadow-md transition-shadow duration-300 border border-white/20">
            {isReactComponent && IconComponent ? (
              <IconComponent
                size={48}
                className="text-white group-hover:scale-110 transition-transform duration-300"
              />
            ) : (
              <Image
                src={img as StaticImageData}
                alt={`${name} logo`}
                width="48"
                height="48"
                className="group-hover:scale-110 transition-transform duration-300"
              />
            )}
          </div>
        </div>
        <span className="text-slate-300 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300">
          {name}
        </span>
      </div>
    </div>
  );
};

export { ImageSkill };
