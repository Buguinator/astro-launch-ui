import AOS from "aos";
import { useEffect } from "react";

import { Card, CardBody, Typography } from "@material-tailwind/react";
import logoDra from "../../assets/loDra.svg";
import imgPerfil from "../../assets/dra-perfil.png";


export function TestimonialSectionTwo() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'linear',
      delay: 100,
    });
  }, []);
  
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <Card
          shadow={false}
          className="overflow-hidden rounded-3xl !bg-[#d7a49a]"
        >
          <CardBody className="flex flex-col-reverse gap-16 py-16 md:py-20 px-8 md:px-14 lg:flex-row">
            <div>
              <img src={logoDra.src} alt="spotify" className="mb-8 w-36 mx-auto md:mx-0" data-aos="fade-up" />
              <Typography
                variant="lead"
                color="white"
                className="mb-5 font-medium md:font-semibold leading-normal text-lg md:text-base"
                data-aos="fade-up"
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
                className="my-5 font-medium md:font-semibold leading-normal text-lg md:text-base"
                data-aos="fade-up"
              >
                Dipolmado en tricología por el CILAD
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-5 font-medium md:font-semibold leading-normal text-lg md:text-base"
                data-aos="fade-up"
              >
                Rotaciones
              </Typography>
              <ol className="list-disc list-inside text-white font-light pt-5 text-base md:text-sm">
                <li data-aos="fade-up">
                  Hospital Universitario Ramón y Cajal de Madrid 
                </li>
              </ol>
            </div>
            <div className="relative mx-auto grid shrink-0 place-items-center lg:ml-auto">
              <img
                src={imgPerfil.src}
                alt="testimonial image"
                className="md:h-96 md:w-96 h-72 w-72 rounded-full object-cover"
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
