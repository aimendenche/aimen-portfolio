"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface TechnicalSkill {
  id: number
  titre: string
  resumeCourt: string
  contenuComplet: string  // Le contenu complet de l'article
  competences: string[]
  categorie: "DevOps" | "Mobile" | "Cloud"
}

export default function TechnicalSkills() {
  const [selectedSkill, setSelectedSkill] = useState<number | null>(null)

  const technicalSkills: TechnicalSkill[] = [
    {
      id: 1,
      titre: "Performance Réseau pour Applications Mobiles",
      resumeCourt: "La performance réseau est un facteur critique pour offrir une expérience utilisateur optimale dans les applications mobiles.",
      contenuComplet: `La performance réseau est un facteur critique pour offrir une expérience utilisateur optimale dans les applications mobiles.
Dans un environnement où les utilisateurs attendent des temps de réponse rapides, il est essentiel d'optimiser l'utilisation du réseau pour garantir la fluidité et la réactivité des applications, en particulier sur des plateformes comme React Native, qui permet de cibler à la fois iOS et Android.

Expertise en Performance Réseau

La maîtrise des performances réseau passe par une compréhension approfondie des protocoles de communication, des latences et des temps de réponse. Par exemple, dans une application React Native que j'ai développée, j'ai optimisé l'utilisation des requêtes HTTP en utilisant des mécanismes tels que la compression des réponses et la gestion des erreurs pour minimiser l'impact des interruptions de réseau. Cela a permis de réduire les latences perçues 20% lors des transitions entre les écrans.

Optimisation des Appels Réseau

L'un des objectifs principaux dans une application mobile est de réduire le nombre d'appels réseau tout en garantissant une expérience fluide. Dans une application React Native, voici quelques techniques que j'ai mises en œuvre :

1. Mise en cache des données : En intégrant un système de cache côté client (par exemple avec AsyncStorage), j'ai permis à l'application de stocker localement les données fréquemment utilisées, réduisant ainsi le besoin d'effectuer des appels répétés au serveur, cette stratégie a permis de réduire de 40% le nombre de requêtes au serveur lors de l'utilisation d'une fonctionnalité spécifique.

2. Réduction des appels réseau : Dans un projet où l'application interrogeait fréquemment une API distante pour obtenir des informations utilisateur, j'ai implémenté une logique qui évitait de faire des appels inutiles. Par exemple, en utilisant un système de "debouncing" pour les appels de recherche en temps réel, j'ai limité les appels réseau à un par seconde, ce qui a amélioré de manière significative la réactivité de l'interface utilisateur tout en réduisant la charge serveur.

Stratégies d'Optimisation

Voici des stratégies spécifiques que j'ai appliquées pour améliorer la performance réseau des applications React Native :

- Compression des réponses réseau : En activant la compression des réponses côté serveur, j'ai réduit le volume de données transférées, ce qui a directement contribué à améliorer la vitesse de chargement dans l'application. Cela a été particulièrement utile lors du téléchargement de ressources multimédia lourdes.

- Lazy Loading et Code Splitting : J'ai utilisé des techniques de "lazy loading" et de "code splitting" dans le contexte de React Native pour ne charger que les ressources nécessaires au moment de l'utilisation. Par exemple, lors de l'accès à une section de l'application nécessitant des données spécifiques, le contenu n'était récupéré qu'à ce moment-là, évitant ainsi de charger des ressources inutiles dès le lancement de l'application.

Surveillance et Analyse

La surveillance continue des performances réseau est essentielle pour garantir la stabilité d'une application React Native.
En utilisant des outils comme Flipper et React Native Devtools, j'ai pu analyser en temps réel le comportement des requêtes réseau, détecter des goulets d'étranglement, et identifier les points de latence. Cela m'a permis d'ajuster dynamiquement les paramètres d'appel réseau et d'appliquer des corrections en temps réel.

Conclusion

Grâce à une combinaison de ces stratégies et à l'utilisation d'outils adaptés à React Native, j'ai pu optimiser la performance réseau des applications mobiles, assurant ainsi une expérience utilisateur fluide et réactive. Les techniques telles que la mise en cache et la compression des données sont des leviers puissants que j'ai appliqués avec succès dans mes projets.`,
      competences: ["React Native", "Performance", "Optimisation réseau", "Caching", "Monitoring"],
      categorie: "Mobile"
    },
    {
      id: 2,
      titre: "Administration et Orchestration Kubernetes",
      resumeCourt: "L'orchestration de conteneurs est un élément fondamental pour assurer la fiabilité et la scalabilité des applications modernes.",
      contenuComplet: `L'orchestration de conteneurs est un élément fondamental pour assurer la fiabilité et la scalabilité des applications modernes. Dans un environnement où la haute disponibilité est cruciale, il est essentiel de maîtriser l'administration Kubernetes pour garantir la stabilité des services, en particulier dans des infrastructures complexes gérant de multiples applications et environnements.

Expertise en Administration Kubernetes

La maîtrise de Kubernetes nécessite une compréhension approfondie de son architecture, de ses composants et de ses mécanismes de contrôle. Par exemple, dans une infrastructure multi-cluster que j'ai administrée, j'ai optimisé la configuration des control planes et des worker nodes en implémentant des stratégies de haute disponibilité et de répartition de charge. Cette optimisation a permis d'atteindre un taux de disponibilité de 99.99% sur l'ensemble de nos services critiques.

Optimisation des Ressources Cluster

L'un des objectifs principaux dans l'administration Kubernetes est d'optimiser l'utilisation des ressources tout en garantissant la stabilité. Voici quelques techniques que j'ai mises en œuvre :

1. Gestion avancée des resources requests/limits : En implémentant une stratégie fine de définition des ressources par pod, j'ai permis une meilleure utilisation de la capacité cluster, réduisant ainsi les coûts d'infrastructure de 30% tout en maintenant les performances optimales des applications.

2. Optimisation du scheduling : Dans un environnement où plusieurs équipes partageaient les ressources cluster, j'ai mis en place un système sophistiqué de node affinity et de taints/tolerations. Cette approche a permis d'optimiser le placement des charges de travail et d'améliorer de manière significative l'utilisation des ressources tout en respectant les contraintes de isolation.

Stratégies d'Administration

Voici des stratégies spécifiques que j'ai appliquées pour améliorer la gestion des clusters Kubernetes :

- Automatisation des déploiements : En développant des opérateurs Kubernetes personnalisés, j'ai automatisé les tâches d'administration récurrentes, ce qui a directement contribué à réduire les erreurs humaines et à accélérer les déploiements. Cette automatisation a été particulièrement efficace pour la gestion des mises à jour et des rollbacks.

- Gestion avancée de la configuration : J'ai implémenté une approche GitOps utilisant Flux CD pour la gestion des configurations, permettant un contrôle précis des déploiements et une traçabilité complète des changements. Cette méthode a permis de réduire de 60% le temps nécessaire aux déploiements tout en renforçant la fiabilité.

Surveillance et Analyse

La surveillance continue des clusters Kubernetes est cruciale pour maintenir la stabilité des environnements de production. En utilisant des outils comme Prometheus et Grafana, j'ai mis en place un système complet de monitoring qui permet de :
- Suivre en temps réel les métriques clés du cluster
- Détecter proactivement les anomalies
- Analyser les tendances d'utilisation des ressources
- Optimiser continuellement les performances

Cette approche m'a permis d'identifier et de résoudre les problèmes avant qu'ils n'impactent les utilisateurs finaux.

Conclusion

Grâce à la mise en place de ces stratégies d'administration Kubernetes et à l'utilisation d'outils spécialisés, j'ai pu garantir une gestion efficace et fiable des environnements conteneurisés. Les techniques d'automatisation et de monitoring avancé sont des éléments clés que j'ai utilisés avec succès pour maintenir des services hautement disponibles et performants.`,
      competences: ["Kubernetes", "Docker", "Prometheus", "Grafana", "GitOps", "FluxCD"],
      categorie: "DevOps"
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
                      <div className="prose prose-blue dark:prose-invert max-w-none">
                        <div
                          className="text-gray-600 dark:text-gray-300 whitespace-pre-line"
                          dangerouslySetInnerHTML={{ __html: skill.contenuComplet.replace(/\n\n/g, '<br/><br/>') }}
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
