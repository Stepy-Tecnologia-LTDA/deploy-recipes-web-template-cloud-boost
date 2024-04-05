"use client";

import { useState } from "react";
import Image from "next/image";

import { Button } from "./Button";
import { MobileMenu } from "./MobileMenu";
import { MenuIcon } from "./Icons/MenuIcon";

import Logo from "../assets/logo.png";

export function Header() {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  return (
    <header
      id="home"
      className="bg-[url('../assets/background-image.png')] px-6 pt-3 pb-14"
    >
      <nav className="flex items-center justify-between">
        <Image src={Logo} alt="logo" />

        <button onClick={() => setIsMobileMenu(true)}>
          <MenuIcon />
        </button>
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

      {isMobileMenu && <MobileMenu close={() => setIsMobileMenu(false)} />}
    </header>
  );
}
