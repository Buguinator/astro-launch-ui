import { useTranslation } from "react-i18next";

import { useEffect, useState } from "react";


import { Button, Card, CardBody, Typography } from "@material-tailwind/react";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import imgDiodo1 from "../../assets/p-diodo/1.webp";
import imgDiodo2 from "../../assets/p-diodo/2.webp";
import imgDiodo3 from "../../assets/p-diodo/3.webp";
import imgDiodo4 from "../../assets/p-diodo/4.webp";
import imgDiodo5 from "../../assets/p-diodo/5.webp";

export function DiodoService() {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);
  const images = [imgDiodo1, imgDiodo2, imgDiodo3, imgDiodo4, imgDiodo5];



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
    <section className="py-8 px-8 lg:py-20 bg-rosita overflow-hidden">
      <div className="container mx-auto">
        <Card
          shadow={false}
          className="flex-col overflow-hidden rounded-3xl md:flex-row md:gap-12 bg-rose md:py-5"
        >
          <CardBody className="md:py-20 md:px-14 md:w-12/12 lg:w-7/12" data-aos="fade-up">
            <Typography color="white" className="font-semibold text-lg">
              {t("home.diodoService.subtitle")}
            </Typography>
            <Typography variant="h2" color="white" className="mb-5 font-semibold pt-4">
              {t("home.diodoService.title")}
            </Typography>
            <Typography color="white">
              {t("home.diodoService.description")}
            </Typography>
            <a href="/contacto">
              <Button
                color="white"
                size="sm"
                variant="outlined"
                className="flex items-center mt-12"
              >
                {t("home.diodoService.button")}
              </Button>
            </a>
          </CardBody>

          {/* Carrusel de imágenes */}
          <div
            // ref={imgRef}
            className="w-full lg:w-1/2 order-2 relative flex justify-center items-center"
          >
            <div className="relative w-full h-[30rem] sm:h-[30rem] lg:h-[34rem] lg:max-w-[25rem]" data-aos="fade-up">
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
        </Card>
      </div>
    </section>
  );
}

export default DiodoService;
