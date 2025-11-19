"use client";


import React from "react";
import { motion } from "framer-motion";


const entries = [
{ date: "2020 – 2025", title: "Créateur de solutions digitales / Freelance", desc: "Applications web, SEO, marketing digital." },
{ date: "2022 – 2024", title: "Responsable de projet (Ferme)", desc: "Gestion production & ventes (avicole/porcine)." },
{ date: "2021 – 2022", title: "Responsable de projet (Savonnerie)", desc: "Administration, production et promotion." },
{ date: "2018 – 2019", title: "Développeur web - Viaclic", desc: "Sites web, contenus digitaux et SEO." },
{ date: "2014 – 2015", title: "Technico‑Commercial (Optimum)", desc: "Formation interne & apporteur d'affaires." },
];


export default function Timeline() {
return (
<div className="relative border-l border-gray-700 pl-6">
{entries.map((e, i) => (
<motion.div
key={e.title}
initial={{ opacity: 0, x: -10 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
transition={{ delay: i * 0.08 }}
className="mb-8"
>
<span className="absolute -left-3 top-1 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-xs font-bold">
{i + 1}
</span>
<time className="text-sm text-gray-400">{e.date}</time>
<h3 className="text-lg font-semibold mt-1">{e.title}</h3>
<p className="text-gray-300">{e.desc}</p>
</motion.div>
))}
</div>
);
}