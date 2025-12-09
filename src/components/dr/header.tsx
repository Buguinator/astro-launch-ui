import { useTranslation } from "react-i18next";
import { Button, Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import Navbar from "../navbar";
import imgDr from "../../assets/dr.jpg";

export function HeroSectionTwo() {
  const { t } = useTranslation();
  return (
    <ThemeProvider>
      <Navbar />
      <header className="h-full w-screen place-items-center bg-white px-8 pb-28 pt-5">
        <div className="container mx-auto grid items-center lg:grid-cols-2">
          <div className="text-left">
            <div className="mb-8 inline-flex items-center rounded-lg">
              <Typography
                variant="small"
                className="rounded-md bg-[#365D78] py-0.5 px-3 font-medium text-white"
              >
                {t("dr.hero.up")}
              </Typography>
              {/* <Typography
                color="dark"
                variant="small"
                className="!flex !items-center !font-semibold"
              >
                Personalized coaching in-app
                <ArrowSmallRightIcon
                  className="ml-1.5 h-4 w-4"
                  strokeWidth={3}
                />
              </Typography> */}
            </div>
            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-8 leading-tight lg:text-6xl"
            >
              {t("dr.hero.title")}
            </Typography>
            <Typography variant="lead" className="lg:pr-10 text-blue-gray-800">
              {t("dr.hero.subtitle")}
            </Typography>
            <Typography className="lg:pr-10 text-blue-gray-800 text-base pt-5">
              {t("dr.hero.description")}
            </Typography>
            <div className="mt-12 flex flex-wrap gap-3 justify-start">
              <a href="/contacto">
                <Button className="flex items-center bg-[#365D78]">
                  {t("dr.hero.button")}
                </Button>
              </a>
            </div>
          </div>
          <div className="hidden lg:flex">
            <img
              src={imgDr.src}
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
