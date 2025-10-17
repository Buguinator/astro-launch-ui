import React from "react";
import {
  Button,
  Typography
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import imgLaser from "../../assets/p-laserVi.webp";

function StatsCard({ title, desc }) {
  return (
    <li className="font-medium text-lg italic">
      {title}
    </li>
  );
}

const stats = [
  {
    title: "Masaje postquirúrgicos",
    desc: "From buttons, to inputs, navbars, alerts, tabels, cards or charts.",
  },
  {
    title: "Radiofrecuencia",
    desc: "Save months of work when you use our pre-made pages.",
  },
  {
    title: "Masaje linfático",
    desc: "Mix the already made sections and unleash your creativity.",
  },
  {
    title: "Ultrasonido",
    desc: "Colors, typography system, shadows, and blur effects are ready to be used.",
  },
  {
    title: "LPG-Endermologie corporal",
    desc: "Colors, typography system, shadows, and blur effects are ready to be used.",
  },
];

export function CodePresentation() {
 
  return (
    <ThemeProvider>
      <div className="h-full w-screen place-items-center px-8 pb-8 pt-24 bg-rosita">
        <div className="container mx-auto grid items-center relative lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <Typography
              className="flex items-center justify-center lg:justify-start font-bold text-lg mb-5 text-rose"
            >
              Láser Vydence 
            </Typography>

            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-8 leading-tight"
            >
              Tratamientos Láser
            </Typography>
            <Typography color="blue-gray" className="lg:pr-20">
              Descubre el poder de la tecnología láser Vydence, diseñada para tratar una amplia gama
              de afecciones cutáneas con precisión y eficacia. Con Vydence, te ofrecemos soluciones
              personalizadas para que luzcas una piel radiante y saludable.
            </Typography>
            <div className="mt-10">
                  <h6 className="font-bold text-lg mb-5">
                    Servicios:
                  </h6>
              <ul className="list-disc list-inside">
                {stats.map((props, key) => (
                  <StatsCard key={key} {...props} />
                ))}
              </ul>
            </div>
          </div>
            <img 
              src={imgLaser.src} 
              alt="Láser Vydence" 
              className="rounded-3xl hidden md:flex mx-auto max-w-[25rem]" 
              style={{ boxShadow: '0 4px 12px -2px rgba(248, 187, 217, 0.5)' }}
            />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default CodePresentation;
