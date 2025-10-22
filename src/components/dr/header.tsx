import { Button, Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import Navbar from "../navbar"
import imgDr from "../../assets/dr.jpg";

export function HeroSectionTwo() {
  return (
    <ThemeProvider>
      <Navbar />
      <header className="h-full w-screen place-items-center bg-white px-8 pb-28 pt-5">
        <div className="container mx-auto grid items-center lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <div className="mb-8 inline-flex items-center rounded-lg">
              <Typography
                variant="small"
                className="rounded-md bg-blue py-0.5 px-3 font-medium text-white"
              >
                Conoce a
              </Typography>
              {/* <Typography
                color="dark"
                variant="small"
                className="!flex !items-center !font-semibold"
              >
                Personalized coaching in-app
                <ArrowSmallRightIcon
                  className="ml-1.5 h-4 w-4"
                  strokeWidth={3}
                />
              </Typography> */}
            </div>
            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-8 leading-tight lg:text-6xl"
            >
              Dr. Javier Parada Armonía en Cirugía Plástica
            </Typography>
            <Typography variant="lead" className="lg:pr-10 text-blue-gray-800">
              El Dr. Parada es un Cirujano Plástico Certificado por el Consejo
              Mexicano de Cirugía Plástica, Estética y Reconstructiva (No.
              2546), con práctica en Guadalajara y Tuxtla Gutiérrez.
            </Typography>
            <Typography className="lg:pr-10 text-blue-gray-800 text-base pt-5">
              Su enfoque personalizado y técnicas avanzadas garantizan resultados naturales y armoniosos, priorizando la seguridad y satisfacción de cada paciente.
            </Typography>
            <div className="mt-12 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Button color="blue" className="flex items-center">
                Agendar cita
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex">
            <img
              src={imgDr.src}
              alt="iphone"
              className="max-w-md rounded ml-auto"
            />
          </div>
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeroSectionTwo;
