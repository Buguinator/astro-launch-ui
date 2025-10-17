import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import img1 from "../../assets/aliance/1.png";
import img2 from "../../assets/aliance/2.webp";
import img3 from "../../assets/aliance/3.png";
import img4 from "../../assets/aliance/4.webp";
import img5 from "../../assets/aliance/5.webp";
import img6 from "../../assets/aliance/6.png";
import img7 from "../../assets/aliance/7.jpg";
import img8 from "../../assets/aliance/8.webp";
import img9 from "../../assets/aliance/9.webp";
import img10 from "../../assets/aliance/10.png";
import img11 from "../../assets/aliance/11.webp";
import img12 from "../../assets/aliance/12.png";
import img13 from "../../assets/aliance/13.webp";
import img14 from "../../assets/aliance/14.png";
import img15 from "../../assets/aliance/15.png";

const logos = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15
];

export function LogoSectionOne() {
  // Duplica los logos para crear un efecto de loop infinito
  const duplicatedLogos = [...logos, ...logos];
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Con la confianza de los mejores
        </Typography>
        
        {/* Contenedor del carrousel */}
        <div className="relative w-full overflow-hidden pt-10">
          {/* Carrousel con animación */}
          <motion.div
            className="flex gap-10"
            animate={{
              x: ["0%", "-50%"], // Mueve de derecha a izquierda (solo la mitad porque duplicamos los logos)
              transition: {
                ease: "linear",
                duration: 20, // 20 segundos para completar el recorrido
                repeat: Infinity, // Loop infinito
              },
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-40 h-20 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={logo.src}
                  alt={`Logo ${index + 1}`}
                  className="max-w-[120px] auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  draggable={false}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default LogoSectionOne;
