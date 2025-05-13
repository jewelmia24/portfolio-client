/* eslint-disable react/no-unescaped-entities */
import {  Mail, PhoneCall } from "lucide-react";
import ContactForm from "./ContactForm";
import { FaFacebook, FaGithub, FaLinkedin, FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div id="Contact">
      <div className="text-center">
        <h2 className=" text-2xl md:text-3xl xl:text-4xl font-semibold mb-12 lg:mb-16 drop-shadow-sm">
          Contact
        </h2>
      </div>
      <div className="flex flex-col md:flex-row gap-10 lg:gap-0 items-center text-center md:text-left">
        <div className="flex-1/2 flex justify-center items-center ">
          <div className="space-y-10">
            <p className="text-sm md:text-base lg:text-lg max-w-[900px]">
              Let's connect! Whether you have a question, a project in mind, or
              just want to chat, I’m here to help. Fill out the form, and I'll
              get back to you as soon as I can!
            </p>
            <div className="space-y-1">
              <p className="flex items-center justify-center md:justify-start gap-2 text-sm md:text-base lg:text-lg">
                <span>
                  <Mail size={16} />
                </span>
                jewelmiyacst@gmail.com
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2 text-sm md:text-base lg:text-lg">
                <span>
                  <FaLocationDot size={16} />
                </span>
                Gaibandha,Bangladesh
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2 text-sm md:text-base lg:text-lg">
                <span>
                  <PhoneCall size={16} />
                </span>
                +8801308172724
              </p>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-8">
              <a href="https://www.facebook.com/jewelmiycst/" target="-blank"><FaFacebook /> </a>
              <a href="https://www.linkedin.com/in/jewelmiya-cst/" target="-blank"><FaLinkedin/> </a>
              <a href="https://github.com/jewelmia24" target="-blank"><FaGithub/> </a>
            </div>
          </div>
        </div>
        <div className="flex-1/10 flexjustify-center">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
