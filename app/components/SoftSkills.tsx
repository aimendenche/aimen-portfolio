"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface TechnicalSkill {
  id: number
  titre: string
  resumeCourt: string
  contenuDetaille: {
    expertise: string
    optimisation: string
    strategies: string
    surveillance: string
    conclusion: string
  }
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
      contenuDetaille: {
        expertise: "La maîtrise des performances réseau passe par une compréhension approfondie des protocoles de communication, des latences et des temps de réponse. Par exemple, dans une application React Native que j'ai développée, j'ai optimisé l'utilisation des requêtes HTTP en utilisant des mécanismes tels que la compression des réponses et la gestion des erreurs pour minimiser l'impact des interruptions de réseau. Cela a permis de réduire les latences perçues 20% lors des transitions entre les écrans.",
        optimisation: "L'un des objectifs principaux dans une application mobile est de réduire le nombre d'appels réseau tout en garantissant une expérience fluide. Dans une application React Native, voici quelques techniques que j'ai mises en œuvre : 1. Mise en cache des données : En intégrant un système de cache côté client (par exemple avec AsyncStorage), j'ai permis à l'application de stocker localement les données fréquemment utilisées, réduisant ainsi le besoin d'effectuer des appels répétés au serveur, cette stratégie a permis de réduire de 40% le nombre de requêtes au serveur lors de l'utilisation d'une fonctionnalité spécifique. 2. Réduction des appels réseau : Dans un projet où l'application interrogeait fréquemment une API distante pour obtenir des informations utilisateur, j'ai implémenté une logique qui évitait de faire des appels inutiles.",
        strategies: "Voici des stratégies spécifiques que j'ai appliquées pour améliorer la performance réseau des applications React Native : Compression des réponses réseau, Lazy Loading et Code Splitting.",
        surveillance: "La surveillance continue des performances réseau est essentielle pour garantir la stabilité d'une application React Native. En utilisant des outils comme Flipper et React Native Devtools, j'ai pu analyser en temps réel le comportement des requêtes réseau, détecter des goulets d'étranglement, et identifier les points de latence.",
        conclusion: "Grâce à une combinaison de ces stratégies et à l'utilisation d'outils adaptés à React Native, j'ai pu optimiser la performance réseau des applications mobiles, assurant ainsi une expérience utilisateur fluide et réactive."
      },
      competences: ["React Native", "Performance", "Optimisation réseau", "Caching", "Monitoring"],
      categorie: "Mobile"
    },
    {
      id: 2,
      titre: "Administration Kubernetes et Orchestration de Conteneurs",
      resumeCourt: "L'administration Kubernetes nécessite une expertise approfondie pour garantir la stabilité et la performance des clusters en production.",
      contenuDetaille: {
        expertise: "En tant qu'administrateur Kubernetes, j'ai développé une expertise poussée dans la gestion de clusters multi-environnements. Ma compréhension approfondie de l'architecture Kubernetes, de ses composants et de ses mécanismes de fonctionnement m'a permis d'implémenter des solutions robustes et scalables.",
        optimisation: "J'ai mis en place des stratégies d'optimisation des ressources cluster, notamment à travers la configuration fine des requests et limits des pods, l'implémentation de politiques d'auto-scaling efficaces et la gestion intelligente du placement des workloads via les nodeSelectors et les taints/tolerations.",
        strategies: "Mes stratégies clés incluent la mise en place de monitoring avancé avec Prometheus et Grafana, l'implémentation de politiques de sécurité avec NetworkPolicies et PodSecurityPolicies, et l'automatisation des déploiements via des opérateurs personnalisés.",
        surveillance: "Le monitoring est au cœur de mon approche, avec un focus particulier sur la surveillance des métriques clés du cluster, la gestion proactive des alertes et l'analyse continue des performances pour identifier et résoudre les problèmes avant qu'ils n'impactent la production.",
        conclusion: "Mon expertise en administration Kubernetes m'a permis de maintenir des environnements hautement disponibles et performants, tout en assurant la sécurité et la scalabilité nécessaires aux applications modernes."
      },
      competences: ["Kubernetes", "Docker", "Helm", "Prometheus", "Grafana", "Infrastructure as Code"],
      categorie: "DevOps"
    },
    {
      id: 3,
      titre: "Sécurité et Compliance Kubernetes",
      resumeCourt: "La sécurité et la conformité des clusters Kubernetes sont essentielles pour protéger les applications et les données en production.",
      contenuDetaille: {
        expertise: "J'ai développé une expertise approfondie dans la sécurisation des clusters Kubernetes, en me concentrant sur l'implémentation des meilleures pratiques de sécurité et la conformité aux standards de l'industrie.",
        optimisation: "Mon approche de la sécurité inclut l'optimisation des configurations de sécurité à tous les niveaux : du cluster aux conteneurs individuels, en passant par la gestion des secrets et des accès.",
        strategies: "J'ai mis en place des stratégies de sécurité complètes incluant l'audit logging, la gestion des RBAC, l'implémentation de Network Policies, et l'utilisation d'outils de scan de vulnérabilités pour les conteneurs.",
        surveillance: "La surveillance continue de la sécurité est assurée par des outils spécialisés et des dashboards personnalisés, permettant une détection rapide des anomalies et des tentatives d'intrusion.",
        conclusion: "Cette approche globale de la sécurité m'a permis de maintenir un niveau élevé de protection tout en facilitant le développement et le déploiement continu des applications."
      },
      competences: ["Kubernetes Security", "RBAC", "Network Policies", "Security Scanning", "Compliance"],
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
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white mb-2">Expertise</h4>
                          <p className="text-gray-600 dark:text-gray-300">
                            {skill.contenuDetaille.expertise}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white mb-2">Optimisation</h4>
                          <p className="text-gray-600 dark:text-gray-300">
                            {skill.contenuDetaille.optimisation}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white mb-2">Stratégies</h4>
                          <p className="text-gray-600 dark:text-gray-300">
                            {skill.contenuDetaille.strategies}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white mb-2">Surveillance et Analyse</h4>
                          <p className="text-gray-600 dark:text-gray-300">
                            {skill.contenuDetaille.surveillance}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white mb-2">Conclusion</h4>
                          <p className="text-gray-600 dark:text-gray-300">
                            {skill.contenuDetaille.conclusion}
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

