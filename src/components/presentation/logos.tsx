import { Typography } from "@material-tailwind/react";

import img1 from "../../assets/aliance/1.webp";
import img2 from "../../assets/aliance/2.webp";
import img3 from "../../assets/aliance/3.webp";
import img4 from "../../assets/aliance/4.webp";
import img5 from "../../assets/aliance/5.webp";
import img6 from "../../assets/aliance/6.webp";
import img7 from "../../assets/aliance/7.webp";
import img8 from "../../assets/aliance/8.webp";
import img9 from "../../assets/aliance/9.webp";
import img10 from "../../assets/aliance/10.webp";
import img11 from "../../assets/aliance/11.webp";
import img12 from "../../assets/aliance/12.webp";
import img13 from "../../assets/aliance/13.webp";
import img14 from "../../assets/aliance/14.webp";
import img15 from "../../assets/aliance/15.webp";

const logos = [
  img1, img2, img3, img4, img5, img6, img7, img8,
  img9, img10, img11, img12, img13, img14, img15
];

export function LogoSectionOne() {
  return (
    <section className="py-8 px-8 lg:py-20 overflow-hidden">
      <div className="container mx-auto text-center">
        <Typography variant="h2" color="blue-gray" className="mb-8 text-[1.5rem] md:text-[2rem] pt-20 md:pt-10">
          Con la confianza de los mejores aliados
        </Typography>

        {/* Carrusel continuo */}
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-marquee gap-20 pt-10">
            {/* Logos duplicados para crear efecto infinito */}
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={logo.src}
                  alt={`logo-${index}`}
                  className="h-8 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Estilos del marquee */}
      <style>
        {`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }

          .animate-marquee {
            animation: marquee 45s linear infinite;
          }

          /* Duplicar el contenido evita saltos al terminar */
        `}
      </style>
    </section>
  );
}

export default LogoSectionOne;
