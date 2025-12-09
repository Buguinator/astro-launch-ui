import { useTranslation } from "react-i18next";

import { useEffect, useRef, useState } from "react";
import { Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

import AOS from "aos";

import {
  Accordion,
  AccordionItem,
} from "@/components/ui/accordion";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export function MenService({
  images,
}: {
  images: Array<any>;
}) {
  const { t } = useTranslation();
  const imgRef = useRef(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "linear",
      delay: 100,
    });
  }, []);

  // Carrusel automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Controles manuales
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);

  return (
    <ThemeProvider>
      <div className="h-full w-screen place-items-center bg-white px-8 py-20">
        {/* 📱 flex-col (textos arriba / imagen abajo) 💻 flex-row (imagen izquierda / textos derecha) */}
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10 lg:px-16">
          {/* 💻 Imagen a la izquierda */}
          <div
            ref={imgRef}
            className="w-full lg:w-1/2 order-2 lg:order-1 relative flex justify-center items-center"
          >
            <div className="relative w-full h-[26rem] sm:h-[30rem] lg:h-[34rem] lg:max-w-[25rem]" data-aos="fade-right">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img.src}
                  alt={`Procedimiento corporal ${index + 1}`}
                  className={`absolute inset-0 object-cover rounded-3xl transition-opacity duration-[1200ms] ease-in-out shadow-xl
                    ${index === current ? "opacity-100" : "opacity-0"}
                    w-full h-full`}
                />
              ))}

              {/* Botones de navegación */}
              <button
                onClick={prevSlide}
                className="absolute left-4 bottom-4 bg-white/70 hover:bg-white rounded-full p-2 shadow-md backdrop-blur-sm transition"
              >
                <ChevronLeftIcon className="h-5 w-5 text-rose-400" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 bottom-4 bg-white/70 hover:bg-white rounded-full p-2 shadow-md backdrop-blur-sm transition"
              >
                <ChevronRightIcon className="h-5 w-5 text-rose-400" />
              </button>
            </div>
          </div>

          {/* 📱 Textos arriba / 💻 Textos derecha */}
          <div className="w-full lg:w-1/2 text-left order-1 lg:order-2" >
            <Typography className="flex items-center justify-start !font-bold text-lg mb-5 text-[#365D78]" data-aos="fade-up">
              {t("dr.menService.subtitle")}
            </Typography>

            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-8 leading-tight"
              data-aos="fade-up"
            >
              {t("dr.menService.title")}
            </Typography>

            <Typography color="gray" className="pb-5" data-aos="fade-up">
              {t("dr.menService.description")}
            </Typography>

            <div data-aos="fade-up">
              <h6 className="font-medium text-base mb-5 text-gray-800">
                {t("dr.menService.text")}
              </h6>
              <Accordion type="single" collapsible defaultValue="item-0">
                <AccordionItem value="item-1">
                  <p className="text-lg py-3">
                    {t("dr.menService.list.0")}
                  </p>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <p className="text-lg py-3">
                    {t("dr.menService.list.1")}
                  </p>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <p className="text-lg py-3">
                    {t("dr.menService.list.2")}
                  </p>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <p className="text-lg py-3">
                    {t("dr.menService.list.3")}
                  </p>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <p className="text-lg py-3">
                    {t("dr.menService.list.4")}
                  </p>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <p className="text-lg py-3">
                    {t("dr.menService.list.5")}
                  </p>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <p className="text-lg py-3">
                    {t("dr.menService.list.6")}
                  </p>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MenService;
