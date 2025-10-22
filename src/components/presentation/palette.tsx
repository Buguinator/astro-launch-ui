import { useEffect, useRef } from "react";
import { Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import imgCorporal from "../../assets/p-corporal.webp";

function StatsCard({ title }) {
  return <li className="font-medium text-lg italic">{title}</li>;
}

const stats = [
  { title: "Masaje postquirúrgicos" },
  { title: "Radiofrecuencia" },
  { title: "Masaje linfático" },
  { title: "Ultrasonido" },
  { title: "LPG-Endermologie corporal" },
];

export function PalettePresentation() {
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
          <div className="text-center lg:text-left lg:px-20">
            <Typography className="flex items-center justify-center lg:justify-start !font-bold text-lg mb-5 text-rose">
              Moldea, tonifica y armoniza tu figura.
            </Typography>

            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-8 leading-tight"
            >
              Procedimientos Corporales
            </Typography>

            <Typography color="gray" className="lg:pr-20">
              En nuestra área de procedimientos corporales, nos enfocamos en brindarte tratamientos
              especializados para moldear y mejorar tu figura, así como para optimizar tu recuperación
              postquirúrgica.
            </Typography>

            <div className="mt-10">
              <h6 className="font-bold text-lg mb-5">Servicios:</h6>
              <ul className="list-disc list-inside">
                {stats.map((props, key) => (
                  <StatsCard key={key} {...props} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default PalettePresentation;
