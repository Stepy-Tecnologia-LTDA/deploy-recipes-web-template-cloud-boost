import Image from "next/image";

import Logo from "../assets/logo.png";
import { CloseIcon } from "./Icons/CloseIcon";
import Link from "next/link";
import { Button } from "./Button";

interface MobileMenu {
  close: () => void;
}

export function MobileMenu({ close }: MobileMenu) {
  return (
    <div className="fixed inset-0 bg-black md:bg-black/70 z-10">
      <header className="flex flex-col gap-6 px-6 pt-3 md:px-6 md:py-4 md:bg-black w-full h-full md:absolute md:right-0 max-w-md">
        <div className="flex items-center justify-between">
          <Image
            src={Logo}
            alt="logo"
            className="w-32 h-7 md:w-40 object-contain"
          />

          <button onClick={close}>
            <CloseIcon />
          </button>
        </div>

        <nav className="flex flex-col gap-4">
          <Link
            href="#home"
            onClick={close}
            className="text-white text-sm active:text-primary-500 active:font-medium md:text-base"
          >
            Home
          </Link>

          <Link
            href="#resource"
            onClick={close}
            className="text-white text-sm active:text-primary-500 active:font-medium md:text-base"
          >
            Resources
          </Link>

          <Link
            href="#plan"
            onClick={close}
            className="text-white text-sm active:text-primary-500 active:font-medium md:text-base"
          >
            Plans and prices
          </Link>

          <Link
            href="#faq"
            onClick={close}
            className="text-white text-sm active:text-primary-500 active:font-medium md:text-base"
          >
            FAQs
          </Link>

          <Link
            href="#about"
            onClick={close}
            className="text-white text-sm active:text-primary-500 active:font-medium md:text-base"
          >
            About Us
          </Link>

          <Link
            href="#contact"
            onClick={close}
            className="text-white text-sm active:text-primary-500 active:font-medium md:text-base"
          >
            Contact
          </Link>
        </nav>

        <Button className="md:hidden" size="small">
          Start free trial
        </Button>

        <Button className="hidden md:block">Start free trial</Button>
      </header>
    </div>
  );
}
