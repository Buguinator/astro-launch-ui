import { Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import { useEffect } from "react";

import AOS from "aos";

import videoLaser from "../../assets/video/vydence.webm";

function StatsCard({ title }: { title: string }) {
  return (
    <li className="font-medium text-lg italic">
      {title}
    </li>
  );
}

const stats = [
  { title: "Cicatrices de acné" },
  { title: "Cicatrices post-quirúrgicas" },
  { title: "Estrías" },
  { title: "Rejuvenecimiento de cara y cuello" },
  { title: "Tratamientos para acné inflamatorio" },
  { title: "Manchas solares" },
  { title: "Pigmentaciones" },
  { title: "Melasma" },
];

export function CodePresentation() {

  useEffect(() => {
    AOS.init({
      duration: 1600,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <ThemeProvider>
      <div className="h-full w-screen place-items-center px-8 pb-8 pt-24 bg-rosita">
        <div className="container mx-auto grid items-center relative lg:grid-cols-2">
          {/* Texto */}
          <div className="text-left lg:px-20" data-aos="fade-up">
            <Typography className="flex items-center justify-start font-bold text-lg mb-5 text-rose">
              Tratamiento Láser
            </Typography>

            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-8 leading-tight"
            >
              Láser Vydence
            </Typography>

            <Typography color="blue-gray" className="lg:pr-20">
              Descubre el poder de la tecnología láser Vydence, diseñada para
              tratar una amplia gama de afecciones cutáneas con precisión y
              eficacia. Con Vydence, te ofrecemos soluciones personalizadas para
              que luzcas una piel radiante y saludable.
            </Typography>

            <div className="mt-10">
              <h6 className="font-bold text-lg mb-5">Ayuda a:</h6>
              <ul className="list-disc list-inside">
                {stats.map((props, key) => (
                  <StatsCard key={key} {...props} />
                ))}
              </ul>
            </div>
          </div>

          {/* Video animado */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="rounded-3xl hidden md:flex mx-auto max-w-[25rem] object-cover"
            data-aos="fade-left"
            style={{
              boxShadow: "0 4px 12px -2px rgba(248, 187, 217, 0.5)",
            }}
          >
            <source src={videoLaser} type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default CodePresentation;
