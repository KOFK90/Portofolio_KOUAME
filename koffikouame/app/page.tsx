"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const buttonBase =
  "w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-3 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800";

const Home = () => {
  const [form, setForm] = useState({ nom: "", email: "", adresse: "", objet: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | { ok: boolean; message: string }>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({ ok: true, message: data.message || "Message envoyé !" });
        setForm({ nom: "", email: "", adresse: "", objet: "", message: "" });
      } else {
        setStatus({ ok: false, message: data.error || "Erreur lors de l'envoi." });
      }
    } catch (err) {
      setStatus({ ok: false, message: "Impossible de contacter le serveur." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 p-10 bg-gray-200 shadow-xl"
      >
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-black">
            KOUAME Koffi Kan Nazaire
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-purple-600">
            Créateur de Solutions Digitales | Développeur Full-stack
          </h2>

          <p className="text-lg leading-relaxed max-w-xl text-justify text-gray-800">
            Avec plus de <strong>3 ans d&apos;expériences dans le web </strong>, je voyage entre les frameworks comme un poète du code.
            J&apos;ai pour ami un éléphant <Image src="/assets/logos/Php.png" alt="Php" width={40} height={40} className="inline ml-1 transition-transform duration-200 hover:scale-125" />, normal, après tout, c&apos;est lui qui porte le <strong>PHP</strong> sur son dos.
            Et même <strong>Laravel</strong> <Image src="/assets/logos/Laravel.png" alt="Laravel" width={60} height={40} className="inline ml-1 transition-transform duration-200 hover:scale-125" /> n&apos;en dira pas le contraire.
            Que serait mon éléphant sans son fidèle compagnon le dauphin <strong>Mysql</strong> <Image src="/assets/logos/Mysql.png" alt="Mysql" width={40} height={40} className="inline ml-1 transition-transform duration-200 hover:scale-125" />.
            Souvent vous pourrez m&apos;appercevoir avec un <strong>Python</strong> <Image src="/assets/logos/Python.png" alt="Python" width={40} height={40} className="inline ml-1 transition-transform duration-200 hover:scale-125" /> tout <strong>Flask</strong> <Image src="/assets/logos/Flask.png" alt="Flask" width={60} height={40} className="inline ml-1 transition-transform duration-200 hover:scale-125" /> mais paradoxalement robuste.
            Même quand je veux faire de la Java façon de parler j&apos;y vais avec des Scripts: <strong>JavaScript</strong>. Bien des fois je me prend pour un super héro du genre <strong>Postman</strong> <Image src="/assets/logos/Postman.png" alt="Postman" width={60} height={40} className="inline ml-1 transition-transform duration-200 hover:scale-125" /> aucune <strong>API REST</strong> ne m&apos;échappe.
            Tout ceci m&apos;a donné une <strong>Vue(js)</strong> <Image src="/assets/logos/Vue_js.png" alt="Vue.js" width={60} height={40} className="inline ml-1 transition-transform duration-200 hover:scale-125" />, globale pour faire la distinction entre les frères <strong>Nest.js</strong> <Image src="/assets/logos/Nest.png" alt="Nest.js" width={40} height={40} className="inline ml-1 transition-transform duration-200 hover:scale-125" />, et <strong>Next.js</strong> <Image src="/assets/logos/Next_js.png" alt="Next.js" width={60} height={40} className="inline ml-1 transition-transform duration-200 hover:scale-125" />,
            Aujourd&apos;hui je suis plus <strong>React(js)</strong> <Image src="/assets/logos/React.png" alt="React.js" width={60} height={40} className="inline ml-1 transition-transform duration-200 hover:scale-125" /> face à un projet et même je crée des expériences
            pensées, posées, et des solutions viables. <strong>Figma</strong> <Image src="/assets/logos/Figma.png" alt="Figma" width={60} height={40} className="inline ml-1 transition-transform duration-200 hover:scale-125" /> fait partie de mes
            complices dans la danse des pixels.
          </p>

          <div>
            <Link
              href="/apropos"
              className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800 mt-2"
            >
              En Savoir plus +
            </Link>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <motion.img
            src="/assets/images/Portrait.png"
            alt="Photo de KOUAME Koffi Kan Nazaire"
            width={450}
            height={450}
            className="object-cover rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105"
            whileHover={{ scale: 1.03 }}
          />
        </div>
      </motion.section>

      {/* SECTION CONTACT */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full bg-gray-200 p-10 shadow-xl flex flex-col items-center space-y-10"
      >
        <h2 className="text-4xl font-bold text-black">Contact</h2>

        <div className="grid md:grid-cols-2 gap-10 w-full max-w-4xl">
          {/* Infos */}
          <div className="space-y-4 text-lg text-gray-800">
            <p><strong>Email :</strong> koffi.kouame@epitech.eu</p>
            <p><strong>Téléphone :</strong> +2250709100126</p>
            <p>
              <Link href="https://github.com/kouame" className="text-purple-700 hover:underline font-semibold">
                Github
              </Link>
            </p>
            <p>
              <Link href="https://linkedin.com/in/kouame" className="text-purple-700 hover:underline font-semibold">
                Linkedin
              </Link>
            </p>
          </div>

          {/* Formulaire connecté à l'API */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <input
              name="nom"
              value={form.nom}
              onChange={handleChange}
              type="text"
              placeholder="Votre nom"
              className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-purple-400"
              required
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="Votre email"
              className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-purple-400"
              required
            />
            <input
              name="adresse"
              value={form.adresse}
              onChange={handleChange}
              type="text"
              placeholder="Votre adresse"
              className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-purple-400"
            />
            <input
              name="objet"
              value={form.objet}
              onChange={handleChange}
              type="text"
              placeholder="Objet du message"
              className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-purple-400"
              required
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Votre message"
              className="w-full p-3 h-32 rounded-lg border focus:ring-2 focus:ring-purple-400"
              required
            ></textarea>

            <motion.button
              type="submit"
              className={buttonBase}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
            >
              {loading ? "Envoi..." : "Envoyer"}
            </motion.button>

            {status && (
              <div
                className={`p-3 rounded-md text-sm ${status.ok ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
              >
                {status.message}
              </div>
            )}
          </motion.form>
        </div>
      </motion.section>
    </>
  );
};

export default Home;

