import { useTranslation } from "react-i18next";

import { Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

export function ServicioBioestimuladores() {
  const { t } = useTranslation();

  return (
    <ThemeProvider>
      <div className="h-full w-full place-items-center px-6 lg:px-12 py-16 lg:py-24 bg-rosita overflow-hidden">
        <div className="container mx-auto grid items-center relative lg:grid-cols-2">
          {/* Texto */}
          <div className="text-left" data-aos="fade-up">
            <Typography className="flex items-center justify-start font-bold text-lg mb-5 text-rose">
              {t("home.bioestimuladoresService.subtitle")}
            </Typography>

            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-8 leading-tight"
            >
              {t("home.bioestimuladoresService.title")}
            </Typography>

            <Typography color="blue-gray" className="lg:pr-20">
              {t("home.bioestimuladoresService.description")}
            </Typography>

            <div className="mt-10">
              <h6 className="font-bold text-lg mb-5">{t("home.bioestimuladoresService.sTitle")}</h6>
              <ul className="list-disc list-inside">
                <li className="font-medium text-lg italic">{t("home.bioestimuladoresService.1")}</li>
                <li className="font-medium text-lg italic">{t("home.bioestimuladoresService.2")}</li>
                <li className="font-medium text-lg italic">{t("home.bioestimuladoresService.3")}</li>
                <li className="font-medium text-lg italic">{t("home.bioestimuladoresService.4")}</li>
                <li className="font-medium text-lg italic">{t("home.bioestimuladoresService.5")}</li>
                <li className="font-medium text-lg italic">{t("home.bioestimuladoresService.6")}</li>
              </ul>
            </div>

            <div className="mt-8">
              <h6 className="font-bold text-lg mb-2">{t("home.bioestimuladoresService.idealTitle")}</h6>
              <Typography color="blue-gray" className="lg:pr-20">
                {t("home.bioestimuladoresService.ideal")}
              </Typography>
            </div>

            <Typography color="blue-gray" className="lg:pr-20 mt-6 text-sm italic opacity-80">
              {t("home.bioestimuladoresService.note")}
            </Typography>
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
            <source src="/videos/bioestimuladores.webm" type="video/webm" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default ServicioBioestimuladores;
