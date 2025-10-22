import { Card, CardBody, Typography } from "@material-tailwind/react";
import logoDr from "../../assets/logoDrJP.webp";
import imgPerfil from "../../assets/dra-perfil.png";


export function TestimonialSectionTwo() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <Card
          shadow={false}
          className="overflow-hidden rounded-3xl !bg-blue-gray-900"
        >
          <CardBody className="flex flex-col-reverse gap-16 py-20 px-14 lg:flex-row">
            <div>
              <img src={logoDr.src} alt="spotify" className="mb-8 w-36" />
              <Typography
                variant="lead"
                color="white"
                className="mb-5 font-semibold leading-normal text-base"
              >
                Médico Cirujano Tecnologico de Monterrey campus Guadalajara 
                <br/>1 año de Medicina interna en el Hospital San Javier 
                <br/>3 años de Dermatología en Instituto Dermatologíco de Jalisco “Dr. José
                Barba Rubio” 
                <br/>1 año de Dermatología Estética - Grupo Pedro Jaén
                por la Universidad de Madrid en colaboración con la Universidad
                de Alcalá
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="my-5 font-semibold leading-normal text-base"
              >
                Dipolmado en tricología por el CILAD
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-5 font-semibold leading-normal text-base"
              >
                Rotaciones
              </Typography>
              <ol className="list-disc list-inside text-white font-light pt-5 text-sm">
                <li>
                  Hospital Universitario Ramón y Cajal de Madrid 
                </li>
              </ol>
            </div>
            <div className="relative mx-auto grid shrink-0 place-items-center lg:ml-auto">
              <img
                src={imgPerfil.src}
                alt="testimonial image"
                className="h-96 w-96 rounded-full object-cover"
                draggable="false"
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default TestimonialSectionTwo;
