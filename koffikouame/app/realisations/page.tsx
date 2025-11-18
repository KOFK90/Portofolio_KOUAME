"use client";


import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../../components/ProjectCard";


const projects = [
{
title: "Plateforme e‑commerce (Exemple)",
tags: ["Next.js", "Stripe", "MongoDB", "Tailwind"],
description:
"Boutique en ligne full‑stack avec dashboard admin, gestion des produits, paiements et SEO optimisé.",
link: "#",
},
{
title: "Application de Gestion de Ferme",
tags: ["React", "Node.js", "Postgres", "Charts"],
description:
"Solution interne pour suivre production, stocks et ventes (tableaux de bord, alertes).",
link: "#",
},
{
title: "Site Vitrine + SEO pour Cabinet",
tags: ["PHP", "Laravel", "MySQL", "SEO"],
description: "Refonte complète, optimisation référencement et maintenance continue.",
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