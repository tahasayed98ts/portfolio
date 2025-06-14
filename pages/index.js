import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import LanguageCarousel from "../components/LanguageCarousel";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Whats from "../sections/Whats";

import Footer from "../components/Footer";
import Socials from "../components/Socials";
import ScrollTopButton from "../components/ScrollTopButton";
import Preloader from "../components/Preloader";

import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timeout);
  }, []);

  const { t } = useTranslation("common");
  const { locale } = useRouter();

  return (
    <>
      {/* ✅ Preloader with fade out */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      {/* ✅ Main content fades in after preloader */}
      {!isLoading && (
        <motion.div
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <main dir={locale === "ar" ? "rtl" : "ltr"}>
            <Navbar />
            
            <Hero />
            <LanguageCarousel />
            <About />
            <Experience />
            <Projects />
            <Whats />

            <Contact />
            <Footer />
            <Socials />
            <ScrollTopButton />
          </main>
        </motion.div>
      )}
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
