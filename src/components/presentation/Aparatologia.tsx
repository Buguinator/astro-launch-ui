import { useTranslation } from "react-i18next";

import { Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import { useEffect, useState } from "react";
import AOS from "aos";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import imgAparato1 from "../../assets/p-aparatologia/1.webp";
import imgAparato2 from "../../assets/p-aparatologia/2.webp";
import imgAparato3 from "../../assets/p-aparatologia/3.webp";
import imgAparato4 from "../../assets/p-aparatologia/4.webp";
import imgAparato5 from "../../assets/p-aparatologia/5.webp";
import imgAparato6 from "../../assets/p-aparatologia/6.webp";
import imgAparato7 from "../../assets/p-aparatologia/7.webp";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Aparatologia() {
  const { t } = useTranslation();

  const [current, setCurrent] = useState(0);
  const images = [
    imgAparato1,
    imgAparato2,
    imgAparato3,
    imgAparato4,
    imgAparato5,
    imgAparato6,
    imgAparato7,
  ];

  useEffect(() => {
    AOS.init({
      duration: 1600, // duración de la animación
      easing: "ease-out-cubic",
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
      <section className="w-full bg-white px-6 pb-20">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 lg:px-20">
          {/* Textos primero en desktop */}
          <div className="w-full lg:w-1/2 order-1" data-aos="fade-up">
            <Typography className="font-bold text-lg mb-5 text-rose">
              {t("home.deviceService.subtitle")}
            </Typography>
            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-6 leading-tight"
            >
              {t("home.deviceService.title")}
            </Typography>

            <h6 className="font-medium text-lg mb-5">
              {t("home.deviceService.sTitle")}
            </h6>

            <Accordion type="single" collapsible defaultValue="item-0">
              <AccordionItem value={`item-0`}>
                <AccordionTrigger className="text-lg">
                  {t("home.deviceService.service.1.title")}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="pl-4 pb-3">
                    <span
                      className="font-semibold block pb-2"
                      style={{ color: "#8d5f5b" }}
                    >
                      {t("home.deviceService.service.1.subtitle")}
                    </span>
                    <span>{t("home.deviceService.service.1.description")}</span>
                    <p
                      className="font-semibold pt-5 pb-2"
                      style={{ color: "#8d5f5b" }}
                    >
                      {t("home.deviceService.service.1.benefits")}
                    </p>
                    <ul className="list-disc pl-4">
                      <li className="pb-1">
                        {t("home.deviceService.service.1.benefitsList.1")}
                      </li>
                      <li className="pb-1">
                        {t("home.deviceService.service.1.benefitsList.2")}
                      </li>
                      <li className="pb-1">
                        {t("home.deviceService.service.1.benefitsList.3")}
                      </li>
                      <li className="pb-1">
                        {t("home.deviceService.service.1.benefitsList.4")}
                      </li>
                    </ul>
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value={`item-1`}>
                <AccordionTrigger className="text-lg">
                  {t("home.deviceService.service.2.title")}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="pl-4 pb-3">
                    <span
                      className="font-semibold block pb-2"
                      style={{ color: "#8d5f5b" }}
                    >
                      {t("home.deviceService.service.2.subtitle")}
                    </span>
                    <span>{t("home.deviceService.service.2.description")}</span>
                    <p
                      className="font-semibold pt-5 pb-2"
                      style={{ color: "#8d5f5b" }}
                    >
                      {t("home.deviceService.service.2.benefits")}
                    </p>
                    <ul className="list-disc pl-4">
                      <li className="pb-1">
                        {t("home.deviceService.service.2.benefitsList.1")}
                      </li>
                      <li className="pb-1">
                        {t("home.deviceService.service.2.benefitsList.2")}
                      </li>
                      <li className="pb-1">
                        {t("home.deviceService.service.2.benefitsList.3")}
                      </li>
                    </ul>
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value={`item-2`}>
                <AccordionTrigger className="text-lg">
                  {t("home.deviceService.service.3.title")}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="pl-4 pb-3">
                    <span
                      className="font-semibold block pb-2"
                      style={{ color: "#8d5f5b" }}
                    >
                      {t("home.deviceService.service.3.subtitle")}
                    </span>
                    <span>{t("home.deviceService.service.3.description")}</span>
                    <p
                      className="font-semibold pt-5 pb-2"
                      style={{ color: "#8d5f5b" }}
                    >
                      {t("home.deviceService.service.3.benefits")}
                    </p>
                    <ul className="list-disc pl-4">
                      <li className="pb-1"> {t("home.deviceService.service.3.benefitsList.1")}</li>
                      <li className="pb-1"> {t("home.deviceService.service.3.benefitsList.2")}</li>
                      <li className="pb-1"> {t("home.deviceService.service.3.benefitsList.3")}</li>
                      <li className="pb-1"> {t("home.deviceService.service.3.benefitsList.4")}</li>
                    </ul>
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value={`item-3`}>
                <AccordionTrigger className="text-lg">
                  {t("home.deviceService.service.4.title")}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="pl-4 pb-3">
                    <span
                      className="font-semibold block pb-2"
                      style={{ color: "#8d5f5b" }}
                    >
                      {t("home.deviceService.service.4.subtitle")}
                    </span>
                    <span>{t("home.deviceService.service.4.description")}</span>
                    <p
                      className="font-semibold pt-5 pb-2"
                      style={{ color: "#8d5f5b" }}
                    >
                      {t("home.deviceService.service.4.benefits")}
                    </p>
                    <ul className="list-disc pl-4">
                      <li className="pb-1"> {t("home.deviceService.service.4.benefitsList.1")}</li>
                      <li className="pb-1"> {t("home.deviceService.service.4.benefitsList.2")}</li>
                      <li className="pb-1"> {t("home.deviceService.service.4.benefitsList.3")}</li>
                      <li className="pb-1"> {t("home.deviceService.service.4.benefitsList.4")}</li>
                    </ul>
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value={`item-4`}>
                <AccordionTrigger className="text-lg">
                  {t("home.deviceService.service.5.title")}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="pl-4 pb-3">
                    <span
                      className="font-semibold block pb-2"
                      style={{ color: "#8d5f5b" }}
                    >
                      {t("home.deviceService.service.5.subtitle")}
                    </span>
                    <span>{t("home.deviceService.service.5.description")}</span>
                    <p
                      className="font-semibold pt-5 pb-2"
                      style={{ color: "#8d5f5b" }}
                    >
                      {t("home.deviceService.service.5.benefits")}
                    </p>
                    <ul className="list-disc pl-4">
                      <li className="pb-1"> {t("home.deviceService.service.5.benefitsList.1")}</li>
                      <li className="pb-1"> {t("home.deviceService.service.5.benefitsList.2")}</li>
                      <li className="pb-1"> {t("home.deviceService.service.5.benefitsList.3")}</li>
                      <li className="pb-1"> {t("home.deviceService.service.5.benefitsList.4")}</li>
                      <li className="pb-1"> {t("home.deviceService.service.5.benefitsList.5")}</li>
                    </ul>
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value={`item-5`}>
                <AccordionTrigger className="text-lg">
                  {t("home.deviceService.service.6.title")}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="pl-4 pb-3">
                    <span
                      className="font-semibold block pb-2"
                      style={{ color: "#8d5f5b" }}
                    >
                      {t("home.deviceService.service.6.subtitle")}
                    </span>
                    <span>{t("home.deviceService.service.6.description")}</span>
                    <p
                      className="font-semibold pt-5 pb-2"
                      style={{ color: "#8d5f5b" }}
                    >
                      {t("home.deviceService.service.6.benefits")}
                    </p>
                    <ul className="list-disc pl-4">
                      <li className="pb-1"> {t("home.deviceService.service.6.benefitsList.1")}</li>
                      <li className="pb-1"> {t("home.deviceService.service.6.benefitsList.2")}</li>
                      <li className="pb-1"> {t("home.deviceService.service.6.benefitsList.3")}</li>
                      <li className="pb-1"> {t("home.deviceService.service.6.benefitsList.4")}</li>
                      <li className="pb-1"> {t("home.deviceService.service.6.benefitsList.5")}</li>
                    </ul>
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Carrusel de imágenes */}
          <div className="w-full lg:w-1/2 order-2 relative flex justify-center items-center">
            <div
              className="relative w-full h-[30rem] sm:h-[30rem] lg:h-[34rem] lg:max-w-[25rem]"
              data-aos="fade-left"
            >
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img.src}
                  alt={`Procedimiento corporal ${index + 1}`}
                  className={`absolute inset-0 object-cover rounded-3xl transition-opacity duration-[1200ms] ease-in-out
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
      </section>
    </ThemeProvider>
  );
}

export default Aparatologia;
