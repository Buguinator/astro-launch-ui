import { useTranslation } from "react-i18next";

import { useEffect, useRef } from "react";
import { Typography } from "@material-tailwind/react";
import img1 from "../../assets/certificados-dra/1.webp";
import img2 from "../../assets/certificados-dra/2.webp";
import img3 from "../../assets/certificados-dra/3.webp";

const logos = [img1, img2, img3];

export function LogoSectionOne() {
  const { t } = useTranslation();
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    let startTime = null;
    const logoWidth = 180; // Ancho de cada logo (incluyendo gap)
    const visibleLogos = 3; // Número de logos visibles en pantalla
    const totalWidth = logoWidth * logos.length; // Ancho total de los logos originales
    const duration = 20; // Duración en segundos para una vuelta completa

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000; // Convertir a segundos
      const progress = (elapsed % duration) / duration; // Progress entre 0 y 1
      // Desplazamiento total: (totalWidth * 2) para cubrir los logos duplicados
      marquee.style.transform = `translateX(-${progress * totalWidth}px)`;
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <section className="py-8 px-8 lg:py-10 overflow-hidden">
      <div className="container mx-auto text-center">
        <Typography
          variant="h2"
          color="blue-gray"
          className="mb-12 text-2xl md:text-3xl font-semibold"
        >
          {t("dra.certificates.title")}
        </Typography>
        <div className="relative w-full overflow-hidden h-[140px] flex items-center">
          {/* Contenedor del marquee */}
          <div
            ref={marqueeRef}
            className="flex items-center gap-20 absolute left-0 top-0 will-change-transform"
            style={{ minWidth: "max-content" }}
          >
            {/* Duplicamos los logos para el efecto infinito */}
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`logo-${index}`}
                className="flex items-center justify-center w-[180px] h-[100px]"
              >
                <img
                  src={logo.src}
                  alt={`Logo ${index + 1}`}
                  className="h-[80px] w-auto object-contain filter grayscale hover:filter-none transition-all duration-300 mx-auto"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogoSectionOne;
