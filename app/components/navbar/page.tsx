"use client";

import { Button, Navbar } from "flowbite-react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const Page = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="max-w-2xl mb-6 font-bold lg:mb-8 md:text-lg lg:text-xl dark:text-white">
          Pure
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button className="toggle" onClick={handleThemeSwitch}>
          {theme === "dark" ? (
            <FontAwesomeIcon icon={faSun} className="mr-2" />
          ) : (
            <FontAwesomeIcon icon={faMoon} className="mr-2" />
          )}
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          className="max-w-2xl mb-6 font-bold text-gray-700 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
          active
          href="/"
        >
          <p>Home</p>
        </Navbar.Link>
        <Navbar.Link
          className="max-w-2xl mb-6 font-bold text-gray-700 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
          href="./services"
        >
          Services
        </Navbar.Link>
        <Navbar.Link
          className="max-w-2xl mb-6 font-bold text-gray-700 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
          href="#"
        >
          My Experience
        </Navbar.Link>
        <Navbar.Link
          className="max-w-2xl mb-6 font-bold text-gray-700 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
          href="#"
        >
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Page;
