import { useEffect, useRef } from "react";
import { Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import imgCorporal from "../../assets/p-corporal.webp";

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
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = imgRef.current;

    gsap.fromTo(
      el,
      { x: -300, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",     // entra cuando la parte superior de la imagen está al 80% del viewport
          end: "bottom 10%",    // sale cuando el bottom llega al 20%
          scrub: true,          // vincula la animación al scroll
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <ThemeProvider>
      <div className="h-full w-screen place-items-center bg-white px-8 py-20">
        <div className="container mx-auto grid items-center relative lg:grid-cols-2">
          {/* Imagen animada */}
          <div className="hidden lg:flex">
            <img
              ref={imgRef}
              src={imgCorporal.src}
              alt="Procedimientos corporales"
              className="rounded-3xl mx-auto max-w-[25rem]"
              style={{
                boxShadow: "0 4px 12px -2px rgba(248, 187, 217, 0.5)",
              }}
            />
          </div>

          {/* Texto */}
          <div className="text-center lg:text-left lg:px-10">
            <Typography className="flex items-center justify-center lg:justify-start !font-bold text-lg mb-5 text-rose">
              {service.subtitle}
            </Typography>

            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-8 leading-tight"
            >
              {service.title}
            </Typography>

            <Typography color="gray" className="pb-5">
              {service.description}
            </Typography>

            <div>
                  <h6 className="font-medium text-base mb-5 text-gray-800">
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
                            <p className="text-lg py-3">
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
      </div>
    </ThemeProvider>
  );
}

export default ServiceRight;
