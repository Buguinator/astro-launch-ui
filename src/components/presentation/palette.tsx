import { useEffect, useState } from "react";
import { Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

import AOS from "aos";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import imgCorporal1 from "../../assets/p-corporales/1.webp";
import imgCorporal2 from "../../assets/p-corporales/2.webp";
import imgCorporal3 from "../../assets/p-corporales/3.webp";

function StatsCard({ title }: { title: string }) {
  return <li className="font-medium text-lg italic">{title}</li>;
}

const stats = [
  { title: "Masajes postquirúrgicos" },
  { title: "Radiofrecuencia" },
  { title: "Masaje linfático" },
  { title: "Ultrasonido" },
  { title: "LPG-Endermologie corporal" },
];

export function PalettePresentation() {
  const [current, setCurrent] = useState(0);
  const images = [imgCorporal1, imgCorporal2, imgCorporal3];

  // Inicializa AOS
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
      <div className="relative w-screen bg-white px-6 py-16 md:px-10 lg:px-20 overflow-hidden">
        <div
          className="container mx-auto grid gap-10 items-center lg:grid-cols-2 relative lg:flex-row flex flex-col-reverse"
        >
          {/* Imagen */}
          <div
            className="order-2 lg:order-1 relative flex justify-center items-center"
          >
            <div className="relative w-full h-[30rem] sm:h-[30rem] lg:h-[34rem] lg:max-w-[25rem]" data-aos="fade-right">
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

          {/* Texto */}
          <div className="order-1 lg:order-2 text-left lg:px-10 z-10" data-aos="fade-up">
            <Typography className="font-bold text-lg mb-5 text-rose">
              Moldea, tonifica y armoniza tu figura.
            </Typography>

            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-8 leading-tight"
            >
              Procedimientos Corporales
            </Typography>

            <Typography color="gray" className="mb-8 text-lg">
              En nuestra área de procedimientos corporales, nos enfocamos en brindarte tratamientos
              especializados para moldear y mejorar tu figura, así como para optimizar tu recuperación
              postquirúrgica.
            </Typography>

            <div>
              <h6 className="font-medium text-lg mb-5">Servicios:</h6>
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
