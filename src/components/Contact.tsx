import Image from "next/image";
import Link from "next/link";

import { LinkedinIcon } from "./Icons/LinkedinIcon";
import { FacebookIcon } from "./Icons/FacebookIcon";
import { InstagramIcon } from "./Icons/InstagramIcon";

import Logo from "../assets/logo.png";

export function Contact() {
  return (
    <div className="bg-white">
      <section
        id="contact"
        className="container mx-auto max-w-screen-2xl px-6 pt-10 pb-6 md:px-8 md:pt-20 md:pb-11 lg:px-12 lg:pt-28 lg:pb-12"
      >
        <Image
          src={Logo}
          alt="logo"
          className="lg:hidden w-32 h-7 md:w-44 md:h-7 object-contain"
        />

        <div className="flex flex-col gap-6 mt-6 md:flex-row md:justify-between md:mt-12">
          <Image
            src={Logo}
            alt="logo"
            className="hidden lg:block w-44 h-7 object-contain"
          />

          <div className="flex flex-col gap-2 md:gap-3">
            <h2 className="text-sm text-neutral-950 font-medium md:text-lg">
              Navigation Links
            </h2>

            <nav className="flex flex-col gap-[6px] md:gap-2">
              <Link
                href="#home"
                className="text-neutral-700 text-sm md:text-base"
              >
                Home
              </Link>

              <Link
                href="#resource"
                className="text-neutral-700 text-sm md:text-base"
              >
                Resources
              </Link>

              <Link
                href="#plan"
                className="text-neutral-700 text-sm md:text-base"
              >
                Plans and prices
              </Link>

              <Link
                href="#faq"
                className="text-neutral-700 text-sm md:text-base"
              >
                FAQs
              </Link>

              <Link
                href="#about"
                className="text-neutral-700 text-sm md:text-base"
              >
                About Us
              </Link>

              <Link
                href="#contact"
                className="text-neutral-700 text-sm md:text-base"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-2 md:gap-3">
            <h2 className="text-sm text-neutral-950 font-medium md:text-lg">
              Legal
            </h2>

            <div className="flex flex-col gap-[6px] md:gap-2">
              <span className="text-neutral-700 text-sm md:text-base">
                Privacy Policy
              </span>

              <span className="text-neutral-700 text-sm md:text-base">
                Terms of use
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2 md:gap-3">
            <h2 className="text-sm text-neutral-950 font-medium md:text-lg">
              Contact Us
            </h2>

            <div className="flex flex-col gap-[6px] md:gap-2">
              <span className="text-neutral-700 text-sm md:text-base">
                Phone: +55 11 9876-5432
              </span>

              <span className="text-neutral-700 text-sm md:text-base">
                E-mail: suporte@cloudboost.com
              </span>

              <span className="text-neutral-700 text-sm md:text-base">
                Address: Rua das Nuvens - 1234 <br /> São Paulo- SP, CEP
                12345-678
              </span>
            </div>
          </div>
        </div>

        <div className="hidden md:block w-full h-[1px] bg-neutral-100 mt-10 mb-6"></div>

        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
          <div className="md:hidden flex items-center gap-4 mt-14">
            <LinkedinIcon />
            <FacebookIcon />
            <InstagramIcon />
          </div>

          <div className="md:hidden w-full h-[1px] bg-neutral-100"></div>

          <span className="text-xs text-neutral-950 md:text-base">
            Copyright © 2024 CloudBoost. All rights reserved.
          </span>

          <div className="hidden md:flex items-center gap-4">
            <LinkedinIcon />
            <FacebookIcon />
            <InstagramIcon />
          </div>
        </div>
      </section>
    </div>
  );
}
