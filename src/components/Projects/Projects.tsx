import React, { useEffect, memo, useMemo } from "react";
import Image from "next/image";
import {
  ExternalLink,
  ArrowRight,
  Github,
  Code2,
  Star,
  Layers,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
  stars?: number;
  forks?: number;
  featured?: boolean;
  features?: string[];
}

const TECH_ICONS = {
  React: Code2,
  "Next.js": Code2,
  TypeScript: Code2,
  JavaScript: Code2,
  HTML: Code2,
  CSS: Code2,
  "Node.js": Code2,
  Python: Code2,
  "Tailwind CSS": Code2,
  MongoDB: Code2,
  Stripe: Code2,
  Flutter: Code2,
  Electron: Code2,
  default: Code2,
};

const TechBadge = memo<{ tech: string }>(({ tech }) => {
  const Icon =
    TECH_ICONS[tech as keyof typeof TECH_ICONS] || TECH_ICONS.default;

  return (
    <div className="group relative overflow-hidden px-3 py-2 md:px-4 md:py-2.5 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 cursor-default">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
      <div className="relative flex items-center gap-1.5 md:gap-2">
        <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
        <span className="text-xs md:text-sm font-medium text-blue-300/90 group-hover:text-blue-200 transition-colors">
          {tech}
        </span>
      </div>
    </div>
  );
});

TechBadge.displayName = "TechBadge";

const CardProject = memo<{ project: Project; index: number }>(
  ({ project, index }) => {
    const handleLiveDemo = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (!project.liveUrl) {
        e.preventDefault();
        alert("Live demo link is not available");
      }
    };

    return (
      <div
        className="group relative w-full"
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay={index * 100}
      >
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-purple-500/20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

          <div className="relative p-5 z-10">
            <div className="relative overflow-hidden rounded-lg">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-6xl">
                    {project.title.includes("Tic Tac Toe")
                      ? "⭕"
                      : project.title.includes("Snake")
                        ? "🐍"
                        : project.title.includes("Cozy")
                          ? "☁️"
                          : "💻"}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-4 space-y-3">
              <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                {project.title}
              </h3>

              <p className="text-gray-300/80 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div
                className="flex flex-wrap gap-3 justify-start"
                data-aos="fade-up"
                data-aos-delay="1200"
              >
                {project.technologies.map((tech, index) => (
                  <TechBadge key={index} tech={tech} />
                ))}
              </div>

              <div className="pt-4 flex items-center justify-between">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLiveDemo}
                    className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    <span className="text-sm font-medium">Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <span className="text-gray-500 text-sm">
                    Demo Não Disponível
                  </span>
                )}

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                >
                  <span className="text-sm font-medium">Detalhes</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="absolute inset-0 border border-white/0 group-hover:border-purple-500/50 rounded-xl transition-colors duration-300 -z-50"></div>
          </div>
        </div>
      </div>
    );
  }
);

CardProject.displayName = "CardProject";

const Projects: React.FC = () => {
  const projects: Project[] = useMemo(
    () => [
      {
        id: 1,
        title: "Emolink",
        description:
          "O EmoLink é um aplicativo de crescimento pessoal que conecta lições diárias com exercícios interativos criados por IA, ajudando os usuários a aplicar o que aprendem na vida real. Ele oferece atividades envolventes projetadas para impulsionar a autoconsciência, as habilidades emocionais e o desenvolvimento pessoal.",
        technologies: ["React Native", "Tailwind", "Node.js", "JavaScript", "Expo"],
        githubUrl: "https://github.com/DKunrath/EmoLink",
        liveUrl: "https://testflight.apple.com/join/DDT4rU44",
        image: "/assets/skills/emolink.png",
        featured: true,
        features: [
          "Chat em tempo real com a Dra.",
          "Rastreamento de humor diário",
          "Desafios diários criados por IA",
          "Prêmios",
        ],
      },
      {
        id: 2,
        title: "Plataforma de Xadrez com Pagamentos em Criptomoeda",
        description:
          "Uma plataforma baseada na web para jogar xadrez com pagamentos em criptomoeda integrados para recursos premium.",
        technologies: ["React", "Node.js", "Express", "Supabase"],
        githubUrl: "https://github.com/DKunrath/ChessStake",
        image: "/assets/skills/chess.png",
        featured: true,
        features: [
          "Algoritmo Minimax",
          "Poda Alpha-beta",
          "IA Inabalável",
          "Interface limpa",
        ],
      },
      {
        id: 3,
        title: "Velvet Match",
        description:
          "Uma plataforma de chat +18 projetada para um cliente Freelance.",
        technologies: ["React", "Node.js", "Express", "Supabase"],
        githubUrl: "https://github.com/DKunrath/ChatPlatform",
        image: "/assets/skills/velvetmatch.png",
        featured: true,
        features: [
          "Chat em tempo real com modelos",
          "Autenticação de usuário",
          "Responsivo para dispositivos móveis",
          "Processamento seguro de pagamentos",
        ],
      },
    ],
    []
  );

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

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div
      id="Portfolio"
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
              Portfólio
            </h2>
          </div>
          <p
            className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg"
            data-aos="zoom-in-up"
            data-aos-duration="800"
          >
            Aqui estão alguns dos meus projetos favoritos que mostram minhas habilidades e
            paixão pelo desenvolvimento
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3
            className="text-2xl font-bold text-white mb-8 text-center"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            Projetos em Destaque
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <CardProject key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div
          className="text-center mt-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="bg-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 inline-block">
            <h3 className="text-xl font-bold text-white mb-4">
              Quer ver mais?
            </h3>
            <p className="text-gray-400 mb-6">
              Confira meu perfil no GitHub para mais projetos e contribuições
            </p>
            <a
              href="https://github.com/DKunrath"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#6366f1]/80 hover:to-[#a855f7]/80 transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25"
            >
              <Github className="text-lg" />
              Ver Perfil do GitHub
            </a>
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

export { Projects };
