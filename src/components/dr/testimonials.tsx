import { useTranslation } from "react-i18next";

import AOS from "aos";
import { useEffect } from "react";

import { Card, CardBody, Typography } from "@material-tailwind/react";

import logoDr from "../../assets/logoDrJP.webp";
import imgPerfil from "../../assets/dr-perfil.jpeg";


export function TestimonialSectionTwo() {
  const { t } = useTranslation();

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
                {t("dr.about.description")}
              </Typography>
              <Typography variant="lead" color="white" className="font-medium md:font-semibold leading-normal text-lg md:text-base" data-aos="fade-up">
                {t("dr.about.fTitle")}
              </Typography>
              <ol className="list-disc list-inside text-white font-light pt-5 text-base md:text-sm">
                <li data-aos="fade-up">
                  {t("dr.about.fList.1")}
                </li>
                <li data-aos="fade-up">
                  {t("dr.about.fList.2")}
                </li>
                <li data-aos="fade-up">
                  {t("dr.about.fList.3")}
                </li>
              </ol>
              <Typography variant="lead" color="white" className="font-medium md:font-semibold leading-normal text-lg md:text-base pt-5" data-aos="fade-up">
                {t("dr.about.mTitle")}
              </Typography>
              <ol className="list-disc list-inside text-white font-light pt-5 text-base md:text-sm">
                <li data-aos="fade-up">
                  {t("dr.about.mList.1")}
                </li>
                <li data-aos="fade-up">
                  {t("dr.about.mList.2")}
                </li>
                <li data-aos="fade-up">{t("dr.about.mList.3")}</li>
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
