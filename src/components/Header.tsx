import Image from "next/image";

import { Button } from "./Button";
import { MenuIcon } from "./Icons/MenuIcon";

import Logo from "../assets/logo.png";

export function Header() {
  return (
    <header className="bg-black px-6 pt-3 pb-14">
      <nav className="flex items-center justify-between">
        <Image src={Logo} alt="logo" />

        <MenuIcon />
      </nav>

      <div className="flex flex-col items-center gap-3 mt-12">
        <h1 className="text-white text-xl font-semibold leading-6 text-center">
          Unleash the unlimited power of the cloud with{" "}
          <span className="text-primary-500">CloudBoost</span>
        </h1>

        <p className="text-sm text-neutral-100 font-medium text-center">
          From idea to realization, we transform your aspirations into digital
          reality.
        </p>

        <div className="mt-3 w-32">
          <Button size="small">Start free trial</Button>
        </div>
      </div>
    </header>
  );
}
