"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function APropos() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen p-10 text-gray-800 bg-white"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"></header>

        {/* Nouvelle Section — Parcours & Formations */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8 p-6 text-gray-700 bg-white shadow-lg rounded-2xl md:flex-row"
        >
          {/* Espace portrait */}
          <div className="object-cover transition-transform duration-300 shadow-xl rounded-2xl hover:scale-105">
            <span className="text-sm text-center text-purple-600">
              <motion.img
                src="/assets/images/Portrait2.png"
                alt="Photo de KOUAME Koffi Kan Nazaire"
                width={270}
                height={300}
                whileHover={{ scale: 1.03 }}
              />
              — KOUAME Koffi Kan Nazaire —
            </span>
          </div>

          {/* Texte */}
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl font-extrabold text-justify text-black">
              À propos
            </h1>
            <p className="text-justify">
              Créateur de solutions digitales, développeur{" "}
              <strong> Full-stack </strong> avec une forte appétence pour les
              Challenges. J&apos;allie compétences techniques (Full-stack) et
              sens business acquis par mes expériences en gestion de projets et
              communication-marketing.
            </p>

            <h2 className="text-2xl font-bold text-justify text-black">
              Parcours scolaire & formations
            </h2>

            <p className="text-justify">
              Mon parcours a été marqué par deux grandes reconversions qui ont
              forgé ma vision et ma manière d’aborder les projets. J&apos;ai
              d&apos;abord débuté dans le domaine des{" "}
              <strong>Mines, Géologie et Pétrole</strong> avec un BTS, puis je
              me suis orienté vers une carrière de{" "}
              <strong>Technico-commercial</strong>. Ces premières expériences
              m&apos;ont permis de développer des qualités telles que la
              communication, l&apos;organisation et la gestion efficace de
              projets.
            </p>

            <p className="text-justify">
              Ma seconde reconversion, guidée par ma passion pour le digital,
              m’a conduit au métier de <strong>développeur full-stack</strong>.
              J&apos;y ai acquis plus de trois ans d’expérience en développement
              web, marketing digital, SEO et web design. Je conçois aujourd’hui
              des applications modernes, efficaces et pensées pour répondre à
              des besoins métiers concrets.
            </p>
            <h2 className="text-2xl font-bold text-justify text-black">
              Soft Skills & Vision
            </h2>
            <p className="text-justify">
              Mes <strong>soft skills</strong> — leadership, créativité,
              rigueur, capacité d’adaptation et sens de l’analyse — me
              permettent d&apos;évoluer avec une vision claire :{" "}
              <strong>
                apporter des solutions viables, durables et adaptées aux
                problèmes réels
              </strong>
              , en mettant le digital au service des usages, des entreprises et
              des utilisateurs.
            </p>
            <div className="flex justify-between">
            <Link
              href="/competences"
              className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800 mt-2"
            >
              Ce que je sais faire {">>"}
            </Link>
            <Link
              href="/realisations"
              className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800 mt-2"
            >
              Ce que j&apos;ai déjà fais {">>"}
            </Link>
          </div>
          </div>
          
        </motion.section>
      </div>
    </motion.main>
  );
}
