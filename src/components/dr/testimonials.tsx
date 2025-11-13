import AOS from "aos";
import { useEffect } from "react";

import { Card, CardBody, Typography } from "@material-tailwind/react";

import logoDr from "../../assets/logoDrJP.webp";
import imgPerfil from "../../assets/dr-perfil.jpeg";


export function TestimonialSectionTwo() {


  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'linear',
    });
  }, []);

  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <Card
          shadow={false}
          className="overflow-hidden rounded-3xl !bg-blue-gray-900"
        >
          <CardBody className="flex flex-col-reverse gap-16 py-16 md:py-20 px-8 md:px-14 lg:flex-row">
            <div>
              <img src={logoDr.src} alt="logo dr. javier parada" className="mb-8 w-36 mx-auto md:mx-0" data-aos="fade-up" />
              <Typography
                variant="lead"
                color="white"
                className="mb-5 font-medium md:font-semibold leading-normal text-lg md:text-base"
                data-aos="fade-up"
              >
                Graduado con honores de la Universidad Autónoma de Guadalajara,
                realizó su entrenamiento en Cirugía General en el Centro Médico
                Siglo XXI (CDMX) y posteriormente la subespecialidad en Cirugía
                Plástica, Estética y Reconstructiva en el Hospital Civil de
                Guadalajara, uno de los más prestigiosos del país.
              </Typography>
              <Typography variant="lead" color="white" className="font-medium md:font-semibold leading-normal text-lg md:text-base" data-aos="fade-up">
                Su formación internacional incluye rotaciones en cirugía de
                contorno corporal,<br/> mamaria y facial en:
              </Typography>
              <ol className="list-disc list-inside text-white font-light pt-5 text-base md:text-sm">
                <li data-aos="fade-up">
                  Clínica Dhara, Bogotá (Dr. Alfredo Hoyos – creador de Total
                  Definer®).
                </li>
                <li data-aos="fade-up">
                  Clínica Sensabell, Valencia, España (Dr. Jesús Centeno).
                </li>
                <li data-aos="fade-up">
                  Beverly Hills Center for Plastic & Laser Surgery, California,
                  USA (Dr. Ben Talei).
                </li>
              </ol>
              <Typography variant="lead" color="white" className="font-medium md:font-semibold leading-normal text-lg md:text-base pt-5" data-aos="fade-up">
                Actualmente es miembro de:
              </Typography>
              <ol className="list-disc list-inside text-white font-light pt-5 text-base md:text-sm">
                <li data-aos="fade-up">
                  Asociación Mexicana de Cirugía Plástica, Estética y
                  Reconstructiva (AMCPER).
                </li>
                <li data-aos="fade-up">
                  The International Society of Aesthetic Plastic Surgery
                  (ISAPS).
                </li>
                <li data-aos="fade-up">TOTAL DEFINER® by Dr. Alfredo Hoyos.</li>
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
