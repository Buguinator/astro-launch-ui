import { Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

import imgFacial from "../../assets/p-facial.jpg";

function StatsCard({ title, desc }) {
  return (
    <li className="font-medium text-lg italic">
      {title}
    </li>
  );
}

const stats = [
  {
    title: "Peelings",
    desc: "From buttons, to inputs, navbars, alerts, tabels, cards or charts.",
  },
  {
    title: "Fillers",
    desc: "Save months of work when you use our pre-made pages.",
  },
  {
    title: "Toxina Botulínica",
    desc: "Mix the already made sections and unleash your creativity.",
  },
  {
    title: "Bioestimuladores",
    desc: "Colors, typography system, shadows, and blur effects are ready to be used.",
  },
  {
    title: "Bioremodeladores",
    desc: "Colors, typography system, shadows, and blur effects are ready to be used.",
  },
  {
    title: "Faciales",
    desc: "Colors, typography system, shadows, and blur effects are ready to be used.",
  },
  {
    title: "Hydrafaciales",
    desc: "Colors, typography system, shadows, and blur effects are ready to be used.",
  },
  {
    title: "Microneedling",
    desc: "Colors, typography system, shadows, and blur effects are ready to be used.",
  },
  {
    title: "LPG-Endermologie facial",
    desc: "Colors, typography system, shadows, and blur effects are ready to be used.",
  },
];

export function FigmaPresentation() {
  return (
    <ThemeProvider>
      <div className="h-full w-screen place-items-center bg-white px-8 py-20">
        <div className="container mx-auto relative">
          <div className="text-left">
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
            <Typography color="blue-gray" className="mb-10 lg:w-[40rem]">
              En nuestra área de procedimientos faciales, nos dedicamos a
              realzar tu belleza natural y rejuvenecer tu rostro con una amplia
              gama de tratamientos avanzados y personalizados. Nuestro equipo de
              expertos te brindará una atención integral y te guiará en la
              elección de los procedimientos más adecuados para tus necesidades
              y objetivos estéticos.
            </Typography>
          </div>
          <div className="lg:flex relative">
            <div className="lg:w-1/2">
              <div className="p-2 lg:p-0 mb-8">
                <div >
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
            <div className="lg:w-1/2 flex justify-center">
              <img
              src={imgFacial.src}
              alt="Procedimientos faciales"
              className="lg:max-w-[25rem] rounded-3xl hidden md:flex ml-auto lg:absolute -top-24 mt-[-10rem]"
              style={{ boxShadow: '0 4px 12px -2px rgba(248, 187, 217, 0.5)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default FigmaPresentation;
