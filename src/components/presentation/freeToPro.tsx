import { Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import AOS from "aos";

import imgFacial1 from "../../assets/p-faciales/2.webp";
import imgFacial2 from "../../assets/p-faciales/3.webp";
import imgFacial3 from "../../assets/p-faciales/4.webp";
import imgFacial4 from "../../assets/p-faciales/5.webp";
import imgFacial5 from "../../assets/p-faciales/6.webp";
import imgFacial6 from "../../assets/p-faciales/7.webp";
import imgFacial7 from "../../assets/p-faciales/8.webp";
import imgFacial8 from "../../assets/p-faciales/9.webp";
import imgFacial9 from "../../assets/p-faciales/10.webp";
import imgFacial10 from "../../assets/p-faciales/11.webp";
import imgFacial11 from "../../assets/p-faciales/12.webp";

function StatsCard({ title }: { title: string }) {
  return <li className="font-medium text-lg italic">{title}</li>;
}

const stats = [
  { title: "Peelings" },
  { title: "Fillers" },
  { title: "Toxina Botulínica" },
  { title: "Bioestimuladores" },
  { title: "Bioremodeladores" },
  { title: "Faciales" },
  { title: "Hydrafaciales" },
  { title: "Microneedling" },
  { title: "LPG-Endermologie facial" },
];

export function FigmaPresentation() {
  const [current, setCurrent] = useState(0);
  const images = [
    imgFacial1,
    imgFacial2,
    imgFacial3,
    imgFacial4,
    imgFacial5,
    imgFacial6,
    imgFacial7,
    imgFacial8,
    imgFacial9,
    imgFacial10,
    imgFacial11,
  ];

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

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);

  return (
    <ThemeProvider>
      <section className="h-full w-full bg-white px-6 py-16 lg:px-12 lg:py-20">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2" data-aos="fade-up">
            <Typography className="font-bold text-lg mb-5 text-rose">
              Armonía facial sin perder tu esencia.
            </Typography>

            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-5 leading-tight"
            >
              Procedimientos Faciales
            </Typography>

            <Typography color="blue-gray" className="mb-10 lg:w-[30rem]">
              En nuestra área de procedimientos faciales, nos dedicamos a realzar tu belleza natural
              y rejuvenecer tu rostro con una amplia gama de tratamientos avanzados y personalizados.
              Nuestro equipo de expertos te brindará una atención integral y te guiará en la elección
              de los procedimientos más adecuados para tus necesidades y objetivos estéticos.
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

export default FigmaPresentation;
