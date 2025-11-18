"use client";

import React from "react";
import { motion } from "framer-motion";
import SkillBadge from "../../components/SkillBadge";
import Timeline from "../../components/Timeline";

const skills = [
  { name: "React.js", level: 85 },
  { name: "Next.js", level: 80 },
  { name: "Node.js / Nest", level: 75 },
  { name: "PHP / Laravel", level: 70 },
  { name: "Python / Flask", level: 65 },
  { name: "MySQL / MongoDB", level: 78 },
  { name: "HTML / CSS / Tailwind", level: 88 },
];

export default function APropos() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen p-10 bg-gray-900 text-gray-100"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-extrabold">À propos</h1>
            <p className="mt-2 text-gray-300 max-w-2xl">
              Créateur de solutions digitales, développeur full‑stack avec une
              forte appétence pour les expériences utilisateur performantes et
              le code maintenable. J&apos;allie compétences techniques
              (Full‑stack) et sens business acquis par mes expériences en
              gestion de projets et marketing.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-gray-400">Abidjan, Côte d&apos;Ivoire</p>
            <p className="text-sm text-gray-400">koffi.kouame@epitech.eu</p>
          </div>
        </header>

        {/* Skills grid */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            Compétences techniques
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {skills.map((s) => (
              <SkillBadge key={s.name} name={s.name} level={s.level} />
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            Parcours & expériences
          </h2>
          <Timeline />
        </section>

        <section className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Soft skills & vision</h2>
          <p className="text-gray-300">
            Leadership, rigueur, créativité et sens de l&apos;organisation. Je
            conçois des solutions qui répondent autant aux besoins techniques
            qu&apos;aux objectifs métier. En tant que développeur full‑stack,
            j&apos;optimise les performances, l&apos;accessibilité et
            l&apos;expérience globale.
          </p>
        </section>
      </div>
    </motion.main>
  );
}
