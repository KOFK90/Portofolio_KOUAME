"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 p-10 bg-gray-200 shadow-xl"
    >
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-black">
          KOUAME Koffi Kan Nazaire
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-purple-600">
          Créateur de Solutions Digitales | Développeur Full‑stack
        </h2>

        <p className="text-lg leading-relaxed max-w-xl text-justify text-gray-800">
          Avec plus de <strong>3 ans d&apos;expériences dans le web </strong>, je voyage entre les frameworks comme un poète du code. 
          J&apos;ai pour ami un éléphant <Image src="/assets/logos/Php.png" alt="Php" width={40} height={40} className="inline ml-1 transition-transform duration-200 hover:scale-125" />, normal, après tout, c&apos;est lui qui porte le <strong>PHP</strong> sur son dos. 
          Et même <strong>Laravel</strong> <Image src="/assets/logos/laravel.png" alt="Laravel" width={60} height={40} className="inline ml-1 transition-transform duration-200 hover:scale-125" /> n&apos;en dira pas le contraire.
          Que serait mon éléphant sans son fidèle compagnon le dauphin <strong>Mysql</strong> <Image src="/assets/logos/Mysql.png" alt="Mysql" width={40} height={40} className="inline ml-1 transition-transform duration-200 hover:scale-125" />.
          Souvent vous pourrez m&apos;appercevoir avec un <strong>Python</strong> <Image src="/assets/logos/Python.png" alt="Python" width={40} height={40} className="inline ml-1 transition-transform duration-200 hover:scale-125" /> tout <strong>Flask</strong> <Image src="/assets/logos/Flask.png" alt="Flask" width={60} height={40} className="inline ml-1 transition-transform duration-200 hover:scale-125" /> mais paradoxalement robuste.
          Même quand je veux faire de la Java façon de parler j&apos;y vais avec des Scripts: <strong>JavaScript</strong>. 
          Tout ceci m&apos;a donné une <strong>Vue(js)</strong> <Image src="/assets/logos/Vue_js.png" alt="Vue.js" width={60} height={40} className="inline ml-1 transition-transform duration-200 hover:scale-125" />, globale pour faire la distinction entre les frères <strong>Nest.js</strong> <Image src="/assets/logos/Nest.png" alt="Nest.js" width={40} height={40} className="inline ml-1 transition-transform duration-200 hover:scale-125" />, et <strong>Next.js</strong> <Image src="/assets/logos/Next_js.png" alt="Next.js" width={60} height={40} className="inline ml-1 transition-transform duration-200 hover:scale-125" />,
          Aujourd&apos;hui je suis plus <strong>React(js)</strong> <Image src="/assets/logos/React.png" alt="React.js" width={60} height={40} className="inline ml-1 transition-transform duration-200 hover:scale-125" /> face à un projet et même je crée des expériences
          pensées, posées, et des solutions viables. Même <strong>Figma</strong> <Image src="/assets/logos/Figma.png" alt="Figma" width={60} height={40} className="inline ml-1 transition-transform duration-200 hover:scale-125" /> fait partie de mes
          complices dans la danse des pixels.
        </p>
        <div> 
        <Link
            href="/apropos"
            className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800 mt-2"
          >
            En Savoir plus +
          </Link>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <motion.img
          src="/assets/images/Portrait.png"
          alt="Photo de KOUAME Koffi Kan Nazaire"
           width={450} height={450}
          className=" object-cover rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105"
          whileHover={{ scale: 1.03 }}
        />
      </div>
    </motion.section>
  );
}
export default Home;
