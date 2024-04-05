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
    <div className="fixed inset-0 bg-black z-10 px-6 pt-3">
      <header className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <Image src={Logo} alt="logo" />

          <button onClick={close}>
            <CloseIcon />
          </button>
        </div>

        <nav className="flex flex-col gap-4">
          <Link
            href="#home"
            onClick={close}
            className="text-white text-sm active:text-primary-500 active:font-medium"
          >
            Home
          </Link>

          <Link
            href="#resource"
            onClick={close}
            className="text-white text-sm active:text-primary-500 active:font-medium"
          >
            Resources
          </Link>

          <Link
            href="#plan"
            onClick={close}
            className="text-white text-sm active:text-primary-500 active:font-medium"
          >
            Plans and prices
          </Link>

          <Link
            href="#faq"
            onClick={close}
            className="text-white text-sm active:text-primary-500 active:font-medium"
          >
            FAQs
          </Link>

          <Link
            href="#about"
            onClick={close}
            className="text-white text-sm active:text-primary-500 active:font-medium"
          >
            About Us
          </Link>

          <Link
            href="#contact"
            onClick={close}
            className="text-white text-sm active:text-primary-500 active:font-medium"
          >
            Contact
          </Link>
        </nav>

        <Button size="small">Start free trial</Button>
      </header>
    </div>
  );
}
