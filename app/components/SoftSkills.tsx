"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface CompetenceHumaine {
  id: number
  titre: string
  resumeCourt: string
  contenuComplet: string
  competences: string[]
  categorie: "Analyse" | "Communication" | "Collaboration"
}

export default function CompetencesHumaines() {
  const [selectedCompetence, setSelectedCompetence] = useState<number | null>(null)

  const competencesHumaines: CompetenceHumaine[] = [
    {
      id: 1,
      titre: "Analyse de l'Environnement Technologique",
      resumeCourt: "Évaluation comparative approfondie des solutions techniques pour répondre aux besoins spécifiques d'une organisation.",
      contenuComplet: `L'analyse de l'environnement technologique consiste à évaluer et comparer les différentes solutions techniques disponibles sur le marché afin de répondre précisément aux besoins spécifiques d'une organisation.

Contexte du Projet
J'ai été chargé de réaliser une étude comparative approfondie entre Kubernetes et OpenShift pour l'orchestration de conteneurs, avec un objectif clair : recommander la solution la plus adaptée aux contraintes spécifiques d'une entreprise.

Méthodologie d'Analyse

Définition des Critères d'Évaluation
Ma démarche a été structurée autour de critères précis :
- Fonctionnalités de déploiement
- Gestion des ressources
- Mécanismes de sécurité
- Capacités de scalabilité
- Coûts d'implémentation et de maintenance

Collecte et Analyse des Informations
Mon processus d'analyse a comporté plusieurs étapes essentielles :
- Consultation de la documentation officielle
- Analyse approfondie des études de cas existantes
- Recueil de retours d'expérience d'utilisateurs
- Entretiens avec des experts techniques et responsables opérationnels

Approche Collaborative
Les entretiens avec les experts ont été déterminants. Leurs perspectives m'ont permis d'intégrer des dimensions souvent négligées :
- Facilité d'intégration avec les systèmes existants
- Niveau de support technique
- Adéquation avec l'écosystème technologique du client

Analyse Comparative Détaillée
J'ai établi une matrice comparative exhaustive, mettant en lumière :
- Points forts de chaque solution
- Limitations potentielles
- Adéquation précise aux besoins spécifiques du client

Résultats et Recommandations
Ma recommandation finale a pris en compte :
- Les contraintes budgétaires
- Les capacités de montée en charge
- La complexité d'implémentation
- Les perspectives d'évolution technologique

Conclusion
Cette mission m'a permis de démontrer ma capacité à transformer des analyses techniques complexes en recommandations stratégiques concrètes, en plaçant les besoins réels du client au cœur de ma démarche.`,
      competences: ["Analyse comparative", "Évaluation technique", "Recherche", "Recommandation stratégique"],
      categorie: "Analyse"
    },
    {
      id: 2,
      titre: "Gestion de Projet et Coordination d'Équipe",
      resumeCourt: "Coordination efficace de projets techniques multidisciplinaires, en favorisant la collaboration et la communication.",
      contenuComplet: `La gestion de projet va bien au-delà de la simple planification. C'est l'art de créer une synergie entre des compétences diverses pour atteindre un objectif commun.

Contexte
Dans un projet de migration cloud complexe impliquant plusieurs équipes et technologies, j'ai dû coordonner des experts aux profils très variés : développeurs, infrastructures, sécurité.

Défis Principaux
- Alignement des objectifs techniques et métiers
- Gestion des différences de culture et de communication
- Maintien de la motivation et de l'engagement

Stratégies Développées
Plusieurs approches ont été clés dans ma réussite :
- Mise en place de rituels de communication réguliers
- Création de tableaux de bord de suivi transparents
- Méthode de résolution collaborative des problèmes

Outils et Méthodes
- Utilisation de Jira pour la gestion de projet
- Mise en place de réunions hebdomadaires de synchronisation
- Création de canaux de communication dédiés

Impact
- Réduction des délais de 30%
- Amélioration de la satisfaction équipe
- Livraison du projet dans les temps et le budget

Conclusion
La réussite d'un projet repose sur la capacité à créer du lien, à comprendre chaque perspective et à guider collectivement vers un objectif commun.`,
      competences: ["Coordination", "Communication", "Gestion de projet", "Leadership"],
      categorie: "Collaboration"
    },
    {
      id: 3,
      titre: "Communication Technique et Vulgarisation",
      resumeCourt: "Transformer des concepts techniques complexes en récits compréhensibles pour des publics variés.",
      contenuComplet: `Communiquer efficacement dans un environnement technologique est un art qui va bien au-delà de la maîtrise technique.

Contexte
Dans mes différentes missions, j'ai régulièrement été confronté au défi de faire comprendre des concepts techniques à des publics non-techniques : managers, clients, collaborateurs de différents services.

Approche
Ma stratégie de communication repose sur plusieurs piliers :
- Écoute active
- Adaptation du langage
- Utilisation de métaphores et analogies

Exemples Concrets
- Expliquer Kubernetes comme un "chef d'orchestre de conteneurs"
- Comparer une architecture microservices à une entreprise où chaque employé a une mission précise
- Traduire des concepts techniques en bénéfices business

Techniques de Vulgarisation
- Utilisation de schémas et visualisations
- Storytelling technique
- Exemples concrets et pragmatiques

Impact
- Amélioration de la compréhension inter-équipes
- Réduction des malentendus
- Facilitation des prises de décision

Conclusion
La communication technique n'est pas un skill annexe, c'est un levier crucial de transformation et d'alignement organisationnel.`,
      competences: ["Communication", "Vulgarisation", "Pédagogie", "Adaptabilité"],
      categorie: "Communication"
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
