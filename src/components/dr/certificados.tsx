import { useEffect, useRef } from "react";
import { Typography } from "@material-tailwind/react";
import img1 from "../../assets/certificados-dr/1.webp";
import img2 from "../../assets/certificados-dr/2.png";
import img3 from "../../assets/certificados-dr/3.png";
import img4 from "../../assets/certificados-dr/4.png";
import img5 from "../../assets/certificados-dr/5.png";

const logos = [img1, img2, img3, img4, img5];

export function LogoSectionOne() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    let startTime = null;
    const width = marquee.scrollWidth / 2; // La mitad porque duplicamos los logos
    const duration = 20; // Duración en segundos para una vuelta completa

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000; // Convertir a segundos
      const progress = (elapsed % duration) / duration; // Progress entre 0 y 1
      marquee.style.transform = `translateX(-${progress * width}px)`;
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
          Con la confianza de los mejores aliados
        </Typography>
        <div className="relative w-full overflow-hidden h-[140px] flex items-center">
          {/* Contenedor del marquee */}
          <div
            ref={marqueeRef}
            className="flex items-center gap-20 absolute left-0 top-0 min-w-max will-change-transform"
            style={{ whiteSpace: "nowrap" }}
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
