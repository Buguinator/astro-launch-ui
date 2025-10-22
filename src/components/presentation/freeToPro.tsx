import { Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import imgFacial from "../../assets/p-facial.jpg";

function StatsCard({ title }) {
  return (
    <li className="font-medium text-lg italic">{title}</li>
  );
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
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = imgRef.current;

    // Animación de entrada y salida con scroll
    gsap.fromTo(
      el,
      { x: 300, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",     // entra cuando el top de la imagen está al 80% del viewport
          end: "bottom 10%",    // sale cuando el bottom llega al 20%
          scrub: true,          // la animación sigue el scroll
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <ThemeProvider>
      <div className="h-full w-screen place-items-center bg-white px-8 py-20">
        <div className="container mx-auto relative">
          <div className="text-left lg:px-20">
            <Typography className="font-bold text-lg mb-5 text-rose">
              Armonía facial sin perder tu esencia.
            </Typography>

            <Typography variant="h2" color="blue-gray" className="mb-5 leading-tight">
              Procedimientos Faciales
            </Typography>

            <Typography color="blue-gray" className="mb-10 lg:w-[30rem]">
              En nuestra área de procedimientos faciales, nos dedicamos a realzar tu belleza natural
              y rejuvenecer tu rostro con una amplia gama de tratamientos avanzados y personalizados.
              Nuestro equipo de expertos te brindará una atención integral y te guiará en la elección
              de los procedimientos más adecuados para tus necesidades y objetivos estéticos.
            </Typography>
          </div>

          <div className="lg:flex relative lg:px-20">
            <div className="lg:w-1/2">
              <div className="p-2 lg:p-0 mb-8">
                <div>
                  <h6 className="font-bold text-lg mb-5">Servicios:</h6>
                  <ul className="list-disc list-inside">
                    {stats.map((props, key) => (
                      <StatsCard key={key} {...props} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 flex justify-center">
              <img
                ref={imgRef}
                src={imgFacial.src}
                alt="Procedimientos faciales"
                className="lg:max-w-[25rem] rounded-3xl hidden md:flex ml-auto lg:absolute -top-24 mt-[-10rem]"
                style={{ boxShadow: "0 4px 12px -2px rgba(248, 187, 217, 0.5)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default FigmaPresentation;
