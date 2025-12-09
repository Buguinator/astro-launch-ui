import { useTranslation } from "react-i18next";
import { Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import { useEffect, useState } from "react";

import AOS from "aos";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function CorporalService({
  images,
}: {
  images: Array<any>;
}) {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'linear',
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
          <div className="text-left lg:px-20" data-aos="fade-up">
            <Typography className="font-bold text-lg mb-5 text-[#365D78]">
              {t("dr.corporalService.subtitle")}
            </Typography>
            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-5 leading-tight"
            >
              {t("dr.corporalService.title")}
            </Typography>
          </div>

          <div className="lg:flex relative lg:px-20">
            <div className="lg:w-1/2">
              <div className="p-2 lg:p-0 mb-8">
                <div data-aos="fade-up">
                  <h6 className="font-medium text-base mb-5 text-gray-800">
                    {t("dr.corporalService.text")}
                  </h6>
                  <Accordion type="single" collapsible defaultValue="item-0">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-lg">
                        {t("dr.corporalService.list.1.title")}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="pl-8 pb-3">
                          <ul className="list-none">
                            <li className="pb-1">
                              <span className="font-semibold block pb-2 text-[#365D78]">
                                {t("dr.corporalService.list.1.process")}
                              </span>
                              <p className="pb-4">
                                {t("dr.corporalService.list.1.processDescription")}
                              </p>
                            </li>
                            <li className="pb-1">
                              <span className="font-semibold block pb-2 text-[#365D78]">
                                {t("dr.corporalService.list.1.benefits")}
                              </span>
                              <p className="pb-4">
                                {t("dr.corporalService.list.1.benefitsDescription")}
                              </p>
                            </li>
                            <li className="pb-1">
                              <span className="font-semibold block pb-2 text-[#365D78]">
                                {t("dr.corporalService.list.1.results")}
                              </span>
                              <p className="pb-4">
                                {t("dr.corporalService.list.1.resultsDescription")}
                              </p>
                            </li>
                          </ul>
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-lg">
                        {t("dr.corporalService.list.2.title")}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="pl-8 pb-3">
                          <ul className="list-none">
                            <li className="pb-1">
                              <span className="font-semibold block pb-2 text-[#365D78]">
                                {t("dr.corporalService.list.2.process")}
                              </span>
                              <p className="pb-4">
                                {t("dr.corporalService.list.2.processDescription")}
                              </p>
                            </li>
                            <li className="pb-1">
                              <span className="font-semibold block pb-2 text-[#365D78]">
                                {t("dr.corporalService.list.2.benefits")}
                              </span>
                              <p className="pb-4">
                                {t("dr.corporalService.list.2.benefitsDescription")}
                              </p>
                            </li>
                            <li className="pb-1">
                              <span className="font-semibold block pb-2 text-[#365D78]">
                                {t("dr.corporalService.list.2.results")}
                              </span>
                              <p className="pb-4">
                                {t("dr.corporalService.list.2.resultsDescription")}
                              </p>
                            </li>
                          </ul>
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-lg">
                        {t("dr.corporalService.list.3.title")}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="pl-8 pb-3">
                          <ul className="list-none">
                            <li className="pb-1">
                              <span className="font-semibold block pb-2 text-[#365D78]">
                                {t("dr.corporalService.list.3.process")}
                              </span>
                              <p className="pb-4">
                                {t("dr.corporalService.list.3.processDescription")}
                              </p>
                            </li>
                            <li className="pb-1">
                              <span className="font-semibold block pb-2 text-[#365D78]">
                                {t("dr.corporalService.list.3.benefits")}
                              </span>
                              <p className="pb-4">
                                {t("dr.corporalService.list.3.benefitsDescription")}
                              </p>
                            </li>
                            <li className="pb-1">
                              <span className="font-semibold block pb-2 text-[#365D78]">
                                {t("dr.corporalService.list.3.results")}
                              </span>
                              <p className="pb-4">
                                {t("dr.corporalService.list.3.resultsDescription")}
                              </p>
                            </li>
                          </ul>
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger className="text-lg">
                        {t("dr.corporalService.list.4.title")}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="pl-8 pb-3">
                          <ul className="list-none">
                            <li className="pb-1">
                              <span className="font-semibold block pb-2 text-[#365D78]">
                                {t("dr.corporalService.list.4.process")}
                              </span>
                              <p className="pb-4">
                                {t("dr.corporalService.list.4.processDescription")}
                              </p>
                            </li>
                            <li className="pb-1">
                              <span className="font-semibold block pb-2 text-[#365D78]">
                                {t("dr.corporalService.list.4.benefits")}
                              </span>
                              <p className="pb-4">
                                {t("dr.corporalService.list.4.benefitsDescription")}
                              </p>
                            </li>
                            <li className="pb-1">
                              <span className="font-semibold block pb-2 text-[#365D78]">
                                {t("dr.corporalService.list.4.results")}
                              </span>
                              <p className="pb-4">
                                {t("dr.corporalService.list.4.resultsDescription")}
                              </p>
                            </li>
                          </ul>
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>

            <div
              className="w-full lg:w-1/2 order-2 relative flex justify-center items-center"
            >
              <div className="relative w-full h-[30rem] sm:h-[30rem] lg:h-[34rem] lg:max-w-[25rem] lg:mt-[-10rem]" data-aos="fade-left">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img.src}
                    alt={`Procedimiento corporal ${index + 1}`}
                    className={`absolute inset-0 object-cover rounded-3xl transition-opacity ease-in-out
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

export default CorporalService;
