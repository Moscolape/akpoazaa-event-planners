import PageWrapper from "../components/pageWrapper";
import { useEffect, useState } from "react";
import initializeAOS from "../utils/aos-init";
import { SubmitHandler, useForm } from "react-hook-form";
import { Locate, Mail, MapPin, PhoneCall } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import axios from "axios";
import SuccessModal from "../components/successmodal";
import { logo } from "../constants/assets";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  useEffect(() => {
    initializeAOS();
  }, []);

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

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post<{ message: string }>(
        "https://akpoazaa-event-backend.onrender.com/api/v1/contact",
        data
      );

      if (response.status === 200) {
        reset();
        setShowModal(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageWrapper>
      <main className="relative w-full h-[50vh]">
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#00000086] flex items-center justify-center text-center p-4 font-Montserrat">
          <div className="text-white space-y-4 max-w-3xl">
            <h1
              className="text-2xl sm:text-5xl font-bold"
              data-aos="fade-right"
            >
              Contact Us
            </h1>
          </div>
        </div>
      </main>
      <section className="sm:pt-10 pt-5 bg-white">
        <div className="sm:w-4/5 mx-auto font-Montserrat sm:flex mt-5">
          <div className="sm:w-1/2 px-3 sm:px-0 relative" data-aos="fade-up">
            <h1 className="text-2xl font-Prism text-[#f69223] font-semibold text-center sm:text-left">
              Get In Touch
            </h1>
            <h2 className="text-xl sm:text-3xl my-5 font-semibold text-center sm:text-left">
              Have an enquiry or feedback?
            </h2>
            <p className="text-sm text-gray-500">
              If you have any concerns to share or enquiries to make, send us a
              message and we'd get back to you before 24hrs.
            </p>
            <img
              src={logo}
              alt="watermark"
              className="absolute -top-15 sm:top-[40%] sm:right-[40%] right-20 w-60 opacity-5 pointer-events-none z-30"
            />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 mt-5 sm:mt-0 sm:ml-10 bg-white sm:rounded-lg sm:shadow sm:p-5 p-3 sm:w-1/2"
            data-aos="fade-up"
          >
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="Your Name"
              className="w-full p-2 border rounded placeholder:text-gray-400"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}

            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Your Email"
              className="w-full p-2 border rounded placeholder:text-gray-400"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}

            <textarea
              {...register("message", { required: "Message is required" })}
              placeholder="Your Message"
              className="w-full p-2 border rounded resize-none placeholder:text-gray-400"
              rows={8}
            />
            {errors.message && (
              <p className="text-red-500">{errors.message.message}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#f69223] text-white hover:bg-[#b37127] flex items-center justify-center p-2 gap-2 rounded cursor-pointer text-bounce disabled:opacity-30 disabled:cursor-not-allowed"
            >
              {isSubmitting && (
                <svg
                  className="animate-spin h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
              )}
              {isSubmitting ? "Sending..." : "Send"}{" "}
            </button>
          </form>
          {showModal && (
            <SuccessModal text="You have sent us a message! We'll get back to you ASAP!!" />
          )}
        </div>
        <div className="flex sm:flex-row-reverse flex-col mt-14 sm:px-0">
          <div
            className="sm:w-1/2 h-[300px] sm:h-auto"
            data-aos="zoom-in"
            data-aos-delay={300}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2712314922596!2d7.075312974750628!3d6.227926893760229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1043828948fc4ed5%3A0xb36cf597b082136a!2sTotal%20Filling%20Station!5e0!3m2!1sen!2sng!4v1747497285354!5m2!1sen!2sng"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="p-3 sm:p-10 backdrop sm:w-1/2 font-Montserrat">
            <div data-aos="flip-down" className="my-10 sm:my-0">
              <h1 className="text-2xl font-Prism text-[#f69223] font-semibold flex items-center">
                <Locate className="w-6 h-6 text-[#f69223] mr-2" /> Location
              </h1>
              <h2 className="text-xl sm:text-3xl my-5 font-semibold">
                We're here to help
              </h2>
              <p className="text-sm text-gray-500">
                If there is any event you have coming up, we've got you. Kindly
                reach out to us, let's get the rugs rolling!
              </p>
              <br />
              <p className="flex items-center">
                <MapPin className="w-6 h-6 text-[#f69223]" />
                <span className="text-sm inline-block ml-3">
                  Suite B6 Millennium Plaza <br />
                  By Total Filling Station, Aroma Junction, <br /> Awka, Anambra
                  State.
                </span>
              </p>
              <br />
              <p className="flex items-center">
                <Mail className="w-6 h-6 text-[#f69223]" />
                <span className="text-sm inline-block ml-3">
                  akpoazaaeventplanners@gmail.com
                </span>
              </p>
              <br />
              <p className="flex items-center">
                <PhoneCall className="w-6 h-6 text-[#f69223]" />
                <span className="text-sm inline-block ml-3">
                  +234 703 055 5581
                </span>
              </p>
              <br />
              <h2 className="text-xl sm:text-3xl sm:my-5 font-semibold">
                Follow our social media platforms
              </h2>
              <div className="text-h6 flex mt-5">
                {socialMediaLinks.map((link, index) => (
                  <a
                    href={link.href}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-4 text-2xl text-[#f69223]"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Contact;
