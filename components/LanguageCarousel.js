import { useTheme } from "next-themes";
import {
  siJavascript,
  siTypescript,
  siReact,
  siRedux,
  siNodedotjs,
  siExpress,
  siNextdotjs,
  siVue,
  siAngular,
  siPython,
  siDjango,
  siFlask,
  siTailwindcss,
  siSass,
  siCss3,
  siHtml5,
  siGraphql,
  siApollo,
  siDocker,
  siKubernetes,
  siAmazonaws,
  siFirebase,
  siMongodb,
  siPostgresql,
  siMysql,
  siRedis,
  siGit,
  siGithub,
  siJest,
  siWebpack,
  siBabel,
  siStorybook,
} from "simple-icons/icons";

import Slider from "react-slick";

// مهم: استيراد CSS الخاص بـ slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const icons = [
  siJavascript,
  siTypescript,
  siReact,
  siRedux,
  siNodedotjs,
  siExpress,
  siNextdotjs,
  siVue,
  siAngular,
  siPython,
  siDjango,
  siFlask,
  siTailwindcss,
  siSass,
  siCss3,
  siHtml5,
  siGraphql,
  siApollo,
  siDocker,
  siKubernetes,
  siAmazonaws,
  siFirebase,
  siMongodb,
  siPostgresql,
  siMysql,
  siRedis,
  siGit,
  siGithub,
  siJest,
  siWebpack,
  siBabel,
  siStorybook,
];

export default function LanguageCarousel() {
  const { theme } = useTheme();

  const getColoredSVG = (icon) => {
    const color = `#${icon.hex}`;
    const svg = icon.svg || icon.source;

    if (theme === "dark") {
      return svg.replace(/fill="[^"]*"/g, 'fill="#FFFFFF"');
    }
    return svg.replace(/fill="[^"]*"/g, `fill="${color}"`);
  };

  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    swipeToSlide: true,
    variableWidth: true,
    arrows: false,
  };

  const settingsBottom = {
    infinite: true,
    speed: 2000, // أسرع من العلوي
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    swipeToSlide: true,
    variableWidth: true,
    arrows: false,
    rtl: true, // عكس الاتجاه
  };

  return (
    <div className="glass-mask  bg-white dark:bg-gradient-to-r from-gray-800 to-gray-800 rounded-lg shadow-md p-4 overflow-hidden">
      <Slider {...settings}>
        {icons.map((icon, i) => {
          if (!icon) return null;
          return (
            <div key={i} className="px-2 lg:mb-2">
              <div
                className="w-16 h-16 rounded-md fill-black dark:fill-white bg-white dark:bg-gray-800 shadow-md p-3 "
                title={icon.title}
                dangerouslySetInnerHTML={{ __html: getColoredSVG(icon) }}
                style={{ fill: theme === "dark" ? "#fff" : "#000000" }}
              />
            </div>
          );
        })}
      </Slider>
      <Slider {...settingsBottom}>
        {icons.map((icon, i) => {
          if (!icon) return null;
          return (
            <div key={i} className="px-2">
              <div
                className="w-16 h-16 rounded-md fill-black dark:fill-white bg-white dark:bg-gray-800 shadow-md p-3"
                title={icon.title}
                dangerouslySetInnerHTML={{ __html: getColoredSVG(icon) }}
                style={{ fill: theme === "dark" ? "#fff" : "#000000" }}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
