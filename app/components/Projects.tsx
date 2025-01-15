"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Réalisation {
  id: number
  titre: string
  resumeCourt: string
  contenuComplet: string
  competences: string[]
  categorie: "Data" | "Python" | "Openmetadata" | "optimisaiton & Qualité"
}

export default function Realisations() {
  const [selectedRealisation, setSelectedRealisation] = useState<number | null>(null)

  const realisations: Realisation[] = [
    {
      id: 1,
      titre: "Optimisation de la qualité des données avec Apache Spark",
      resumeCourt: "Optimisation et nettoyage des données grâce à Apache Spark pour garantir leur qualité et fiabilité.",
      contenuComplet: `Optimisation de la qualité des données avec Apache Spark.

L’objectif principal de ce projet était de créer un pipeline de traitement de données massif, ca- pable de garantir la qualité et l'intégrité des données tout au long de leur parcours. Nous avons utilisé Apache Spark, une plateforme open-source pour le traitement distribué de données à grande échelle, et MinIO, une solution de stockage d'objets compatible avec Amazon S3, pour le stockage sécurisé et distribué des données.
Ce pipeline devait répondre à des exigences de performance élevées, tout en intégrant des contrôles de qualité stricts comme la validation des types de colonnes, la gestion des valeurs nulles, et l’actualisation des métadonnées. L’idée était de transformer les données JSON de manière rapide et fiable pour une utilisation opérationnelle par l’entreprise.
Qu'est-ce qu'Apache Spark ?
Apache Spark est une plateforme de calcul distribuée qui permet de traiter d’énormes volumes de données de manière très rapide. Contrairement à d’autres solutions comme Hadoop, Spark stocke les données en mémoire, ce qui permet d’accélérer le traitement des données répéti- tives et de réduire considérablement les temps d’exécution. C’est une technologie clé dans les environnements big data où la vitesse est cruciale.
Dans ce projet, Spark a été utilisé pour orchestrer le traitement des données, en effectuant des transformations complexes, comme le filtrage, l’agrégation et la validation, sur des datasets massifs. Sa capacité à gérer des tâches parallèles a permis d’accélérer les calculs nécessaires pour vérifier la qualité des données.
Qu'est-ce que MinIO ?
MinIO est une solution de stockage d'objets compatible avec l’API d'Amazon S3, ce qui le rend idéal pour les environnements cloud natifs. Ce système de stockage distribué est conçu pour gérer des données non structurées, telles que les fichiers JSON utilisés dans notre pipe- line. L’avantage de MinIO réside dans sa performance, sa sécurité, et son architecture résili- ente qui permet de gérer d'énormes volumes de données de manière efficace.
Problèmes rencontrés et solutions
Le premier défi était de maintenir des performances élevées tout en traitant des volumes mas- sifs de données. Spark, bien que rapide, nécessite une bonne optimisation des ressources pour fonctionner à son plein potentiel. J'ai donc travaillé sur l’optimisation des configurations de Spark, notamment en ajustant la taille des partitions et en contrôlant la mémoire allouée aux tâches pour éviter les ralentissements.
Le second défi concernait la gestion sécurisée des données lors des transferts entre les phases de traitement. MinIO, grâce à ses mécanismes de cryptage et à son architecture distribuée, a joué un rôle essentiel dans la sécurisation des données à chaque étape.
Un moment marquant du projet fut la collaboration avec des ingénieurs spécialisés en Spark, qui m'ont aidé à surmonter certains obstacles liés à l’optimisation. Grâce à cette collaboration, nous avons pu maintenir des performances optimales malgré la taille importante des datasets.
Avantages pour l'entreprise
Grâce à ce projet, l’entreprise bénéficie maintenant d’un pipeline de traitement de données fi- able et performant. La qualité des données est assurée, ce qui réduit les erreurs dans les pro- cessus décisionnels et améliore la confiance des utilisateurs dans les données qu'ils utilisent. La rapidité du traitement permet également une mise à jour en temps réel des données cri- tiques.
Vision future
Ce projet a ouvert la voie à de nouvelles initiatives pour optimiser davantage la gestion des données au sein de l’entreprise. Je prévois d'explorer l'intégration d’outils comme Apache Kafka pour gérer les flux de données en temps réel et Apache Airflow pour automatiser la gestion des workflows. La prochaine étape sera d’étendre ce pipeline pour inclure des fonc- tionnalités de machine learning, qui permettront d'enrichir les données avec des prédictions et des insights automatisés.`,

      competences: ["Data", "Apache spark", "Postgresql", "S3", "Nifi"],
      categorie: "Data"
    },
    {
      id: 2,
      titre: "Gestion privée des métadonnées : Un projet sécurisé avec OpenMetadata",
      resumeCourt: "Gestion sécurisée des métadonnées avec OpenMetadata, garantissant confidentialité et contrôle en environnement privé.",
      contenuComplet: `Gestion privée des métadonnées : Un projet sécurisé avec OpenMetadata.

Le projet "Secure On-Premise Metadata Ingestion" avait pour but de démontrer l’utilisation de OpenMetadata pour la gestion sécurisée des métadonnées au sein d’une infrastructure privée. L’idée était d'implémenter une solution qui permette aux entreprises de cataloguer leurs données tout en garantissant que ces informations restent entièrement sous leur contrôle, sans faire appel à des services externes.
Deux principaux connecteurs ont été utilisés dans ce projet : PostgreSQL et Hive. Ces con- necteurs ont permis de lier les sources de données internes à OpenMetadata pour la collecte et la gestion des métadonnées. Le projet a mis l’accent sur la confidentialité des données et leur sécurité sur site, en évitant toute transmission vers des infrastructures cloud ou des services tiers.
Qu'est-ce qu'OpenMetadata ?
Une plateforme open-source qui permet de centraliser et de gérer les métadonnées à travers différents systèmes de données. Elle offre des fonctionnalités telles que la gestion de la qualité des données, la gouvernance, et la traçabilité complète des données via
des connecteurs qui s'intègrent à des bases de données, des services de stockage et des outils analytiques.
Dans ce projet, OpenMetadata a été utilisé pour organiser, sécuriser et enrichir les métadon- nées provenant de bases de données locales comme PostgreSQL et Hive. Son architecture flexible a facilité l’intégration de ces sources tout en garantissant que les métadonnées restent exclusivement dans l’infrastructure privée.
Problèmes rencontrés
Le principal défi de ce projet était de garantir que toutes les opérations d’ingestion de métadonnées se déroulent exclusivement sur site. Cela impliquait de configurer et d’opti- miser les connecteurs pour s’assurer qu’aucune donnée ne soit partagée avec des services cloud ou externes, ce qui aurait pu compromettre la sécurité.
Un autre aspect difficile était de maintenir la performance du pipeline d'ingestion, notam- ment avec Hive, qui est souvent utilisé pour gérer des données massives dans des envi- ronnements distribués. Il fallait s’assurer que les métadonnées étaient collectées et traitées en temps réel, tout en respectant les règles de confidentialité et de conformité.
Solutions et résultats
Pour relever ces défis, j'ai configuré les connecteurs OpenMetadata pour PostgreSQL et Hive de manière à ce qu'ils fonctionnent uniquement au sein de l’infrastructure privée de l’entre- prise. Cela a permis de garantir que toutes les métadonnées, ainsi que leur ingestion et ges- tion, restent sous le contrôle total de l'entreprise.
En ce qui concerne la sécurité, des politiques strictes de gestion des accès ont été mises en place pour restreindre l’accès aux données sensibles. OpenMetadata a également été configuré pour générer des logs détaillés sur les activités d'ingestion, permettant une surveillance com- plète des métadonnées tout au long du processus.
Avantages pour l'entreprise
L’un des plus grands avantages de ce projet est la maîtrise complète de l’ingestion des métadonnées sur site. Grâce à cette solution, l’entreprise peut cataloguer ses données tout en s’assurant que toutes les opérations se déroulent en interne, garantissant ainsi une confidenti- alité totale et une conformité avec les réglementations locales sur la protection des données.
Cette approche élimine également le besoin de dépendre de services cloud externes, ce qui ré- duit les risques de violations de données et les coûts liés à l’utilisation d’infrastructures cloud.
Vision future
Dans le futur, je vois des opportunités d’améliorer encore cette solution en intégrant des outils de machine learning pour enrichir automatiquement les métadonnées collectées. L’ajout de fonctionnalités de surveillance et d’audit automatisés permettrait également d’améliorer la sécurité des données en temps réel, en détectant toute activité suspecte liée aux métadonnées.
Je compte également explorer l’utilisation de solutions d’authentification renforcée comme Keycloak pour garantir que seuls les utilisateurs autorisés puissent interagir avec le système OpenMetadata. Cela renforcerait encore davantage la sécurité des infrastructures locales..`,

      competences: ["Openmetadata", "S3", "Nifi", "Posmtna", "Automatisation"],
      categorie: "Catalogue de données"
    },
    {
      id: 3,
      titre: "Système de gestion des utilisateurs et des accès pour une plateforme interne d’entreprise",
      resumeCourt: "Mise en place d'un système de gestion des accès avec la solution  opensource Keycloak.",
      contenuComplet: `Système de gestion des utilisateurs et des accès pour une plateforme interne d’entreprise.

Un de nos clients, une entreprise d’environ 200 employés, souhaitait mettre en place un système centralisé et sécurisé pour la gestion des utilisateurs et des accès sur leur plateforme interne. L’objectif était de simplifier la gestion des identités, de garantir une sécurité optimale, et d’offrir une expérience utilisateur fluide.

J’ai proposé d’utiliser Keycloak, une solution open-source spécialisée dans la gestion des identités et des accès. Ce choix répondait parfaitement à leurs besoins grâce à des fonctionnalités comme l’authentification unique (SSO) et une gestion avancée des rôles.
Étapes de réalisation

1. Analyse des besoins et planification
Lors de la première semaine, j’ai collaboré avec l’équipe du client pour définir les besoins. Trois rôles principaux ont été établis : administrateurs, responsables d’équipe et employés, chacun ayant des permissions spécifiques. Une évaluation de l’infrastructure existante a permis d’assurer une intégration fluide de Keycloak.

2. Installation et configuration de Keycloak
J’ai installé Keycloak sur un serveur dédié, configuré les rôles et les groupes d’utilisateurs, et personnalisé l’interface pour refléter l’identité visuelle de l’entreprise. Des politiques de sécurité robustes ont été mises en place, incluant la double authentification et l’expiration des mots de passe.

3. Migration des utilisateurs
La migration des 200 utilisateurs existants a été effectuée pendant un week-end pour minimiser l’impact sur les opérations. Chaque profil utilisateur, avec ses rôles et permissions, a été importé avec soin. Une vérification rigoureuse a garanti l’intégrité des données.

4. Tests et ajustements
Des tests intensifs ont été menés avec un groupe pilote de 5 employés. Leurs retours ont permis de peaufiner le système, notamment les notifications d’accès refusé et les messages d’erreur, pour une expérience utilisateur optimale.

5. Formation et déploiement
Une session de formation a été organisée pour les administrateurs afin de leur permettre de gérer les utilisateurs et les permissions de manière autonome. Le système a ensuite été déployé sans interruption des activités.
Résultats

Le système est pleinement opérationnel et offre une gestion centralisée des accès, renforçant la sécurité tout en simplifiant les processus internes. Les employés apprécient la simplicité d’utilisation, et l’équipe technique bénéficie d’une interface intuitive pour administrer les utilisateurs.
Vision future

À l’avenir, ce système pourrait être amélioré par l’intégration d’outils d’analyse pour surveiller en temps réel les connexions et détecter les comportements suspects. L’automatisation des audits de sécurité et l’ajout de tableaux de bord interactifs pour les administrateurs permettraient également d’enrichir les fonctionnalités et d’optimiser la gestion des utilisateurs.

Ce projet a été une expérience enrichissante qui m’a permis d’approfondir mes compétences en gestion des identités et en sécurité des accès, tout en travaillant de manière collaborative pour répondre aux besoins spécifiques du client..`,
      competences: ["Keycloack", "OAauth", "postgresql", "S3", "APIrest", "SMTP"],
      categorie: "SSO"
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
