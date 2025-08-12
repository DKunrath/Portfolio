import type { GetStaticProps, NextPage } from "next";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

// COMPONENTS
import { SEO } from "@components/SEO/SEO";
import { Navbar } from "@components/Navbar/Navbar";
import { Main } from "@components/Main/Main";
import { About } from "@components/About/About";
import { Skills } from "@components/Skills/Skills";
import { Projects } from "@components/Projects/Projects";
import { Contact } from "@components/Contact/Contact";
import { Footer } from "@components/Footer/Footer";
import { WelcomeScreen } from "@components/WelcomeScreen/WelcomeScreen";
import AnimatedBackground from "@components/AnimatedBackground/AnimatedBackground";

const Home: NextPage = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <>
      <SEO />

      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <>
          <AnimatedBackground />
          <Navbar />
          <main id="main">
            <Main />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default Home;
