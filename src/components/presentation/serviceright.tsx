import { useEffect, useState } from "react";
import { Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

import AOS from "aos";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import imgTrata1 from "../../assets/p-tratamientos/1.webp";
import imgTrata2 from "../../assets/p-tratamientos/2.webp";
import imgTrata3 from "../../assets/p-tratamientos/3.webp";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function ServiceRight({
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
  const images = [imgTrata1, imgTrata2, imgTrata3];

  useEffect(() => {
    AOS.init({
      duration: 1600, // duración de la animación
      easing: "linear",
      
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
      <div className="relative w-screen bg-white px-6 py-16 md:px-10 lg:px-20 overflow-hidden mb-24">
        <div
          className="container mx-auto grid gap-10 items-center relative
                     lg:flex-row flex flex-col-reverse lg:grid-cols-2"
        >
          <div
            className="order-2 lg:order-1 relative flex justify-center items-center"
          >
            <div className="relative w-full h-[30rem] sm:h-[30rem] lg:h-[34rem] lg:max-w-[25rem]" data-aos="fade-right">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img.src}
                  alt={`Procedimiento ${index + 1}`}
                  className={`absolute inset-0 object-cover rounded-3xl transition-opacity duration-[1200ms] ease-in-out
                    ${index === current ? "opacity-100" : "opacity-0"}
                    w-full h-full`}
                />
              ))}

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

          <div className="order-1 lg:order-2 text-left lg:px-10 z-10" data-aos="fade-up">
            <Typography className="!font-bold text-lg mb-5 text-rose flex justify-center lg:justify-start">
              {service.subtitle}
            </Typography>

            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-8 leading-tight"
            >
              {service.title}
            </Typography>

            <Typography color="gray" className="mb-8">
              {service.description}
            </Typography>

            <div>
              <h6 className="font-medium mb-5 text-gray-800 text-lg lg:text-base">
                Servicios:
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
                            <div key={key} className="pl-4 pb-3">
                              <p className="font-semibold pb-3 text-lg lg:text-base">{item.title}:</p>
                              <p className="pb-2 text-lg lg:text-base">{item.description}</p>
                              {item?.benefits?.map((benefit: any, idx: number) => (
                                <p key={idx} className="text-lg lg:text-base text-gray-600">
                                  • {benefit}
                                </p>
                              ))}
                            </div>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </>
                ) : (
                  <>
                    {service?.services.map((props: any, key: number) => (
                      <AccordionItem key={key} value={`item-${key + 1}`}>
                        <p className="py-3 text-lg lg:text-base">
                          {key + 1}. {props.title}
                        </p>
                      </AccordionItem>
                    ))}
                  </>
                )}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default ServiceRight;
