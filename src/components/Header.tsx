"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "./Button";
import { MobileMenu } from "./MobileMenu";
import { MenuIcon } from "./Icons/MenuIcon";

import Logo from "../assets/logo.png";

export function Header() {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  return (
    <div className="bg-[url('../assets/background-image.png')] lg:bg-[url('../assets/background-desktop.png')]">
      <header
        id="home"
        className="container mx-auto max-w-screen-2xl px-6 pt-3 pb-12 md:px-8 md:pb-24 lg:px-12 lg:pt-5 lg:pb-52"
      >
        <nav className="flex items-center justify-between">
          <Image
            src={Logo}
            alt="logo"
            className="md:w-40 md:h-7 md:object-cover lg:h-8 lg:w-44 lg:object-cover"
          />

          <button className="lg:hidden" onClick={() => setIsMobileMenu(true)}>
            <MenuIcon />
          </button>

          <div className="hidden lg:flex items-center gap-[72px]">
            <div className="flex items-center gap-6">
              <Link
                href="#home"
                className="text-white font-medium active:text-primary-500 duration-300"
              >
                Home
              </Link>

              <Link
                href="#resource"
                className="text-white font-medium active:text-primary-500 duration-300"
              >
                Resources
              </Link>

              <Link
                href="#plan"
                className="text-white font-medium active:text-primary-500 duration-300"
              >
                Plans and prices
              </Link>

              <Link
                href="#faq"
                className="text-white font-medium active:text-primary-500 duration-300"
              >
                FAQs
              </Link>

              <Link
                href="#about"
                className="text-white font-medium active:text-primary-500 duration-300"
              >
                About Us
              </Link>

              <Link
                href="#contact"
                className="text-white font-medium active:text-primary-500 duration-300"
              >
                Contact
              </Link>
            </div>

            <div className="w-32">
              <Button size="small">Start free trial</Button>
            </div>
          </div>
        </nav>

        <div className="flex flex-col items-center gap-3 mt-12 md:mt-24 lg:mt-44 lg:gap-4">
          <h1 className="text-white text-xl font-semibold leading-6 text-center md:text-3xl md:font-bold md:leading-10 lg:text-5xl lg:leading-[56px] lg:max-w-4xl md:max-w-xl">
            Unleash the unlimited power of the cloud with{" "}
            <span className="text-primary-500">CloudBoost</span>
          </h1>

          <p className="text-sm text-neutral-100 font-medium text-center md:text-lg md:leading-6 lg:text-2xl lg:max-w-2xl md:max-w-lg">
            From idea to realization, we transform your aspirations into digital
            reality.
          </p>

          <div className="mt-3 w-32 md:w-40 lg:mt-2">
            <Button className="md:hidden" size="small">
              Start free trial
            </Button>

            <Button className="hidden md:block">Start free trial</Button>
          </div>
        </div>

        {isMobileMenu && <MobileMenu close={() => setIsMobileMenu(false)} />}
      </header>
    </div>
  );
}
