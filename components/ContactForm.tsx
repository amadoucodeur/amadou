import Link from "next/link";
import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiGithubLogoFill } from "react-icons/pi";

const ContactForm: React.FC = () => {
  return (
    <div className="flex flex-row gap-4 items-end">
      <div className="form-container">
        <form className="form">
          <div className="form-group">
            <label htmlFor="email">Votre e-mail</label>
            <input required name="email" id="email" type="email" />
          </div>
          <div className="form-group">
            <label htmlFor="textarea">Comment puis-je vous aider?</label>
            <textarea
              required
              cols={50}
              rows={10}
              id="textarea"
              name="textarea"
            ></textarea>
          </div>
          <button type="submit" className="form-submit-btn">
            Envoyer
          </button>
        </form>
      </div>
      <div className="flex gap-4 flex-col">
        <div className="flex gap-2">
          <Link
            href={"#"}
            className="p-4 rounded-full bg-[#06152c] text-white hover:bg-white hover:text-black  transition-colors ease-in-out duration-300"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            href={"#"}
            className="p-4 rounded-full bg-[#06152c] text-white hover:bg-white hover:text-black  transition-colors ease-in-out duration-300"
          >
            <FaFacebookF />
          </Link>

          <Link
            href={"#"}
            className="p-4 rounded-full bg-[#06152c] text-white hover:bg-white hover:text-black  transition-colors ease-in-out duration-300"
          >
            <PiGithubLogoFill />
          </Link>
        </div>

        <div className="flex flex-col gap-4 ">
          <p className="flex items-center gap-2 pr-4 rounded-full border border-solid border-white h-10">
            <BsTelephoneFill
              size={50}
              className="p-4 rounded-full bg-white text-black hover:bg-[#06152c] hover:text-white  transition-colors ease-in-out duration-300"
            />
            (+225) 0500026690
          </p>
          <p className="flex items-center gap-2 pr-4 rounded-full border border-solid border-white h-10">
            <MdEmail
              size={50}
              className="p-4 rounded-full bg-white text-black hover:bg-[#06152c] hover:text-white  transition-colors ease-in-out duration-300"
            />
            amadoucodeur@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
