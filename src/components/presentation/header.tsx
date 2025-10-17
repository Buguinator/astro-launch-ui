import {
  Button,
  Typography,
} from "@material-tailwind/react";
import Navbar from "../navbar";

export function HeroPresentation() {

  return (
    <>
      <Navbar />
      <header className="h-full w-screen place-items-center relative px-8 pt-8 py-12 lg:mb-36 overflow-hidden">
        {/* Video de fondo */}
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/instalaciones.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>

        {/* Overlay para mejorar la legibilidad del texto */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
        
        <div className="container mx-auto grid items-center lg:grid-cols-2 relative z-20">
          <div className="text-center lg:text-left pt-32">
            <div className="mb-8 inline-flex items-center">
              <Typography
                color="white"
                variant="small"
                className="flex items-center font-bold uppercase"
              >
                Tu piel y tu forma, en manos de profesionales.
              </Typography>
            </div>
            <Typography
              variant="h1"
              color="white"
              className="mb-8 lg:mr-32 leading-tight font-black"
            >
              <span className="italic">Skin & Shape </span><span className="font-thin">|</span> Clínica Dermatológica y Cirugía Plástica
            </Typography>
            <Typography variant="lead" color="white" className="lg:pr-32">
              Clínica médica especializada en el cuidado de la piel, así como en procedimientos
              quirúrgicos estéticos y reconstructivos.
            </Typography>
            <div className="mt-12 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a href="/contact">
                <Button className="flex items-center  bg-rose text-white">
                  Contacto
                </Button>
              </a>
            </div>
          </div>
        </div>
        {/* <div className="hidden lg:flex">
          <img src="header.png" alt="components" className="absolute -top-10 right-0 w-1/2" />
        </div> */}
      </header>
    </>
  );
}

export default HeroPresentation;
