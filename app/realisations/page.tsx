"use client";


import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../../components/ProjectCard";
import OlderWebsiteCard from "@/components/OlderWebsiteCard";



const projects = [
{
title: "Yowl: Plateforme pour commenter les URL sans être censuré",
tags: ["Full Laravel", "Prototypage Figma", "Mysql", "Tailwind"],

description:
"La plateforme avait pour objectif principale de permettre à tous ses utilisateurs de pouvoir commenter n'importe quelle URL sans courrir le risque de se faire censurer",
link: "https://github.com/EpitechCodingAcademyPromo2025/C-DEV-160-ABJ-1-3-yowl-paterne.seka",
},
{
title: "Tomatoes: inspiré de my rotten tomatoes",
tags: ["Next.js", "Node.js", "API REST", "Mongodb", "Tailwind"],
description:
"Inspiré du site web my rotten tomatoes, notre plateforme permettait à ses utilisateurs de pouvoir commenter, noter et ajouter un film en favoris. En guise de bonus mon équipe et moi avons rajouté une option streaming",
link: "https://github.com/EpitechCodingAcademyPromo2026/C-COD-270-ABJ-2-1-c2cod270p0-4",
},
{
title: "Dasboard: Widgets board",
tags: ["React.js", "Nest.js", "API REST", "Mongodb", "Tailwind"],
description: "Plateforme permettant à l'utilisateur d'acceder à un board ou il peut choisir des widgets qui s'ajoutent automatiquement à sa selection",
link: "https://github.com/EpitechCodingAcademyPromo2026/C-COD-280-ABJ-2-1-dashboard-9",
},
{
title: "Trello Clone: Application mobile de Trello",
tags: ["React Native", "API REST", "Tailwind"],
description: "La version mobile de la plateforme Trello, grâce à l'API public de Trello",
link: "https://github.com/EpitechCodingAcademyPromo2026/C-COD-290-ABJ-2-1-epicture-6",
},
];

const olderWebsites = [
  {
    title: "Patisserie la Passion",
    description: "Site vitrine de Pâtisserie",
    link: "https://www.patisserie-lapassion.com",
  },

  {
    title: "IAMS GROUP SARL",
    description: "Site vitrine dans le domaine de l'immobilier",
    link: "https://www.iamsgroupsarl.com",
  },

  {
    title: "Cabinet MODERN'ORTHO",
    description: "Site vitrine Cabinet d'Orthodontie",
    link: "https://www.cabinetmodernortho.com",
  },

  {
    title: "Mon Book",
    description: "Book personnel résumant quelques créas passées",
    link: "https://kofk90.github.io/book/",
  },
  
];

export default function Realisations() {
return (
<motion.main
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.6 }}
className="min-h-screen p-10 bg-white text-gray-100"
>
<div className="max-w-6xl mx-auto space-y-8">
<header className="flex items-center justify-between">
<h1 className="text-4xl font-extrabold text-gray-800">Réalisations</h1>
</header>


<section className="grid md:grid-cols-3 gap-6">
{projects.map((p) => (
<ProjectCard key={p.title} {...p} />
))}
</section>


<section className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-6 shadow-lg">
<h2 className="text-2xl font-semibold">Quelques projets antérieurs :</h2>
<p className="text-gray-300 mt-2">Voici quelques projets réalisés dans le courant de l&apos;année 2019.</p>
</section>
<section>
  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
    Anciens sites web réalisés
  </h2>

  <div className="grid md:grid-cols-2 gap-6">
    {olderWebsites.map((site) => (
      <OlderWebsiteCard key={site.title} {...site} />
    ))}
  </div>
</section>
</div>
</motion.main>
);
}