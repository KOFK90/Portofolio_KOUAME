"use client";

import React from "react";
import { motion } from "framer-motion";


export default function APropos() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen p-10 bg-white text-gray-800"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        {/* <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-extrabold">À propos</h1>
            <p className="mt-2 text-gray-300 max-w-2xl">
              Créateur de solutions digitales, développeur full-stack avec une
              forte appétence pour les expériences utilisateur performantes et
              le code maintenable. J&apos;allie compétences techniques
              (Full-stack) et sens business acquis par mes expériences en
              gestion de projets et marketing.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-gray-400">Abidjan, Côte d&apos;Ivoire</p>
            <p className="text-sm text-gray-400">koffi.kouame@epitech.eu</p>
          </div>
        </header> */}

        {/* Nouvelle Section — Parcours & Formations */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white text-gray-700 rounded-2xl p-6 shadow-lg flex flex-col md:flex-row gap-8"
        >
          {/* Espace portrait */}
          <div className="object-cover rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105">
            <span className="text-gray-400 text-sm">
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
            <h2 className="text-2xl font-bold text-black text-justify">
              Parcours scolaire & formations
            </h2>

            <p className="text-justify">
              Mon parcours a été marqué par deux grandes reconversions qui ont
              forgé ma vision et ma manière d’aborder les projets. J&apos;ai
              d&apos;abord débuté dans le domaine des <strong>Mines, Géologie et
              Pétrole</strong> avec un BTS, puis je me suis orienté vers une
              carrière de <strong>Technico-commercial</strong>. Ces premières
              expériences m&apos;ont permis de développer des qualités telles
              que la communication, l&apos;organisation et la gestion efficace
              de projets.
            </p>

            <p className="text-justify">
              Ma seconde reconversion, guidée par ma passion pour le digital, m’a
              conduit au métier de <strong>développeur full-stack</strong>. J&apos;y ai
              acquis plus de trois ans d’expérience en développement web,
              marketing digital, SEO et web design. Je conçois aujourd’hui des
              applications modernes, efficaces et pensées pour répondre à des
              besoins métiers concrets.
            </p>

            <p className="text-justify">
              Mes <strong>soft skills</strong> — leadership, créativité, rigueur,
              capacité d’adaptation et sens de l’analyse — me permettent
              d&apos;évoluer avec une vision claire : <strong>apporter des solutions
              viables, durables et adaptées aux problèmes réels</strong>, en mettant
              le digital au service des usages, des entreprises et des
              utilisateurs.
            </p>
          </div>
        </motion.section>
      </div>
    </motion.main>
  );
}
