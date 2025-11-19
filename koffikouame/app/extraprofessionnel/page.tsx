"use client";


import React from "react";
import { motion } from "framer-motion";


export default function ExtraPro() {
return (
<motion.main
initial={{ opacity: 0, y: 10 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
className="min-h-screen p-10 bg-white text-gray-800"
>
<div className="max-w-5xl mx-auto space-y-6">
<h1 className="text-4xl font-extrabold">Expériences extra‑professionnelles</h1>


<section className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-6 shadow-lg">
<h2 className="text-2xl font-semibold">Gestion de projets - Ferme & Savonnerie</h2>
<p className="text-gray-300 mt-2">Responsable de production, ventes et promotion. J&apos;ai géré des équipes,
organisé la production et optimisé les processus logistiques. Ces expériences renforcent ma vision produit
et ma capacité à livrer des solutions pragmatiques et orientées résultat.
</p>
</section>


<section className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-6 shadow-lg">
<h2 className="text-2xl font-semibold">Commercial & Technico‑commercial</h2>
<p className="text-gray-300 mt-2">Formation technico‑commerciale, création de réseau de distribution et
promotion de marque. Je combine la technique et la vente : comprendre un besoin, proposer une solution,
et l&apos;accompagner jusqu&apos;à son adoption.
</p>
</section>


<section className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-6 shadow-lg">
<h2 className="text-2xl font-semibold">Formation & parcours initial</h2>
<p className="text-gray-300 mt-2">Technicien supérieur en Mines‑Géologie‑Pétrole (BTS) — puis reconversion vers le
développement web et le marketing digital. Ce parcours atypique explique ma méthodologie orientée données
et process.
</p>
</section>
</div>
</motion.main>
);
}