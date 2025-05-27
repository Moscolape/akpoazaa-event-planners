import {
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { useEffect } from "react";
import initializeAOS from "../utils/aos-init";

const socialMediaLinks = [
  {
    icon: <FaFacebook />,
    href: "https://www.facebook.com/share/18xgihsu5Q/",
  },
  {
    icon: <FaInstagram />,
    href: "https://www.instagram.com/akpoazaaeventplanners?igsh=MXR6MDRhNzR2c3dyeg==",
  },
];

const quickLinks = [
  {
    text: "About Us",
    href: "/about-us",
  },
  {
    text: "Services",
    href: "/services",
  },
  {
    text: "Portfolio",
    href: "/portfolio",
  },
  {
    text: "Testimonials",
    href: "/testimonials",
  },
  {
    text: "Blog",
    href: "/blog",
  },
];

export default function Footer() {
  useEffect(() => {
    initializeAOS();
  }, []);

  return (
    <div
      className={`w-full bg-[#be202f] text-white text-body1 font-Montserrat`}
    >
      <div className="flex sm:flex-row flex-col justify-between items-start sm:p-10 p-3">
        <div className="sm:w-1/3" data-aos="fade-up">
          <h1 className="text-lg font-bold font-Prism">
            AKPOAZAA EVENT PLANNERS
          </h1>
          <br />
          <div className="flex items-center">
            <p>
              At Akpoazaa Event Planners, we specialize in bringing visions to
              life through exceptional event planning and management services.
            </p>
          </div>
          <div className="text-h6 flex mt-5">
            {socialMediaLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 text-2xl"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="sm:w-1/3 sm:mt-0 mt-10" data-aos="fade-up">
          <div className="mx-auto sm:w-1/3">
            <h1 className="text-lg font-bold">QUICK LINKS</h1>
            <br />
            <div className="flex flex-col">
              {quickLinks.map((link, index) => (
                <a
                  href={link.href}
                  key={index}
                  className="mb-2 text-[1rem] hover:scale-105"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="sm:w-1/3 sm:mt-0 mt-10" data-aos="fade-up">
          <h1 className="text-lg font-bold">CONTACT INFO</h1>
          <br />
          <div className="flex items-start">
            <FaMapMarkerAlt className="text-white text-xl mr-2" />
            <p>
              Suite B6 Millennium Plaza by Total Filling Station, Aroma
              Junction, Awka, Anambra State.
            </p>
          </div>
          <div className="flex items-start mt-3">
            <FaPhoneAlt className="text-white text-xl mr-2" />
            <p>0703 055 5581, 0707 714 5544</p>
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-between items-start sm:p-10 p-3 mt-10 sm:mt-0">
        {/* Footer Text */}
        <div className="">
          <p className="sm:px-0 mo:px-7 sm:text-body2 mo:text-sub">
            &copy; 2025 Akpoazaa Event Planners. All rights reserved.
          </p>
        </div>
        <div className="">
          <p className="mt-3 sm:mt-0">
            Developed by{" "}
            <b>
              <a
                href="https://chukwunenye-moses-portfolio.vercel.app/portfolio"
                target="_blank"
              >
                Chukwunenye Moses
              </a>
            </b>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
