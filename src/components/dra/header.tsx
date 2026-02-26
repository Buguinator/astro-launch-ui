import { useTranslation } from "react-i18next";

import { Button, Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import Navbar from "../navbar";
import imgDra from "../../assets/dra.jpeg";

export function HeroSectionTwo() {
  const { t } = useTranslation();

  return (
    <ThemeProvider>
      <Navbar />
      <header className="h-full w-full place-items-center bg-white px-8 pb-28 pt-5 overflow-hidden">
        <div className="container mx-auto grid items-center lg:grid-cols-2">
          <div className="text-left">
            <div className="mb-8 inline-flex items-center rounded-lg">
              <Typography
                variant="small"
                className="rounded-md bg-rose py-0.5 px-3 font-medium text-white"
              >
                {t("dra.hero.up")}
              </Typography>
            </div>
            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-8 leading-tight lg:text-6xl lg:w-2/3"
            >
              {t("dra.hero.title")}
            </Typography>
            <Typography variant="lead" className="lg:pr-10 text-blue-gray-800">
              {t("dra.hero.subtitle")}
            </Typography>
            <Typography className="lg:pr-10 text-blue-gray-800 text-base pt-5">
              {t("dra.hero.description")}
            </Typography>
            <div className="mt-12 flex flex-wrap gap-3 justify-start">
              <a href="/contacto">
                <Button className="flex items-center bg-rose">
                  {t("dra.hero.button")}
                </Button>
              </a>
            </div>
          </div>
          <div className="hidden lg:flex">
            <img
              src={imgDra.src}
              alt="iphone"
              className="max-w-md rounded ml-auto"
              draggable="false"
            />
          </div>
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeroSectionTwo;
