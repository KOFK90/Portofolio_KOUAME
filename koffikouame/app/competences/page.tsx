"use client"
import SkillBadge from "../../components/SkillBadge";
import Timeline from "../../components/Timeline";
import { motion } from "framer-motion";

const skills = [
  { name: "React.js", level: 85 },
  { name: "Next.js", level: 80 },
  { name: "Node.js / Nest", level: 75 },
  { name: "PHP / Laravel", level: 70 },
  { name: "Python / Flask", level: 65 },
  { name: "MySQL / MongoDB", level: 78 },
  { name: "HTML / CSS / Tailwind", level: 88 },
];
export default function Competences() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen p-10 bg-white text-gray-800"
    >
      <div className="max-w-6xl mx-auto space-y-8">
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
              Mes <strong>soft skills</strong> — leadership, créativité, rigueur,
              capacité d’adaptation et sens de l’analyse — me permettent
              d&apos;évoluer avec une vision claire : <strong>apporter des solutions
              viables, durables et adaptées aux problèmes réels</strong>, en mettant
              le digital au service des usages, des entreprises et des
              utilisateurs.
            </p>
        </section>
    </div>
    </motion.main>
  );
}
