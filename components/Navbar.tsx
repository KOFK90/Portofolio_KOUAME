"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Accueil" },
    { href: "/apropos", label: "Me Concernant" },
    { href: "/competences", label: "Ce que je sais faire" },
    { href: "/realisations", label: "Ce que j’ai déjà fais" },
    { href: "/extraprofessionnel", label: "Extra" },
    { href: "/#contact", label: "Me contacter" },
  ];

  return (
    <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between max-w-7xl px-4 mx-auto">
        <Link href="#" className="flex items-center">
          <Image src="" width={40} height={40} alt="Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            M. KOUAME
          </span>
        </Link>

        <div className="flex items-center lg:order-2">
          <Link
            href="/CV_KOUAME NAZAIRE.pdf"
            download
            className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
          >
            Télécharger CV
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 ml-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5h14a1 1 0 100-2H3a1 1 0 000 2zm0 5h14a1 1 0 100-2H3a1 1 0 000 2zm0 5h14a1 1 0 100-2H3a1 1 0 000 2z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </button>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full lg:flex lg:w-auto lg:order-1`}
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`
                          block py-2 px-4 rounded-md transition-all duration-200
                          ${
                            pathname === link.href
                              ? "bg-white text-purple-800 font-semibold dark:bg-gray-200"
                              : "text-gray-700 dark:text-gray-400"
                          }
                         hover:bg-white hover:text-purple-800
                         focus:bg-white focus:text-purple-800
                        `}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
