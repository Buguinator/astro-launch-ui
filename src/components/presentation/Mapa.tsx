import { useTranslation } from "react-i18next";

import { Button, Card, CardBody, Typography } from "@material-tailwind/react";

export function Mapa() {
  const { t } = useTranslation();
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <Card
          shadow={false}
          className="flex-col-reverse overflow-hidden rounded-3xl md:flex-row md:gap-8 bg-rose"
        >
          <CardBody className="py-10 md:py-20 px-12 md:px-14 md:w-7/12">
            <Typography color="white" className="font-normal opacity-70 text-lg md:text-xl">
              {t("home.schedules.subtitle")}
            </Typography>
            <Typography
              variant="h2"
              color="white"
              className="mb-5 font-normal"
            >
              {t("home.schedules.title")}
            </Typography>
            <Typography variant="lead" color="white" className="text-lg md:text-xl">
              {t("home.schedules.hours")}
            </Typography>
            <span className="text-white pt-5 block text-lg md:text-base font-light w-[100%] md:w-[75%]">
              {t("home.schedules.location")}
            </span>
            <a href="/contacto">
              <Button color="white" size="sm" variant="outlined" className="flex items-center mt-5">
                {t("home.schedules.button")}
              </Button>
            </a>
          </CardBody>
          <div className="relative grid h-96 place-items-center md:h-auto md:w-8/12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d933.133610422223!2d-103.38975603043535!3d20.68851139880483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428afb3ce89d1cb%3A0x1ef21acd6feb95dd!2sHospital%20San%20Javier%20Torre%20M%C3%A9dica!5e0!3m2!1ses-419!2smx!4v1760676235795!5m2!1ses-419!2smx" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-full"></iframe>
          </div>
        </Card>
      </div>
    </section>
  );
}

export default Mapa;
