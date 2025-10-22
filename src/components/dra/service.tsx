import { Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import imgFacial from "../../assets/p-facial.jpg";

export function ServiceAbout({
  service,
  img,
}: {
  service: {
    title: string;
    subtitle: string;
    description: string;
    description2: string;
    services: Array<any>;
  };
  img: string;
}) {
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = imgRef.current;

    // Animación de entrada y salida con scroll
    gsap.fromTo(
      el,
      { x: 300, opacity: 0 },
      {
        x: 50,
        opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%", // entra cuando el top de la imagen está al 80% del viewport
          end: "bottom 10%", // sale cuando el bottom llega al 20%
          scrub: true, // la animación sigue el scroll
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <ThemeProvider>
      <div className="h-full w-screen place-items-center bg-white px-8 pb-20">
        <div className="container mx-auto relative">
          <div className="text-left lg:px-20">
            <Typography className="font-bold text-lg mb-5 text-rose">
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
                <div>
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
                                    <span key={key} className="pb-3">
                                      {benefit}
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

            <div className="lg:w-1/2 flex justify-center">
              <img
                ref={imgRef}
                src={img}
                alt="Procedimientos faciales"
                className="lg:max-w-[25rem] rounded-3xl hidden md:flex ml-auto lg:absolute -top-5 mt-[-5rem]"
                style={{
                  boxShadow: "0 4px 12px -2px rgba(248, 187, 217, 0.5)",
                }}
                draggable="false"
              />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default ServiceAbout;
