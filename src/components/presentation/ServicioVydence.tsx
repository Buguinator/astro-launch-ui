import { useTranslation } from "react-i18next";

import { Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import { useEffect } from "react";

import AOS from "aos";

import videoLaser from "../../assets/video/vydence.webm";

export function ServicioVydence() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1600,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <ThemeProvider>
      <div className="h-full w-screen place-items-center px-8 pb-8 pt-24 bg-rosita">
        <div className="container mx-auto grid items-center relative lg:grid-cols-2">
          {/* Texto */}
          <div className="text-left lg:px-20" data-aos="fade-up">
            <Typography className="flex items-center justify-start font-bold text-lg mb-5 text-rose">
              {t("home.vydenceService.subtitle")}
            </Typography>

            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-8 leading-tight"
            >
              {t("home.vydenceService.title")}
            </Typography>

            <Typography color="blue-gray" className="lg:pr-20">
              {t("home.vydenceService.description")}
            </Typography>

            <div className="mt-10">
              <h6 className="font-bold text-lg mb-5">{t("home.vydenceService.sTitle")}</h6>
              <ul className="list-disc list-inside">
                <li className="font-medium text-lg italic">{t("home.vydenceService.1")}</li>
                <li className="font-medium text-lg italic">{t("home.vydenceService.2")}</li>
                <li className="font-medium text-lg italic">{t("home.vydenceService.3")}</li>
                <li className="font-medium text-lg italic">{t("home.vydenceService.4")}</li>
                <li className="font-medium text-lg italic">{t("home.vydenceService.5")}</li>
                <li className="font-medium text-lg italic">{t("home.vydenceService.6")}</li>
                <li className="font-medium text-lg italic">{t("home.vydenceService.7")}</li>
                <li className="font-medium text-lg italic">{t("home.vydenceService.8")}</li>
              </ul>
            </div>
          </div>

          {/* Video animado */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="rounded-3xl hidden md:flex mx-auto max-w-[25rem] object-cover"
            data-aos="fade-left"
            style={{
              boxShadow: "0 4px 12px -2px rgba(248, 187, 217, 0.5)",
            }}
          >
            <source src={videoLaser} type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default ServicioVydence;
