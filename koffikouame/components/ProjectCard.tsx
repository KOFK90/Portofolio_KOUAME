"use client";


import React from "react";
import { motion } from "framer-motion";


type Props = {
title: string;
description: string;
tags: string[];
link?: string;
};


export default function ProjectCard({ title, description, tags, link = "#" }: Props) {
return (
<motion.article
whileHover={{ scale: 1.02 }}
className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-6 shadow-lg h-full flex flex-col"
>
<h3 className="text-xl font-bold">{title}</h3>
<p className="text-gray-300 mt-3 flex-1">{description}</p>
<div className="mt-4 flex flex-wrap gap-2">
{tags.map((t) => (
<span key={t} className="text-xs px-2 py-1 bg-gray-900 rounded-full text-gray-300">
{t}
</span>
))}
</div>
<a href={link} className="mt-4 inline-block text-sm text-purple-300 hover:underline">
Voir le projet
</a>
</motion.article>
);
}