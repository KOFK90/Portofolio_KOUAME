"use client";


import React from "react";
import { motion } from "framer-motion";


type Props = { name: string; level: number };


export default function SkillBadge({ name, level }: Props) {
return (
<motion.div
initial={{ opacity: 0, y: 8 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.4 }}
className="p-4 bg-gray-800 rounded-lg shadow-inner"
>
<div className="flex items-center justify-between mb-2">
<h3 className="font-semibold">{name}</h3>
<span className="text-sm text-gray-400">{level}%</span>
</div>
<div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
<div
className="h-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600"
style={{ width: `${level}%`, transition: "width 0.8s ease" }}
/>
</div>
</motion.div>
);
}