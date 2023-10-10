"use client";

import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import "./style.css";

const FooterComponent = () => {
  return (
    <Footer container className="flex justify-around bg-slate-200">
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
export default FooterComponent;
