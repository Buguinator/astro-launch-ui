import { Button, Card, CardBody, Typography } from "@material-tailwind/react";

export function AstroSection() {
  return (
    <section className="py-8 px-8 lg:py-20 bg-rosita">
      <div className="container mx-auto">
        <Card
          shadow={false}
          className="flex-col-reverse overflow-hidden rounded-3xl md:flex-row md:gap-8 bg-rose"
        >
          <CardBody className="md:py-20 md:px-14 md:w-7/12">
            <Typography color="white" className="font-bold">
              Depilación Láser Diodo
            </Typography>
            <Typography variant="h2" color="white" className="mb-5 font-normal">
              ¿En que consiste?
            </Typography>
            <Typography color="white">
              La depilación láser diodo es un tratamiento seguro y eficaz para
              la eliminación permanente del vello no deseado. Utilizando
              tecnología de luz laser de diodo, se dirige selectivamente a la
              melanina del folículo piloso, destruyéndolo y previniendo el
              crecimiento futuro del vello. Este procedimiento es adecuado para
              una amplia gama de tipo de piel y vello, y ofrece resultados
              duraderos con mínimas molestias y tiempo de inactividad.
            </Typography>
            <a href="/contacto">
              <Button
                color="white"
                size="sm"
                variant="outlined"
                className="flex items-center mt-12"
              >
                Contacto
              </Button>
            </a>
          </CardBody>
          <div className="relative grid h-96 place-items-center md:h-auto md:w-5/12">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover md:absolute"
          >
            <source
              src="/videos/diodo.mp4"
              type="video/mp4"
            />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
        </Card>
      </div>
    </section>
  );
}

export default AstroSection;
