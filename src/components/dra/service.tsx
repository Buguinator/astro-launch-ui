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
              {service.subtitle}
            </Typography>
            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-5 leading-tight"
              data-aos="fade-up"
            >
              {service.title}
            </Typography>
            <Typography color="gray" className="pb-5 lg:w-1/2" data-aos="fade-up">
              {service.description}
            </Typography>
          </div>

          <div className="lg:flex relative lg:px-20">
            <div className="lg:w-1/2">
              <div className="p-2 lg:p-0 mb-8">
                <div data-aos="fade-up">
                  <h6 className="font-medium text-base mb-5 text-gray-800">
                    {service.description2}
                  </h6>
                  <Accordion type="single" collapsible defaultValue="item-0">
                    {service?.services[0]?.list ? (
                      <>
                        {service?.services?.map((props: any, key: number) => (
                          <AccordionItem key={key} value={`item-${key + 1}`}>
                            <AccordionTrigger className="text-lg">
                              {key + 1}. {props.title}
                            </AccordionTrigger>
                            <AccordionContent>
                              {props?.list?.map((item: any, key: number) => (
                                <p key={key} className="pl-4 pb-3">
                                  <span className="font-semibold block">
                                    {item.title}:
                                  </span>
                                  <span className="pb-3">
                                    {item.description}
                                  </span>
                                  {item?.benefits?.map((benefit: any, key: number) => (
                                    <span key={key} className="pb-4">
                                      {benefit} <br />
                                    </span>
                                  ))}
                                </p>
                              ))}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </>
                    ) : (
                      <>
                        {service?.services.map((props: any, key: number) => (
                          <AccordionItem key={key} value={`item-${key + 1}`}>
                            <p className="text-lg py-2">
                              {key + 1}. {props.title}{" "}
                            </p>
                          </AccordionItem>
                        ))}
                      </>
                    )}
                  </Accordion>
                </div>
              </div>
            </div>

            <div
            className="w-full lg:w-1/2 order-2 lg:order-1 relative flex justify-center items-center"
          >
            <div className="relative w-full h-[26rem] sm:h-[30rem] lg:h-[34rem] lg:max-w-[25rem]" data-aos="fade-left">
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
