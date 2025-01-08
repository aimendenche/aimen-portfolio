"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Définissons une structure claire pour chaque réalisation
interface Realisation {
  id: number
  titre: string
  // Le résumé qui apparaît initialement
  resumeCourt: string
  // La description complète qui s'affiche en cliquant sur "Lire plus"
  contenuDetaille: {
    contexte: string
    problematique: string
    solution: string
    resultats: string
  }
  competences: string[]
  // Pour catégoriser vos réalisations
  categorie: "Technique" | "DevOps" | "Cloud" | "Automatisation"
}

export default function Projects() {
  // État pour gérer l'article actuellement ouvert
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null)

  // Exemples de réalisations (à remplacer par vos vrais articles)
  const realisations: Realisation[] = [
    {
      id: 1,
      titre: "Validation Automatisée des Golden Rules Kubernetes",
      resumeCourt: "Développement d'une solution native Kubernetes en Go pour automatiser la validation des standards de déploiement et renforcer la sécurité des infrastructures multi-clusters.",
      contenuDetaille: {
        contexte: "En tant qu'administrateur Kubernetes, j'ai eu la responsabilité de gérer une infrastructure multi-clusters hébergeant divers clients, chacun bénéficiant de son propre environnement de déploiement dédié. Pour garantir l'excellence opérationnelle et maintenir les plus hauts standards de sécurité, j'ai établi un ensemble de Golden Rules - des directives essentielles que chaque déploiement client doit respecter. Cette approche standardisée que j'ai mise en place visait à assurer la stabilité, la sécurité et la performance optimale de l'infrastructure, tout en permettant une gestion cohérente des différents environnements clients.",
        problematique: "Malgré l'établissement de ces règles fondamentales, nous avons constaté des écarts significatifs dans leur application. Certains déploiements clients ne respectaient pas systématiquement ces standards critiques, ce qui présentait des risques potentiels pour la résilience et la sécurité de leurs applications",
        solution: "Développement d'une application Go intégrée nativement à Kubernetes, permettant une analyse automatique et en temps réel des déploiements. L'application parcourt les namespaces, valide les manifestes selon nos Golden Rules, et génère des rapports détaillés stockés dans un bucket StorageGrid S3 pour un accès client facilité.",
        resultats: "Automatisation complète du processus de validation, réduction de 90% du temps d'audit, détection précoce des risques de sécurité et amélioration significative de la qualité des déploiements.",
      },
      competences: ["Golang", "Kubernetes API", "StorageGrid S3", "JSON Schema", "Custom Operators", "GitOps"],
      categorie: "Automatisation"
    },
    {
      id: 3,
      titre: "Mise en place d'une infrastructure Cloud hautement disponible",
      resumeCourt: "Conception et implémentation d'une architecture cloud robuste pour supporter les applications critiques de l'entreprise.",
      contenuDetaille: {
        contexte: "Dans le cadre de la transformation digitale de l'entreprise, nous devions migrer les applications legacy vers une infrastructure moderne.",
        problematique: "Les applications existantes souffraient de problèmes de disponibilité et de scalabilité, impactant directement la productivité des équipes.",
        solution: "Mise en place d'une architecture multi-AZ sur AWS, utilisant des services managés et des pratiques DevOps modernes pour assurer la haute disponibilité.",
        resultats: "Amélioration de 99.9% de la disponibilité des services, réduction de 40% des coûts d'infrastructure, et diminution significative du temps de déploiement.",
      },
      competences: ["AWS", "Terraform", "Kubernetes", "High Availability", "Monitoring"],
      categorie: "Cloud"
    },
    {
      id: 2,
      titre: "Automatisation du processus de déploiement",
      resumeCourt: "Optimisation du pipeline de déploiement pour réduire le time-to-market et améliorer la qualité des livrables.",
      contenuDetaille: {
        contexte: "Les déploiements manuels étaient source d'erreurs et prenaient beaucoup de temps aux équipes.",
        problematique: "Le processus de déploiement manuel créait des goulots d'étranglement et augmentait les risques d'erreurs.",
        solution: "Implémentation d'un pipeline CI/CD complet avec des tests automatisés et des environnements éphémères.",
        resultats: "Réduction du temps de déploiement de 3 heures à 15 minutes, zéro downtime pendant les déploiements.",
      },
      competences: ["GitLab CI", "Docker", "Jenkins", "Ansible", "Testing"],
      categorie: "Automatisation"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de la section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Réalisations Professionnelles
          </h2>
        </motion.div>

        {/* Articles de réalisation */}
        <div className="space-y-10">
          {realisations.map((realisation) => (
            <motion.article
              key={realisation.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden"
            >
              {/* En-tête de l'article */}
              <div className="p-6 border-b border-gray-100 dark:border-gray-800">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 
                                   bg-blue-100 dark:bg-blue-900 dark:text-blue-200 rounded-full mb-3">
                      {realisation.categorie}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {realisation.titre}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Corps de l'article */}
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {realisation.resumeCourt}
                </p>

                {/* Compétences utilisées */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {realisation.competences.map((competence, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 
                               text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {competence}
                    </span>
                  ))}
                </div>

                {/* Bouton pour afficher/masquer les détails */}
                <button
                  onClick={() => setSelectedArticle(
                    selectedArticle === realisation.id ? null : realisation.id
                  )}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 
                           dark:hover:text-blue-300 transition-colors font-medium"
                >
                  {selectedArticle === realisation.id ? "Voir moins" : "Lire plus"}
                </button>

                {/* Détails étendus */}
                <AnimatePresence>
                  {selectedArticle === realisation.id && (
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
                            {realisation.contenuDetaille.contexte}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white mb-2">Problématique</h4>
                          <p className="text-gray-600 dark:text-gray-300">
                            {realisation.contenuDetaille.problematique}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white mb-2">Solution</h4>
                          <p className="text-gray-600 dark:text-gray-300">
                            {realisation.contenuDetaille.solution}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white mb-2">Résultats</h4>
                          <p className="text-gray-600 dark:text-gray-300">
                            {realisation.contenuDetaille.resultats}
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
