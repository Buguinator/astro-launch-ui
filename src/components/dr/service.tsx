import { Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import { useEffect, useRef, useState } from "react";



import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function ServiceAbout({
  service,
  images,
}: {
  service: {
    title: string;
    description: string;
    subtitle: string;
    services: Array<any>;
  };
  images: Array<any>;
}) {
  const [current, setCurrent] = useState(0);



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
      <div className="h-full w-full place-items-center bg-white px-8 pb-20 overflow-hidden">
        <div className="container mx-auto relative">
          <div className="text-left lg:px-20" data-aos="fade-up">
            <Typography className="font-bold text-lg mb-5 text-[#365D78]">
              {service.subtitle}
            </Typography>
            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-5 leading-tight"
            >
              {service.title}
            </Typography>
          </div>

          <div className="lg:flex relative lg:px-20">
            <div className="lg:w-1/2">
              <div className="p-2 lg:p-0 mb-8">
                <div data-aos="fade-up">
                  <h6 className="font-medium text-base mb-5 text-gray-800">
                    Servicios:
                  </h6>
                  <Accordion type="single" collapsible defaultValue="item-0">
                    {service.services.map((props: any, key: number) => {
                      return (
                        <AccordionItem key={key} value={`item-${key + 1}`}>
                          {props?.list ? (
                            <AccordionTrigger className="text-lg">
                              {key + 1}. {props.title}
                            </AccordionTrigger>
                          ) : (
                            <p className="text-lg py-4">
                              {key + 1}. {props.title}{" "}
                            </p>
                          )}
                          {props?.list?.map((item: any, key: number) => (
                            <AccordionContent>
                              <p key={key} className="pl-4 pb-3">
                                <span className="font-semibold block pb-2 text-[#365D78]">
                                  {item.title}:
                                </span>
                                <span className="pb-3">{item.description}</span>
                                {item?.benefits?.length > 0 && (
                                  <>
                                    {item?.benefits?.map(
                                      (benefit: any, key: number) => (
                                        <li key={key} className="pb-1">
                                          {benefit}
                                        </li>
                                      )
                                    )}
                                  </>
                                )}
                              </p>
                            </AccordionContent>
                          ))}
                        </AccordionItem>
                      );
                    })}
                  </Accordion>
                </div>
              </div>
            </div>

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
        </div>
      </div>
    </ThemeProvider>
  );
}

export default ServiceAbout;
