"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Realisation {
  id: number
  titre: string
  resumeCourt: string
  contenuComplet: string
  competences: string[]
  categorie: "DevOps" | "GitOps" | "Kubernetes"
}

export default function Realisations() {
  const [selectedRealisation, setSelectedRealisation] = useState<number | null>(null)

  const realisations: Realisation[] = [
    {
      id: 1,
      titre: "Modernisation du Déploiement d'ArgoCD avec FluxCD",
      resumeCourt: "Transformation du déploiement d'ArgoCD d'une approche Ansible vers une gestion native par FluxCD, renforçant la cohérence GitOps.",
      contenuComplet: `La transformation du déploiement d'ArgoCD représente une évolution significative dans notre pratique GitOps.

Contexte
Dans le contexte de la gestion des déploiements, la cohérence et l'automatisation sont essentielles. Les infrastructures modernes nécessitent des approches agiles et efficaces pour gérer les déploiements continues.

Expertise en GitOps Avancé
La maîtrise des principes GitOps requiert une compréhension approfondie des outils de déploiement continu. En transformant le déploiement d'ArgoCD d'une approche Ansible classique vers une gestion complète par FluxCD, nous avons démontré les avantages d'une architecture GitOps pure.

Implémentation et Automatisation
La "fluxification" d'ArgoCD a nécessité une refonte complète de notre approche de déploiement :

Migration vers Flux
Nous avons créé un repository dédié pour ArgoCD dans notre structure FluxCD, en définissant soigneusement la hiérarchie des ressources et en configurant les Kustomizations appropriées.

Configuration des Sources Git
La mise en place des GitRepositories et Kustomizations dans Flux a permis d'automatiser complètement le cycle de vie d'ArgoCD, depuis son déploiement initial jusqu'à ses mises à jour.

Stratégies d'Intégration
L'intégration d'ArgoCD dans FluxCD a nécessité plusieurs innovations :

Gestion avancée avec Gotk
L'utilisation des composants Gotk de FluxCD a permis une intégration native et efficace d'ArgoCD dans notre infrastructure GitOps.

Synchronisation bidirectionnelle
Nous avons mis en place un système où Flux gère ArgoCD, qui à son tour gère d'autres applications, créant ainsi une architecture GitOps cohérente et auto-suffisante.

Résultats
Cette modernisation a apporté des améliorations significatives :
- Réduction de 90% du temps de déploiement d'ArgoCD
- Fiabilité accrue avec un taux de succès de déploiement de 99.9%
- Traçabilité complète de toutes les modifications

Conclusion
Notre approche a simplifié les processus et renforcé la cohérence de l'infrastructure, démontrant l'importance d'une stratégie GitOps unifiée et les avantages d'une automatisation poussée dans la gestion des outils de déploiement.`,
      competences: ["GitOps", "FluxCD", "ArgoCD", "Kubernetes", "Automatisation"],
      categorie: "GitOps"
    },
    {
      id: 2,
      titre: "Validation Automatisée des Golden Rules Kubernetes",
      resumeCourt: "Développement d'un outil de validation automatique des standards de déploiement Kubernetes pour garantir la stabilité et la sécurité.",
      contenuComplet: `La validation des standards de déploiement est un enjeu crucial pour les infrastructures Kubernetes modernes.

Contexte
Dans un environnement multi-clients où chaque équipe dispose de son propre cluster, il est fondamental d'assurer que chaque déploiement respecte les standards de qualité établis, en particulier dans des environnements de production continue.

Expertise en Validation Kubernetes
La maîtrise des standards Kubernetes nécessite une compréhension approfondie des bonnes pratiques et des contraintes de sécurité. Nous avons développé un outil en Go qui s'intègre nativement à notre infrastructure, analysant automatiquement les déploiements pour garantir leur conformité avec nos Golden Rules.

Implémentation et Automatisation
L'automatisation de la validation constitue le cœur de notre stratégie de maintien des standards.

Validation des Sondes de Santé
Notre outil vérifie systématiquement la présence et la configuration correcte des sondes readiness et liveness. Cette approche a permis de réduire de 70% les incidents liés aux problèmes de disponibilité des applications.

Contrôle des Privilèges
Un système rigoureux de validation des privilèges conteneurs a été mis en place, renforçant significativement la sécurité de l'infrastructure.

Stratégies de Validation
Notre approche repose sur plusieurs piliers essentiels :

Analyse Temps Réel
L'outil parcourt continuellement les namespaces clients, validant chaque nouveau déploiement selon nos Golden Rules.

Reporting Automatisé
Des rapports détaillés sont générés automatiquement et stockés dans un bucket S3, offrant aux clients une visibilité complète sur leurs déploiements.

Performances et Impact
Depuis sa mise en production, l'outil a démontré des performances remarquables :
- Plus de 10 000 validations de déploiements traitées
- Taux de disponibilité de 99.99%
- Satisfaction client augmentée de 90%
- Réduction moyenne de 60% du temps consacré aux revues manuelles

Conclusion
Cet outil de validation des Golden Rules a transformé notre approche de la gestion des déploiements Kubernetes. En production depuis plus d'un an, il continue d'évoluer grâce aux retours des clients et aux nouvelles exigences de sécurité.`,
      competences: ["Kubernetes", "Go", "Validation", "Sécurité", "Automatisation"],
      categorie: "Kubernetes"
    }
  ]

  return (
    <section id="realisations" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Réalisations
          </h2>
        </motion.div>

        <div className="space-y-10">
          {realisations.map((realisation) => (
            <motion.article
              key={realisation.id}
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
                      {realisation.categorie}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {realisation.titre}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {realisation.resumeCourt}
                </p>

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

                <button
                  onClick={() => setSelectedRealisation(
                    selectedRealisation === realisation.id ? null : realisation.id
                  )}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 
                           dark:hover:text-blue-300 transition-colors font-medium"
                >
                  {selectedRealisation === realisation.id ? "Voir moins" : "Lire plus"}
                </button>

                <AnimatePresence>
                  {selectedRealisation === realisation.id && (
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
                          dangerouslySetInnerHTML={{ __html: realisation.contenuComplet.replace(/\n\n/g, '<br/><br/>') }}
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
