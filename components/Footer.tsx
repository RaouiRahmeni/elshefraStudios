import React from "react";
import MagicBtn from "./ui/MagicBtn";
import { FaLocationArrow } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full pt-20 mb-[100px] md:mb-5" id="contact">
      <div className="flex flex-col items-center ">
        <h1 className="heading lg:max-w-[45vw] ">
          Do you want to launch your
          <span className="text-purple"> business </span> online today ?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center ">
          Reach out to us, we can make it happen.
        </p>
        <a href="mailto:rahmeniraoui@gmail.com">
          {" "}
          <MagicBtn
            title="send us an email"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-center items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Rawi.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
