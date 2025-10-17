import React from "react";
import { Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

import imgCorporal from "../../assets/p-corporal.webp";

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

export function PalettePresentation() {
  return (
    <ThemeProvider>
      <div className="h-full w-screen place-items-center bg-white px-8 py-20">
        <div className="container mx-auto grid items-center relative lg:grid-cols-2">
          <div className="hidden lg:flex">
            <img
              src={imgCorporal.src}
              alt="Procedimientos corporales"
              className="rounded-3xl mx-auto max-w-[25rem]"
              style={{ boxShadow: '0 4px 12px -2px rgba(248, 187, 217, 0.5)' }}
            />
          </div>

          <div className="text-center lg:text-left">
            <Typography className="flex items-center justify-center lg:justify-start !font-bold text-lg mb-5 text-rose">
              Moldea, tonifica y armoniza tu figura.
            </Typography>

            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-8 leading-tight"
            >
              Procedimientos Corporales
            </Typography>
            <Typography color="gray" className="lg:pr-20">
              En nuestra área de procedimientos corporales, nos enfocamos en brindarte
              tratamientos especializados para moldear y mejorar tu figura, así como para optimizar
              tu recuperación postquirúrgica.
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
        </div>
      </div>
    </ThemeProvider>
  );
}

export default PalettePresentation;
