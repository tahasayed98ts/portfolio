import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import {
  animate,
  AnimatePresence,
  motion,
  useIsPresent,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import { FaWifi } from "react-icons/fa6";
import { TiBatteryCharge } from "react-icons/ti";

export default function WarpOverlay({ intensity = 0.1 }) {
  const { t } = useTranslation("common");
  const { locale } = useRouter();

  // نحدد الكلاس المناسب لمحاذاة النصوص على الشاشات الكبيرة حسب اللغة
  const lgTextAlignmentClass =
    locale === "ar" ? "lg:text-right" : "lg:text-left";

  const ref = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  // استخدم useLayoutEffect لحساب الحجم بشكل دقيق بعد رسم الـ DOM
  useLayoutEffect(() => {
    if (ref.current) {
      setSize({
        width: ref.current.clientWidth,
        height: ref.current.clientHeight,
      });
    }
  }, [ref]);

  const [selectedEmails, setSelectedEmails] = useState([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const deform = useMotionValue(0);
  const rotateX = useTransform(deform, (value) => value * -5);
  const skewY = useTransform(deform, (value) => value * -1.5);
  const scaleY = useTransform(deform, (value) => 1 + value * intensity);
  const scaleX = useTransform(deform, (value) => 1 - value * intensity * 0.6);

  const closeModal = () => setIsDeleteModalOpen(false);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = days[new Date().getDay()];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const MonthName = months[new Date().getMonth()];

  return (
    <section
      id="projects"
      className="min-h-[100px] pt-7 pb-20 lg:pb-10 md:pb-10 px-6 bg-white dark:bg-gradient-to-r from-gray-900 to-gray-800 text-white dark:text-white  overflow-hidden"
    >
      <div
        className="iphone-wrapper relative z-10"
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <div className="iphone-mock">
          <div className="iphone-screen">
            <div className="dynamic-island"></div>
            <div className="iphone-status-bar">
              <div className="status-time mx-2">
                {new Date().getHours()}:{new Date().getMinutes()}
              </div>
              <div className="dayndamic-iland"></div>
              <div className="status-wifi">
                <FaWifi className="mr-3 ml-3" />
                <TiBatteryCharge />
              </div>
            </div>

            <div className="app-content" ref={ref}>
              <motion.div
                className="email-app-container"
                style={{
                  rotateX,
                  skewY,
                  scaleY,
                  scaleX,
                  originX: 0.5,
                  originY: 0,
                  transformPerspective: 500,
                  willChange: "transform",
                }}
              >
                <header className="header">
                  <h3 className="text-center">
                    {days[new Date().getDay()]}, {new Date().getDate()}{" "}
                    {months[new Date().getMonth()]}
                  </h3>
                  <h2 className="mt-6 mb-3">{t("whats_title")}</h2>
                  <p className="text-sm">{t("whats_desc")}</p>
                  <a href="https://wa.me/+0201229866965" target="_blank">
                    <div
                      className="my-5 flex justify-between bg-white/30 backdrop-blur-none p-2 rounded-lg ease-in duration-100 hover:bg-stone-700"
                      data-aos="fade-up"
                    >
                      <img
                        src="/projects-image/whatsapp.png"
                        alt="whatsapp"
                        loading="lazy"
                        className="w-6 h-6 mx-2"
                      />
                      <p className="text-[10px]">{t("whats_app")} </p>
                      <img
                        src="/projects-image/profile.png"
                        alt="profile"
                        loading="lazy"
                        className="w-6 h-6 rounded-full mx-2"
                      />
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/taha-sayed-3852281bb/"
                    target="_blank"
                  >
                    <div
                      className="my-5 flex justify-between bg-white/30 backdrop-blur-none p-2 rounded-lg ease-in duration-100 hover:bg-stone-700"
                      data-aos="fade-up"
                    >
                      <img
                        src="/projects-image/linkedin.png"
                        alt="linkedin"
                        loading="lazy"
                        className="w-6 h-6 mx-2"
                      />
                      <p className="text-[10px]">{t("linked_in")} </p>
                      <img
                        src="/projects-image/profile.png"
                        alt="profile"
                        loading="lazy"
                        className="w-6 h-6 rounded-full mx-2"
                      />
                    </div>
                  </a>
                  <a href="https://github.com/tahasayed98ts" target="_blank">
                    <div
                      className="my-5 flex justify-between bg-white/30 backdrop-blur-none p-2 rounded-lg ease-in duration-100 hover:bg-stone-700"
                      data-aos="fade-up"
                    >
                      <img
                        src="/projects-image/githup.png"
                        alt="githup"
                        loading="lazy"
                        className="w-6 h-6 mx-2"
                      />
                      <p className="text-[10px]">{t("git_hup")} </p>
                      <img
                        src="/projects-image/profile.png"
                        alt="profile"
                        loading="lazy"
                        className="w-6 h-6 rounded-full mx-2"
                      />
                    </div>
                  </a>
                </header>
              </motion.div>
            </div>

            <div className="iphone-home-indicator"></div>
          </div>
        </div>
        <StyleSheet />
      </div>
    </section>
  );
}

function StyleSheet() {
  return (
    <style>{`
      /* Styles for your components */
      .iphone-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
      }
      .iphone-mock {
          width: 300px;
          height: 600px;
          background-color: #1a1a1a;
          border-radius: 50px;
          box-shadow: 0 0 0 14px #121212, 0 0 0 17px #232323, 0 20px 10px rgba(0, 0, 0, 0.8);
          padding: 0;
          box-sizing: border-box;
      }
      .iphone-screen {
          position: relative;
          width: 100%;
          height: 100%;
          background-color: #0b1011;
          border-radius: 50px;
          overflow: hidden;
          padding: 20px;
          background: linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%);
          background-blend-mode: multiply;
      }
      .iphone-status-bar{
          display: flex;
      }
      .status-time{
          display: inline;
          width: 52px
      }
      .status-wifi{
          display: flex;
          font-size: 17px;
          padding-top: 3px;
      }
      .dayndamic-iland{
          background-color: black;
          border-radius: 30px;
          height: 35px;
          width: 178px;
      }    
      .app-content {
          flex: 1;
          padding: 0;
          display: flex;
          flex-direction: column;
      }
      .header {
          padding: 26px 20px 16px;    
          background-color: none;
      }
      .header h2 {
          font-size: 32px;
          text-align: center;
          font-weight: 600;
      }
      .iphone-home-indicator{
          width: 140px;   
          height: 5px;
          background-color: white;
          border-radius: 10px;
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
      }
    `}</style>
  );
}
