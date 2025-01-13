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
      contenuComplet: `La Nécessité de l'Analyse Technologique

La capacité d'analyse technologique est un atout crucial dans le monde numérique en constante évolution. Ma dernière mission illustre parfaitement cette compétence stratégique.

Kubernetes vs OpenShift :

Lors d'un projet de transformation digitale, j'ai été chargé de comparer deux solutions majeures d'orchestration de conteneurs : Kubernetes et OpenShift. L'objectif était de trouver l'infrastructure la plus adaptée aux besoins spécifiques de l'entreprise.

Méthodologie :

Ma démarche a commencé par une définition rigoureuse des critères d'évaluation. J'ai identifié des paramètres clés tels que les fonctionnalités de déploiement, la gestion des ressources, les mécanismes de sécurité, les capacités de scalabilité et les coûts d'implémentation. Cette approche méthodique m'a permis de structurer une analyse objective et exhaustive.

Sources et Collecte d'Information :

La collecte d'informations a été cruciale. J'ai multiplié les sources : documentation officielle, études de cas, retours d'expérience d'utilisateurs et entretiens avec des experts techniques. Chaque source m'a apporté un éclairage différent, enrichissant ma compréhension des deux plateformes.


Les échanges avec les experts ont révélé des dimensions souvent négligées. La facilité d'intégration avec les systèmes existants, la qualité du support technique et l'adéquation avec l'écosystème technologique du client sont devenues des critères déterminants de mon analyse.

Construction d'une Matrice Comparative :

J'ai ensuite construit une matrice comparative détaillée, mettant en lumière les points forts et les limitations de chaque solution. Cette approche m'a permis de dépasser une simple comparaison technique pour proposer une recommandation stratégique alignée avec les objectifs business du client.


Ma recommandation finale a intégré des paramètres complexes : contraintes budgétaires, capacités de montée en charge, complexité d'implémentation et perspectives d'évolution technologique. L'objectif était de proposer une solution qui ne réponde pas seulement aux besoins actuels, mais anticipe les défis futurs.

Conclusion : 

Cette mission m'a permis de démontrer ma capacité à transformer des analyses techniques complexes en recommandations stratégiques concrètes, en plaçant les besoins réels du client au cœur de ma démarche.`,
      competences: ["Analyse comparative", "Évaluation technique", "Recherche", "Recommandation stratégique"],
      categorie: "Analyse"
    },
    {
      id: 3,
      titre: "Communication Technique et Vulgarisation",
      resumeCourt: "Transformer des concepts techniques complexes en récits compréhensibles pour des publics variés.",
      contenuComplet: `Au-Delà du Jargon Technique

La communication technique n'est pas un simple transfert d'informations, c'est un véritable art de transformation qui permet de rendre accessibles des concepts complexes.

Le Défi de la Vulgarisation

Au fil de mon parcours, j'ai régulièrement été confronté au défi de faire comprendre des concepts techniques à des publics non-techniques : managers, clients, collaborateurs de différents services. Chaque fois, j'ai vu la complexité technique devenir un obstacle à la compréhension mutuelle.

Ma stratégie de communication a toujours reposé sur trois piliers fondamentaux : l'écoute active, l'adaptation du langage et l'utilisation de métaphores éclairantes. L'objectif n'est jamais de paraître intelligent, mais de faire comprendre.

Techniques de Vulgarisation 

Les techniques de vulgarisation que j'ai développées vont au-delà du langage. J'utilise des schémas, des visualisations, et surtout des exemples pragmatiques qui résonnent avec l'expérience de mon interlocuteur. Le but est de créer un pont entre le monde technique et le monde opérationnel.

Impact et Bénéfices de la Communication

Les bénéfices de cette approche sont multiples. J'ai observé une amélioration significative de la compréhension inter-équipes, une réduction des malentendus et une facilitation des prises de décision. Quand les techniciens et les décideurs parlent le même langage, la magie opère.

Conclusion : 

Plus qu'une compétence, je considère la communication technique comme un véritable levier de transformation organisationnelle. C'est l'art de transformer la complexité technique en opportunité de collaboration et d'innovation.`,
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
