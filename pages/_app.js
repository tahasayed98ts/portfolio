import { appWithTranslation } from "next-i18next";
import MouseFollower from "/components/MouseFollower";
import ParticlesComponent from "../components/Particles"; // تأكد من المسار الصحيح

import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect, useState } from "react";

import "@fortawesome/fontawesome-free/css/all.min.css";

import "/styles/globals.css";
import { ThemeProvider } from "next-themes";

import nextI18NextConfig from "../next-i18next.config";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <ThemeProvider attribute="class">
      <MouseFollower />
      <ParticlesComponent id="tsparticles" />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default appWithTranslation(MyApp, nextI18NextConfig);
