import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { Skull, Tent, House, UserRound } from "lucide-react";
import PageWrapper from "../components/pageWrapper";
import initializeAOS from "../utils/aos-init";
import { Typewriter } from "react-simple-typewriter";

interface Metric {
  label: string;
  value: number;
  suffix?: string;
  icon: React.ReactNode;
}

const metrics: Metric[] = [
  {
    label: "Successful Events",
    value: 215,
    suffix: "+",
    icon: (
      <Tent className="w-12 h-12 text-white bg-[#f69223] p-3 rounded-full mb-3" />
    ),
  },
  {
    label: "Burials Planned",
    value: 75,
    suffix: "+",
    icon: (
      <Skull className="w-12 h-12 text-white bg-[#02a69d] p-3 rounded-full mb-3" />
    ),
  },
  {
    label: "Corporate Events",
    value: 120,
    suffix: "+",
    icon: (
      <House className="w-12 h-12 text-white bg-[#be202f] p-3 rounded-full mb-3" />
    ),
  },
  {
    label: "Satisfied Clients",
    value: 500,
    suffix: "+",
    icon: (
      <UserRound className="w-12 h-12 text-white bg-[#a6cc39] p-3 rounded-full mb-3" />
    ),
  },
];

const Home = () => {
  useEffect(() => {
    initializeAOS();
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <PageWrapper>
      <div className="relative sm:h-[80vh] w-full font-Montserrat">
        <div className="absolute inset-0 bg-[#00000086] bg-opacity-60 z-0" />

        <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center h-full px-6 sm:px-10 pt-12 sm:pt-10 pb-10 text-white w-full mx-auto">
          <div className="text-center sm:text-left">
            <span
              className="text-[#f69223] uppercase tracking-widest text-xs md:text-sm mb-2 block"
              data-aos="fade-down"
            >
              Akpoazaa Event Planners
            </span>
            <h1
              className="text-xl sm:text-4xl md:text-5xl font-bold leading-snug md:leading-tight"
              data-aos="fade-down"
            >
              Providing Top-notch <br /> Event Planning and <br /> Management
              Services
            </h1>

            <p className="my-5 sm:text-base max-w-xl mx-auto sm:mx-0">
              <Typewriter
                words={[
                  "What sets us apart is our commitment to quality delivery and client satisfaction. Your vision is our priority. Let's create some extraordinary memories together.",
                ]}
                loop={1}
                typeSpeed={50}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>

            <div
              className="mt-6 flex flex-col sm:flex-row justify-center sm:justify-start gap-4"
              data-aos="fade-up"
            >
              <button className="bg-[#f69223] text-white px-20 py-3 rounded font-medium hover:bg-[#a6cc39] transition transform hover:-translate-y-1 cursor-pointer">
                Book Us
              </button>
              <a href="/services">
                <button className="bg-[#02a69d] px-20 py-3 rounded font-medium hover:bg-[#be202f] text-white transition transform hover:-translate-y-1 cursor-pointer">
                  Our Services
                </button>
              </a>
            </div>
          </div>

          <div
            ref={ref}
            className="grid grid-cols-2 grid-rows-2 mt-10 sm:mt-0 w-full max-w-md text-center"
          >
            {metrics.map((metric, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center text-white p-10 border-gray-400
                  ${index === 0 && "border-r border-b"}
                  ${index === 1 && "border-l border-b"}
                  ${index === 2 && "border-r border-t"}
                  ${index === 3 && "border-l border-t"}
                `}
              >
                {metric.icon}
                {inView && (
                  <CountUp
                    start={0}
                    end={metric.value}
                    duration={2.5}
                    separator=","
                    suffix={metric.suffix}
                    className="text-3xl sm:text-4xl font-bold text-[#f69223]"
                  />
                )}
                <p className="mt-1 text-xs sm:text-sm">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Home;
