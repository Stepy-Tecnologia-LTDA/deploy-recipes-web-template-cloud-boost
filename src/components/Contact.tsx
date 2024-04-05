import Image from "next/image";
import Link from "next/link";

import { LinkedinIcon } from "./Icons/LinkedinIcon";
import { FacebookIcon } from "./Icons/FacebookIcon";
import { InstagramIcon } from "./Icons/InstagramIcon";

import Logo from "../assets/logo.png";

export function Contact() {
  return (
    <section id="contact" className="bg-white px-6 pt-10 pb-6">
      <Image src={Logo} alt="logo" />

      <div className="flex flex-col gap-6 mt-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-sm text-neutral-950 font-medium">
            Navigation Links
          </h2>

          <nav className="flex flex-col gap-[6px]">
            <Link href="#home" className="text-neutral-700 text-sm">
              Home
            </Link>

            <Link href="#resource" className="text-neutral-700 text-sm">
              Resources
            </Link>

            <Link href="#plan" className="text-neutral-700 text-sm">
              Plans and prices
            </Link>

            <Link href="#faq" className="text-neutral-700 text-sm">
              FAQs
            </Link>

            <Link href="#about" className="text-neutral-700 text-sm">
              About Us
            </Link>

            <Link href="#contact" className="text-neutral-700 text-sm">
              Contact
            </Link>
          </nav>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-sm text-neutral-950 font-medium">Legal</h2>

          <div className="flex flex-col gap-[6px]">
            <span className="text-neutral-700 text-sm">Privacy Policy</span>

            <span className="text-neutral-700 text-sm">Terms of use</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-sm text-neutral-950 font-medium">Contact Us</h2>

          <div className="flex flex-col gap-[6px]">
            <span className="text-neutral-700 text-sm">
              Phone: +55 11 9876-5432
            </span>

            <span className="text-neutral-700 text-sm">
              E-mail: suporte@cloudboost.com
            </span>

            <span className="text-neutral-700 text-sm">
              Address: Rua das Nuvens - 1234 <br /> São Paulo- SP, CEP 12345-678
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <LinkedinIcon />
            <FacebookIcon />
            <InstagramIcon />
          </div>

          <div className="w-full h-[1px] bg-neutral-100"></div>

          <span className="text-xs text-neutral-950">
            Copyright © 2024 CloudBoost. All rights reserved.
          </span>
        </div>
      </div>
    </section>
  );
}
