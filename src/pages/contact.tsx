import PageWrapper from "../components/pageWrapper";
import { useEffect } from "react";
import initializeAOS from "../utils/aos-init";
import { useForm } from "react-hook-form";

// Define Form Data Type
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  useEffect(() => {
    initializeAOS();
  }, []);

  const {
    register,
    formState: { errors },
  } = useForm<ContactFormData>();

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
      <section className="sm:py-10 py-5 bg-white">
        <div className="sm:w-4/5 mx-auto font-Montserrat sm:flex mt-5">
          <div className="sm:w-1/2 px-3 sm:px-0">
            <h1 className="text-2xl font-Prism text-[#be202f] font-semibold text-center sm:text-left">
              Get In Touch
            </h1>
            <h2 className="text-3xl my-5 font-semibold">
              Have an enquiry or feedback?
            </h2>
            <p className="text-sm text-gray-500">
              If there is any event you have coming up, we've got you. Kindly
              reach out to us, let's get the rugs rolling!
            </p><br />
            <p className="text-sm text-gray-500">
              If you have any concerns, to share or enquiries to make, also
              send us a message and we'd get back to you before 24hrs.
            </p>
          </div>
          <form className="space-y-4 mt-5 sm:mt-0 sm:ml-10 bg-white sm:rounded-lg sm:shadow sm:p-5 p-3" data-aos="fade-up">
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
              className="w-full bg-[#be202f] text-white hover:text-[#f69223] p-2 rounded cursor-pointer animate-hop"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Contact;
