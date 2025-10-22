import { Button, Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import Navbar from "../navbar";
import imgDra from "../../assets/dra.jpeg";

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
                className="rounded-md bg-rose py-0.5 px-3 font-medium text-white"
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
              Dra. Mariana León-Quintero
            </Typography>
            <Typography variant="lead" className="lg:pr-10 text-blue-gray-800">
              La Dra. Mariana León-Quintero es una dermatóloga experta en el
              cuidado integral de la piel, pelo y uñas, con práctica en
              Guadalajara.
            </Typography>
            <Typography className="lg:pr-10 text-blue-gray-800 text-base pt-5">
              Abarcando desde tratamientos clínicos para el acné y las manchas,
              hasta procedimientos estéticos que realzan la belleza natural. Su
              enfoque personalizado y su conocimiento actualizado en
              dermatología clínica y estética garantizan resultados óptimos y
              seguros para cada paciente.
            </Typography>
            <div className="mt-12 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Button className="flex items-center bg-rose">
                Agendar cita
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex">
            <img
              src={imgDra.src}
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
