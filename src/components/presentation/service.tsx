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

export function ServiceAbout({
  service,
}: {
  service: {
    title: string;
    description: string;
    subtitle: string;
    services: Array<any>;
  };
}) {
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
              {service.subtitle}
            </Typography>
            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-6 leading-tight"
            >
              {service.title}
            </Typography>

            <h6 className="font-medium text-base mb-5 text-gray-800">
              Servicios:
            </h6>

            <Accordion type="single" collapsible defaultValue="item-0">
              {service.services.map((props: any, key: number) => (
                <AccordionItem key={key} value={`item-${key + 1}`}>
                  {props?.list ? (
                    <AccordionTrigger className="text-lg">
                      {key + 1}. {props.title}
                    </AccordionTrigger>
                  ) : (
                    <p className="text-lg py-4">
                      {key + 1}. {props.title}
                    </p>
                  )}

                  {props?.list?.map((item: any, key: number) => (
                    <AccordionContent key={key}>
                      <p className="pl-4 pb-3">
                        <span
                          className="font-semibold block pb-2"
                          style={{ color: "#8d5f5b" }}
                        >
                          {item.title}
                        </span>
                        <span>{item.description}</span>
                        {props?.benefits?.length > 0 && (
                          <p
                            className="font-semibold pt-5 pb-2"
                            style={{ color: "#8d5f5b" }}
                          >
                            Beneficios
                          </p>
                        )}
                        <ul className="list-disc pl-4">
                          {props?.benefits?.map((benefit: any, i: number) => (
                            <li key={i} className="pb-1">
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </p>
                    </AccordionContent>
                  ))}
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Carrusel de imágenes */}
          <div
            className="w-full lg:w-1/2 order-2 relative flex justify-center items-center"
          >
            <div className="relative w-full h-[30rem] sm:h-[30rem] lg:h-[34rem] lg:max-w-[25rem]" data-aos="fade-left">
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

export default ServiceAbout;
