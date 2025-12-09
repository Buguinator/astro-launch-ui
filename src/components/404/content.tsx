import { useTranslation } from "react-i18next";

import ThemeProvider from "../theme-provider";
import Navbar from "../navbar"

import {
  Button,
  Typography
} from "@material-tailwind/react";

export function HeroSectionFour() {

  const { t } = useTranslation();

  return (
    <ThemeProvider>
      <Navbar />
      <header className="h-screen min-h-screen w-screen bg-white">
        <div className="relative h-screen flex align-center flex-col justify-center text-center bg-cover" >
          <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800"></span>
          <Typography
            variant="h1"
            color="white"
            className="mb-4 !leading-tight lg:text-5xl z-20"
          >
            {t("404.title")}
          </Typography>
          <div className="w-auto mx-auto">
            <div className="flex items-center">
              <a className="z-10" href="./">
                <Button className="w-full px-4 bg-rose">
                  {t("404.button")}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeroSectionFour;
