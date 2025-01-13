"use client"

import { motion } from "framer-motion"

type SoftSkill = {
  id: number;
  titre: string;
  resumeCourt: string;
  contenuDetaille: {
    description: string;
    application: string;
    impact: string;
  };
  domaines: string[];
};

export default function SoftSkills() {
  const softSkills: SoftSkill[] = [
    {
      id: 1,
      titre: "Leadership Technique",
      resumeCourt: "Capacité à guider les équipes techniques et à promouvoir les meilleures pratiques.",
      contenuDetaille: {
        description: "Leadership par l'exemple et mentorat technique auprès des équipes de développement.",
        application: "Animation de sessions de formation, revues de code, et accompagnement des développeurs dans l'adoption des pratiques DevOps.",
        impact: "Amélioration significative de la qualité du code et de la collaboration entre les équipes."
      },
      domaines: ["Mentorat", "Formation", "Communication", "Gestion d'équipe"]
    },
    {
      id: 2,
      titre: "Résolution de Problèmes Complexes",
      resumeCourt: "Approche méthodique et efficace dans la résolution des incidents et l'optimisation des systèmes.",
      contenuDetaille: {
        description: "Analyse approfondie et résolution structurée des problèmes techniques complexes.",
        application: "Diagnostic et résolution d'incidents de production, optimisation des performances système.",
        impact: "Réduction significative des temps d'indisponibilité et amélioration de la stabilité des systèmes."
      },
      domaines: ["Analyse", "Diagnostic", "Gestion de crise", "Documentation"]
    }
  ];

  return (
    <section id="soft-skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Compétences Humaines
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Savoir-être et capacités relationnelles
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {softSkills.map((skill) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {skill.titre}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {skill.resumeCourt}
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Description
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {skill.contenuDetaille.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Application
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {skill.contenuDetaille.application}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Impact
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {skill.contenuDetaille.impact}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skill.domaines.map((domaine) => (
                    <span
                      key={domaine}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 
                               text-blue-600 dark:text-blue-300 rounded-full text-sm"
                    >
                      {domaine}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
