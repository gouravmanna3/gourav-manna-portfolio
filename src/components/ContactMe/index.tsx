import { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "../../utils/const";

const ContactMe = () => {
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentForm = form.current;
    if (currentForm == null) return;

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, currentForm, {
        publicKey: PUBLIC_KEY,
      });
      toast.success("🦄 Message Sent!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } catch (error) {
      console.log("Failed to send message", (error as Error).message);
      toast.error("🦄 Failed to send message!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
    form.current?.reset();
  };

  return (
    <div className="p-6 md:p-10 bg-fixed font-notoSerif">
      <h1 className="text-3xl md:text-5xl font-bold font-notoSerif tracking-wider text-center">
        Get in touch
      </h1>
      <section className="flex flex-col md:flex-row gap-24 mt-10 px-24">
        <div className="basis-2/5">
          <div className="text-2xl font-bold  mb-6">Let's Work Together</div>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="flex flex-col gap-4 mt-6">
            <div className="flex items-center gap-2">
              {" "}
              <MdEmail />
              <div>gouravmanna3@gmail.com</div>
            </div>
            <div className="flex items-center gap-2">
              {" "}
              <IoCall />
              <div>+1 720-813-3358</div>
            </div>
            <div className="flex items-center gap-2">
              <FaLocationDot /> <div>Colorado, United States</div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900 basis-3/5">
          <div className="py-8 lg:py-4 px-4 mx-auto max-w-screen-md">
            <form ref={form} onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="from_email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#3D9970] sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default ContactMe;
