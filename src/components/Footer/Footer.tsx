import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#030014] border-t border-white/10">
      <div className="container mx-auto px-4 py-6">
        <center>
          <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
          <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
            © 2025{" "}
            <a href="#" className="hover:underline text-[#6366f1]">
              Rodrigo Kunrath™
            </a>
            . Todos os Direitos Reservados.
          </span>
        </center>
      </div>
    </footer>
  );
};

export { Footer };
