"use client";


import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../../components/ProjectCard";


const projects = [
{
title: "Yowl: Plateforme pour commenter les URL sans être censuré",
tags: ["Full Laravel", "Prototypage Figma", "Mysql", "Tailwind"],

description:
"La plateforme avait pour objectif principale de permettre à tous ses utilisateurs de pouvoir commenter n'importe quelle URL sans courrir le risque de se faire censurer",
link: "#",
},
{
title: "Tomatoes: inspiré de my rotten tomatoes",
tags: ["Next.js", "Node.js", "API REST", "Mongodb", "Tailwind"],
description:
"Inspiré du site web my rotten tomatoes, notre plateforme permettait à ses utilisateurs de pouvoir commenter, noter et ajouter un film en favoris. En guise de bonus mon équipe et moi avons rajouté une option streaming",
link: "#",
},
{
title: "Dasboard: Widgets board",
tags: ["React.js", "Nest.js", "API REST", "Mongodb", "Tailwind"],
description: "Plateforme permettant à l'utilisateur d'acceder à un board ou il peut choisir des widgets qui s'ajoutent automatiquement à sa selection",
link: "#",
},
{
title: "Trello Clone: Application mobile de Trello",
tags: ["React Native", "API REST", "Tailwind"],
description: "La version mobile de la plateforme Trello, grâce à l'API public de Trello",
link: "#",
},
];


export default function Realisations() {
return (
<motion.main
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.6 }}
className="min-h-screen p-10 bg-gray-900 text-gray-100"
>
<div className="max-w-6xl mx-auto space-y-8">
<header className="flex items-center justify-between">
<h1 className="text-4xl font-extrabold">Réalisations</h1>
</header>


<section className="grid md:grid-cols-3 gap-6">
{projects.map((p) => (
<ProjectCard key={p.title} {...p} />
))}
</section>


<section className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-6 shadow-lg">
<h2 className="text-2xl font-semibold">Envie d&apos;une démonstration live ?</h2>
<p className="text-gray-300 mt-2">Contactez‑moi pour une présentation ou un audit technique de vos projets.</p>
</section>
</div>
</motion.main>
);
}