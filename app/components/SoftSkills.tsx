"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface SoftSkill {
  id: number
  titre: string
  resumeCourt: string
  contenuDetaille: {
    contexte: string
    problematique: string
    solution: string
    resultats: string
  }
  competences: string[]
  categorie: "Communication" | "Leadership" | "Gestion de projet"
}

export default function SoftSkills() {
  const [selectedSkill, setSelectedSkill] = useState<number | null>(null)

  const softSkills: SoftSkill[] = [
    {
      id: 1,
      titre: "Leadership & Mentorat Technique",
      resumeCourt: "Développement et accompagnement des équipes techniques dans l'adoption des meilleures pratiques DevOps.",
      contenuDetaille: {
        contexte: "Dans un contexte de transformation digitale, j'ai identifié le besoin d'accompagner les équipes dans leur montée en compétences sur les pratiques DevOps et Cloud.",
        problematique: "Les équipes techniques étaient confrontées à des défis d'adoption des nouvelles technologies et méthodologies, créant des résistances et ralentissant la transformation.",
        solution: "Mise en place d'un programme de mentorat structuré : sessions hebdomadaires de formation, ateliers pratiques, et accompagnement personnalisé des équipes.",
        resultats: "Amélioration significative de l'autonomie des équipes, réduction de 60% des incidents liés aux déploiements, et adoption réussie des pratiques DevOps."
      },
      competences: ["Formation", "Accompagnement", "Communication technique", "Gestion du changement"],
      categorie: "Leadership"
    }
    // Ajoutez vos autres compétences humaines ici
  ]

  return (
    <section id="softskills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Compétences Humaines
          </h2>
        </motion.div>

        <div className="space-y-10">
          {softSkills.map((skill) => (
            <motion.article
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6 border-b border-gray-100 dark:border-gray-800">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 
                                   bg-blue-100 dark:bg-blue-900 dark:text-blue-200 rounded-full mb-3">
                      {skill.categorie}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {skill.titre}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {skill.resumeCourt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {skill.competences.map((competence, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 
                               text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {competence}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedSkill(
                    selectedSkill === skill.id ? null : skill.id
                  )}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 
                           dark:hover:text-blue-300 transition-colors font-medium"
                >
                  {selectedSkill === skill.id ? "Voir moins" : "Lire plus"}
                </button>

                <AnimatePresence>
                  {selectedSkill === skill.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800"
                    >
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white mb-2">Contexte</h4>
                          <p className="text-gray-600 dark:text-gray-300">
                            {skill.contenuDetaille.contexte}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white mb-2">Problématique</h4>
                          <p className="text-gray-600 dark:text-gray-300">
                            {skill.contenuDetaille.problematique}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white mb-2">Solution</h4>
                          <p className="text-gray-600 dark:text-gray-300">
                            {skill.contenuDetaille.solution}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white mb-2">Résultats</h4>
                          <p className="text-gray-600 dark:text-gray-300">
                            {skill.contenuDetaille.resultats}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
