"use client";

import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import "./style.css";

const Page = () => {
  return (
    <Footer
      container
      className="flex justify-around w-full bg-gray-700 mt-10 text-white dark:text-dark"
    >
      <Footer.Copyright by="Petro Lesapiti" href="#" year={2023} />
      <Footer.LinkGroup>
        <Footer.Icon
          className="mt-10 mb-10 ml-10 mr-10"
          href="#"
          icon={BsFacebook}
        />
        <Footer.Icon
          className="mt-10 mb-10 ml-10 mr-10"
          href="#"
          icon={BsInstagram}
        />
        <Footer.Icon
          className="mt-10 mb-10 ml-10 mr-10"
          href="#"
          icon={BsTwitter}
        />
        <Footer.Icon
          className="mt-10 mb-10 ml-10 mr-10"
          href="#"
          icon={BsGithub}
        />
      </Footer.LinkGroup>
    </Footer>
  );
};
export default Page;
