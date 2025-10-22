import { Card, CardBody, Typography } from "@material-tailwind/react";
import logoDr from "../../assets/logoDrJP.webp";
import imgPerfil from "../../assets/dr-perfil.jpeg";


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
                Graduado con honores de la Universidad Autónoma de Guadalajara,
                realizó su entrenamiento en Cirugía General en el Centro Médico
                Siglo XXI (CDMX) y posteriormente la subespecialidad en Cirugía
                Plástica, Estética y Reconstructiva en el Hospital Civil de
                Guadalajara, uno de los más prestigiosos del país.
              </Typography>
              <Typography variant="lead" color="white" className="font-semibold leading-normal text-base">
                Su formación internacional incluye rotaciones en cirugía de
                contorno corporal,<br/> mamaria y facial en:
              </Typography>
              <ol className="list-disc list-inside text-white font-light pt-5 text-sm">
                <li>
                  Clínica Dhara, Bogotá (Dr. Alfredo Hoyos – creador de Total
                  Definer®).
                </li>
                <li>
                  Clínica Sensabell, Valencia, España (Dr. Jesús Centeno).
                </li>
                <li>
                  Beverly Hills Center for Plastic & Laser Surgery, California,
                  USA (Dr. Ben Talei).
                </li>
              </ol>
              <Typography variant="lead" color="white" className="font-semibold leading-normal text-base pt-5">
                Actualmente es miembro de:
              </Typography>
              <ol className="list-disc list-inside text-white font-light pt-5 text-sm">
                <li>
                  Asociación Mexicana de Cirugía Plástica, Estética y
                  Reconstructiva (AMCPER).
                </li>
                <li>
                  The International Society of Aesthetic Plastic Surgery
                  (ISAPS).
                </li>
                <li>TOTAL DEFINER® by Dr. Alfredo Hoyos.</li>
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
