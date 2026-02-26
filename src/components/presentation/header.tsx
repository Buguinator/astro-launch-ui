import { useTranslation } from "react-i18next";

import {
  Button,
  Typography,
} from "@material-tailwind/react";
import Navbar from "../navbar";
import imgCover from "../../assets/cover.jpg";
import videoInstalaciones1 from "../../assets/video/instalaciones.webm";
import videoInstalaciones2 from "../../assets/video/instalaciones.mp4";

export function HeroPresentation() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />

      <header className="h-full w-full place-items-center relative px-8 pt-8 py-12 lg:mb-12 overflow-hidden">
        {/* Video de fondo */}
        <video
          autoPlay
          muted
          playsInline
          loop
          poster={imgCover.src}
          preload="none"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={videoInstalaciones1} type="video/webm" />
          <source src={videoInstalaciones2} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>

        {/* Overlay para mejorar la legibilidad del texto */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-25 z-10"></div>

        <div className="container mx-auto grid items-center lg:grid-cols-2 relative z-20">
          <div className="text-center lg:text-left pt-32 ">
            <Typography
              variant="h1"
              color="white"
              className="mb-8 lg:mr-32 leading-tight font-black text-3xl md:text-4xl lg:text-5xl"
            >
              <span className="italic">{t("home.hero.brand")} </span><span className="font-thin">|</span> {t("home.hero.title")}
            </Typography>
            <Typography variant="lead" color="white" className="lg:pr-32">
              {t("home.hero.description")}
            </Typography>
            <div className="mt-12 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a href="/contacto">
                <Button className="flex items-center  bg-rose text-white">
                  {t("home.hero.button")}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeroPresentation;
