"use client";
import React from "react";
const Page = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7 ">
          <h1 className="page-title max-w-2xl mb-4 text-4xl font-bold text-#002d5b tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Hello, Welcome to my Space
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            iure amet sed ullam aspernatur, Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Accusamus iure amet sed ullam
            aspernatur,
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Hire Me
          </a>
        </div>
        <div className="lg:mt-0 lg:col-span-5 lg:flex ">
          <img
            src="pure1.png"
            alt="Pure"
            className="lg:w-full lg:h-full lg:mt-0 sm:w-full sm:h-auto sm:mt-1rem"
          />
        </div>
      </div>
    </section>
  );
};

export default Page;
