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
    <div className="bg-black fixed w-full z-20">
      <header className="container mx-auto max-w-screen-2xl px-6 py-3 md:px-8 md:py-4 lg:px-12 lg:py-5">
        <nav className="flex items-center justify-between">
          <Image
            src={Logo}
            alt="logo"
            className="w-32 h-7 md:w-40 object-contain"
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

        {isMobileMenu && <MobileMenu close={() => setIsMobileMenu(false)} />}
      </header>
    </div>
  );
}
