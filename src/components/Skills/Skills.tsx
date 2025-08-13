import React, { useMemo, useEffect } from "react";
import { SiFlutter, SiGraphql } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import AOS from "aos";
import "aos/dist/aos.css";

// IMAGES SKILLS
import cssLogo from "../../../public/assets/skills/css.png";
import dockerLogo from "../../../public/assets/skills/docker.png";
import githubLogo from "../../../public/assets/skills/github.png";
import htmlLogo from "../../../public/assets/skills/html.png";
import javascriptLogo from "../../../public/assets/skills/javascript.png";
import nodeLogo from "../../../public/assets/skills/node.png";
import reactLogo from "../../../public/assets/skills/react.png";
import tailwindLogo from "../../../public/assets/skills/tailwind.png";
import typescriptLogo from "../../../public/assets/skills/typescript.png";
import nextLogo from "../../../public/assets/skills/nextjs-icon-svgrepo-com.svg";

// COMPONENTS
import { ImageSkill } from "./components/ImageSkill";

const Skills: React.FC = () => {
  const allImagesSkills = useMemo(() => {
    return [
      { name: "HTML", img: htmlLogo },
      { name: "CSS", img: cssLogo },
      { name: "Tailwind", img: tailwindLogo },
      { name: "React", img: reactLogo },
      { name: "Next.js", img: nextLogo },
      { name: "JavaScript", img: javascriptLogo },
      { name: "TypeScript", img: typescriptLogo },
      { name: "Node.js", img: nodeLogo },
      { name: "Flutter", img: SiFlutter },
      { name: "React Native", img: TbBrandReactNative },
      { name: "Docker", img: dockerLogo },
      { name: "GitHub", img: githubLogo },
    ];
  }, []);

  // AOS initialization
  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        once: false,
      });
    };

    initAOS();

    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(initAOS, 250);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <div
      id="skills"
      className="min-h-screen px-[5%] sm:px-[5%] lg:px-[10%] py-16 relative overflow-hidden"
    >
      <div className="relative z-10">
        <div className="text-center space-y-4 mb-16">
          <div
            className="inline-block relative group"
            data-aos="zoom-in-up"
            data-aos-duration="600"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
              Tecnologias
            </h2>
          </div>
          <p
            className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg"
            data-aos="zoom-in-up"
            data-aos-duration="800"
          >
            Aqui estão as tecnologias e ferramentas com as quais trabalho para dar vida às ideias.
          </p>
        </div>

        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 py-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {allImagesSkills.map((skill, index) => {
            return (
              <div
                key={skill.name ?? skill.img.src}
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay={index * 100}
              >
                <ImageSkill name={skill.name} img={skill.img} />
              </div>
            );
          })}
        </div>

        <div
          className="text-center mt-16"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="bg-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 inline-block">
            <p className="text-gray-300 font-medium">
              Sempre aprendendo e explorando novas tecnologias para me manter
              atualizado com as tendências do setor.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 10s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export { Skills };
