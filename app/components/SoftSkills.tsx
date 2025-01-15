"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface CompetenceHumaine {
  id: number
  titre: string
  resumeCourt: string
  contenuComplet: string
  competences: string[]
  categorie: "Analyse" | "organisationnelles " | "Collaboration"
}

export default function CompetencesHumaines() {
  const [selectedCompetence, setSelectedCompetence] = useState<number | null>(null)

  const competencesHumaines: CompetenceHumaine[] = [
    {
      id: 1,
      titre: "Résolution de Problèmes",
      resumeCourt: "Transformer les Défis Techniques en Succès.",
      contenuComplet: `La résolution de problèmes n'est pas qu'une compétence technique ; c'est une philosophie que j'ai adoptée tout au long de mon parcours. En tant qu'alternant, j’ai souvent été confronté à des situations où il n’existait pas de solutions toutes faites. Cela m’a appris à être résilient, créatif et méthodique, des qualités essentielles dans un monde technologique en constante évolution.

Un Incident Marquant : Rétablir un Service Critique
Une situation m’a particulièrement marqué. Un jour, un client a signalé une panne critique ayant mis son système hors service. La situation était urgente, car chaque minute d’indisponibilité engendrait des pertes financières importantes. Bien que je n’aie pas immédiatement les réponses, j'ai adopté une approche structurée :

    Analyse et Diagnostic : J’ai rapidement parcouru les journaux système pour identifier des erreurs spécifiques et leurs causes probables.
    Recherche et Apprentissage : J’ai consulté des forums techniques, des documentations et même des anciens projets pour trouver des pistes de solution.
    Action et Résolution : Après plusieurs essais et ajustements, j’ai corrigé le problème et rétabli le service en moins de trois heures.

Leçons et Vision Future
Cette expérience m’a enseigné à voir les problèmes non pas comme des obstacles, mais comme des opportunités d’apprentissage. À l’avenir, je souhaite approfondir mes compétences en diagnostic prédictif en exploitant des outils d’observabilité avancés comme Prometheus et Grafana, et intégrer l’IA pour anticiper les pannes avant qu’elles ne surviennent.`,

      competences: ["Analyse et synthèse", "Prise de décision rapide", "Recherche", "Adaptabilité face aux imprévus"],
      categorie: "Analyse"
    },
    {
      id: 2,
      titre: "Gestion du Temps",
      resumeCourt: "Organiser mon temps pour tout faire sans être débordé.",
      contenuComplet: `La gestion du temps est une autre compétence clé que j'ai développée au fil de mon parcours, que ce soit pour respecter les délais de projets complexes ou pour équilibrer mes responsabilités professionnelles et personnelles.

Un Défi Initial : Organisation et Productivité
Au début de mon alternance, j'avais du mal à jongler entre les tâches difficiles, les délais serrés et ma vie quotidienne. Cependant, avec de la persévérance et une amélioration continue, j'ai appris à structurer mon travail efficacement :

    Planification Stratégique : J'ai commencé à utiliser des outils comme Trello et des plannings hebdomadaires pour prioriser mes tâches.
    Optimisation du Temps : J'ai fractionné les tâches complexes en étapes plus petites et gérables, ce qui m'a permis de progresser régulièrement sans être submergé.
    Équilibre Personnel : Habitant seul, j'ai appris à m'occuper des tâches ménagères, à faire les courses, à cuisiner et même à voyager tout en respectant mes engagements professionnels.

Un Exemple Concret : Respect des Délais pour un Projet Clé
Lors d'un projet critique impliquant l'automatisation d'un pipeline de données, le délai était extrêmement serré. Grâce à une planification rigoureuse et une exécution disciplinée, j'ai pu livrer le projet à temps, tout en maintenant la qualité des livrables.

Leçons Apprises
Cette expérience m'a montré que la gestion du temps ne se limite pas à respecter les délais professionnels, mais qu'elle implique également de structurer sa vie de manière équilibrée. Aujourd'hui, je suis capable de gérer efficacement des tâches multiples, tout en prenant soin de moi et en profitant de moments personnels.`,

      competences: ["Discipline personnelle", "Résistance au stress", "Pédagogie", "Planification et organisation"],
      categorie: "organisationnelles "
    }
  ]

  return (
    <section id="competences-humaines" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Compétences Transverses
          </h2>
        </motion.div>

        <div className="space-y-10">
          {competencesHumaines.map((competence) => (
            <motion.article
              key={competence.id}
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
                      {competence.categorie}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {competence.titre}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {competence.resumeCourt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {competence.competences.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 
                               text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedCompetence(
                    selectedCompetence === competence.id ? null : competence.id
                  )}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 
                           dark:hover:text-blue-300 transition-colors font-medium"
                >
                  {selectedCompetence === competence.id ? "Voir moins" : "Lire plus"}
                </button>

                <AnimatePresence>
                  {selectedCompetence === competence.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800"
                    >
                      <div className="prose prose-blue dark:prose-invert max-w-none">
                        <div
                          className="text-gray-600 dark:text-gray-300 whitespace-pre-line"
                          dangerouslySetInnerHTML={{ __html: competence.contenuComplet.replace(/\n\n/g, '<br/><br/>') }}
                        />
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
