import PageWrapper from "../components/pageWrapper";
import { useEffect, useState } from "react";
import initializeAOS from "../utils/aos-init";

const Services = () => {
  useEffect(() => {
    initializeAOS();
  }, []);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <PageWrapper>
      <main className="relative w-full sm:h-[80vh] h-[30vh]">
        <div className="absolute inset-0 bg-[#00000086] flex items-center justify-center p-4 font-Montserrat">
          <div className="bg-white p-10 rounded-lg mx-auto mt-35 sm:w-1/2 pb-30 hidden sm:block" data-aos="fade-up">
            <h1 className="font-Montserrat text-center text-xl sm:text-5xl font-bold text-[#be202f]">
              Our Services
            </h1>
            <br />
            <p className="text-gray-500">
              At Akpoazaa Event Planners, we specialize in bringing visions to
              life through exceptional event planning and management services.
              We create unforgettable experiences tailored to our clients'
              unique needs, whether it's a corporate gathering, wedding,
              conference, birthday, or social celebration.
            </p>
          </div>
        </div>
      </main>
      <section
        className="sm:pt-60 pt-5 bg-white sm:h-200 sm:-mt-80 relative z-0"
        style={{
          clipPath: isMobile
            ? ""
            : "polygon(50% 30%, 100% 5%, 100% 100%, 0 100%, 0 5%)",
        }}
      ></section>
    </PageWrapper>
  );
};

export default Services;
