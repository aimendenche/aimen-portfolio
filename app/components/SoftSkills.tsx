"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface TechnicalSkill {
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
  categorie: "DevOps" | "Cloud" | "Infrastructure"
}

export default function TechnicalSkills() {
  const [selectedSkill, setSelectedSkill] = useState<number | null>(null)

  const technicalSkills: TechnicalSkill[] = [
    {
      id: 1,
      titre: "Expertise Kubernetes et Conteneurisation",
      resumeCourt: "Maîtrise approfondie de l'orchestration de conteneurs et de la gestion d'infrastructures Kubernetes à grande échelle.",
      contenuDetaille: {
        contexte: "Dans un environnement DevOps moderne, j'ai développé une expertise approfondie dans la gestion et l'optimisation des infrastructures conteneurisées.",
        problematique: "Les défis de scalabilité, de haute disponibilité et de sécurité des applications conteneurisées nécessitent une maîtrise pointue des technologies d'orchestration.",
        solution: "Mise en place d'architectures Kubernetes robustes, incluant la configuration avancée des clusters, la gestion des ressources, et l'implémentation de politiques de sécurité.",
        resultats: "Déploiements plus fiables, réduction des temps d'indisponibilité, et amélioration significative de la scalabilité des applications."
      },
      competences: ["Kubernetes", "Docker", "Helm", "Service Mesh", "Container Security"],
      categorie: "DevOps"
    },
    {
      id: 2,
      titre: "Cloud Architecture AWS",
      resumeCourt: "Conception et implémentation d'architectures cloud robustes et évolutives sur AWS.",
      contenuDetaille: {
        contexte: "Expert en architecture cloud, spécialisé dans la conception de solutions AWS hautement disponibles et sécurisées.",
        problematique: "Les enjeux de performance, de coûts et de sécurité dans le cloud nécessitent une expertise approfondie des services AWS et des bonnes pratiques.",
        solution: "Création d'architectures multi-AZ, utilisation optimale des services managés, et mise en place de stratégies de disaster recovery.",
        resultats: "Disponibilité de 99.99%, optimisation des coûts cloud de 30%, et amélioration de la sécurité globale."
      },
      competences: ["AWS", "CloudFormation", "EKS", "RDS", "Lambda"],
      categorie: "Cloud"
    },
    {
      id: 3,
      titre: "Infrastructure as Code et Automatisation",
      resumeCourt: "Expertise en IaC et automatisation des infrastructures avec Terraform et Ansible.",
      contenuDetaille: {
        contexte: "Spécialisation dans l'automatisation des infrastructures et la gestion de configurations à grande échelle.",
        problematique: "La gestion manuelle des infrastructures est source d'erreurs et ne permet pas de répondre aux besoins de scalabilité.",
        solution: "Implémentation de solutions IaC complètes avec Terraform pour le provisioning et Ansible pour la configuration.",
        resultats: "Réduction de 90% du temps de déploiement, élimination des erreurs de configuration manuelles."
      },
      competences: ["Terraform", "Ansible", "GitOps", "Python", "Bash"],
      categorie: "Infrastructure"
    }
  ]

  return (
    <section id="technicalskills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Compétences Techniques
          </h2>
        </motion.div>

        <div className="space-y-10">
          {technicalSkills.map((skill) => (
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
