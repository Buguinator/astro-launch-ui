import { useTranslation } from "react-i18next";
import AOS from "aos";
import { Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import { useEffect, useState } from "react";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import imgFacial from "../../assets/p-facial.jpg";

export function ServiceAbout({
  service,
  images,
}: {
  service: {
    title: string;
    subtitle: string;
    description: string;
    description2: string;
    services: Array<any>;
  };
  images: Array<any>;
}) {
  const { t } = useTranslation();
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
      <div className="h-full w-screen place-items-center bg-white px-8 pb-20">
        <div className="container mx-auto relative">
          <div className="text-left lg:px-20">
            <Typography className="font-bold text-lg mb-5 text-rose" data-aos="fade-up">
              {t("dra.dermatologyService.subtitle")}
            </Typography>
            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-5 leading-tight"
              data-aos="fade-up"
            >
              {t("dra.dermatologyService.title")}
            </Typography>
            <Typography color="gray" className="pb-5 lg:w-1/2" data-aos="fade-up">
              {t("dra.dermatologyService.description")}
            </Typography>
          </div>

          <div className="lg:flex relative lg:px-20">
            <div className="lg:w-1/2">
              <div className="p-2 lg:p-0 mb-8">
                <div data-aos="fade-up">
                  <h6 className="font-medium text-base mb-5 text-gray-800">
                    {t("dra.dermatologyService.text")}
                  </h6>
                  <Accordion type="single" collapsible defaultValue="item-0">
                      <AccordionItem value="item-1">
                        <p className="text-lg py-2">
                          {t("dra.dermatologyService.list.0")}
                        </p>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <p className="text-lg py-2">
                          {t("dra.dermatologyService.list.1")}
                        </p>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <p className="text-lg py-2">
                          {t("dra.dermatologyService.list.2")}
                        </p>
                      </AccordionItem>
                      <AccordionItem value="item-4">
                        <p className="text-lg py-2">
                          {t("dra.dermatologyService.list.3")}
                        </p>
                      </AccordionItem>
                      <AccordionItem value="item-5">
                        <p className="text-lg py-2">
                          {t("dra.dermatologyService.list.4")}
                        </p>
                      </AccordionItem>
                      <AccordionItem value="item-6">
                        <p className="text-lg py-2">
                          {t("dra.dermatologyService.list.5")}
                        </p>
                      </AccordionItem>
                      <AccordionItem value="item-7">
                        <p className="text-lg py-2">
                          {t("dra.dermatologyService.list.6")}
                        </p>
                      </AccordionItem>
                      <AccordionItem value="item-8">
                        <p className="text-lg py-2">
                          {t("dra.dermatologyService.list.7")}
                        </p>
                      </AccordionItem>
                       <AccordionItem value="item-9">
                        <p className="text-lg py-2">
                          {t("dra.dermatologyService.list.8")}
                        </p>
                      </AccordionItem>
                       <AccordionItem value="item-10">
                        <p className="text-lg py-2">
                          {t("dra.dermatologyService.list.9")}
                        </p>
                      </AccordionItem>
                       <AccordionItem value="item-11">
                        <p className="text-lg py-2">
                          {t("dra.dermatologyService.list.10")}
                        </p>
                      </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>

            <div
            className="w-full lg:w-1/2 order-2 lg:order-1 relative flex justify-center items-center"
          >
            <div className="relative w-full h-[26rem] sm:h-[30rem] lg:h-[34rem] lg:max-w-[25rem] lg:mt-[-10rem]" data-aos="fade-left">
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
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default ServiceAbout;
