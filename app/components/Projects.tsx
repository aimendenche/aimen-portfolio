"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Realisation {
  id: number
  titre: string
  resumeCourt: string
  contenuComplet: string
  competences: string[]
  categorie: "Data" | "Python" | "Openmetadata" | "optimisaiton & Qualité" | "Catalogue de données" | "SSO"
}

export default function Realisations() {
  const [selectedRealisation, setSelectedRealisation] = useState<number | null>(null)

  const realisations: Realisation[] = [
    {
      id: 1,
      titre: "Optimisation de la qualité des données avec Apache Spark",
      resumeCourt: "Optimisation et nettoyage des données grâce à Apache Spark pour garantir leur qualité et fiabilité.",
      contenuComplet: `Optimisation de la qualité des données avec Apache Spark.

Contexte
Lors de mon alternance, j’ai collaboré avec une startup en pleine expansion qui travaillait sur la création d’un catalogue de données. L’objectif principal était de développer un pipeline capable de traiter des données massives tout en garantissant leur qualité, leur intégrité et leur sécurité. Ce pipeline devait être suffisamment robuste pour répondre à des exigences élevées de performance, car il s’agissait d’un élément clé de leur stratégie de croissance.

Les étapes du projet

    Analyse des besoins
    Dès le départ, nous avons défini les attentes de la startup. Le pipeline devait :
        Valider les types de données pour éviter les erreurs en aval.
        Gérer les valeurs nulles afin de garantir la cohérence des données.
        Actualiser les métadonnées en temps réel pour offrir un suivi précis.

    Mise en place technique
        Apache Spark : J’ai configuré Spark pour traiter les datasets massifs, en réalisant des transformations comme le filtrage, l’agrégation et la validation des données.
        MinIO : J’ai intégré MinIO comme solution de stockage compatible S3, permettant une gestion sécurisée des fichiers JSON et une optimisation des transferts.

    Collaboration avec des experts
    J’ai eu la chance de travailler avec :
        Un architecte big data, qui m’a aidé à optimiser Spark en ajustant la taille des partitions et en configurant correctement la gestion de la mémoire.
        Un ingénieur DevOps, qui m’a guidé dans la configuration de MinIO, en particulier pour garantir la sécurité des données grâce à des mécanismes de chiffrement et une architecture distribuée.

    Optimisation et validation
    Une fois les configurations mises en place, nous avons réalisé des tests intensifs pour identifier les points de friction et ajuster les performances. Ces tests ont permis d’assurer la fluidité du pipeline, même sur des volumes importants de données.

Problèmes rencontrés et solutions

    Défi 1 : Performances Spark
    Le traitement des données volumineuses nécessitait une gestion fine des ressources. Grâce aux conseils de l’architecte big data, nous avons ajusté les partitions pour équilibrer la charge de travail et éviter les ralentissements.
    Défi 2 : Sécurisation des données
    Pendant les transferts, la sécurité des fichiers JSON était primordiale. MinIO, avec ses mécanismes de chiffrement, a permis de garantir cette sécurité tout en maintenant des performances élevées.

Résultats pour la startup
Grâce à ce projet :

    Le pipeline assure maintenant une qualité des données optimale, réduisant les erreurs dans le catalogue.
    La rapidité du traitement a permis de gagner du temps précieux pour la mise à jour des données critiques.
    Les données sont stockées de manière sécurisée, renforçant la confiance des utilisateurs.

Ce que j’ai appris

    Maîtrise technique : J’ai perfectionné mes compétences en big data, notamment sur Apache Spark et MinIO.
    Collaboration interdisciplinaire : Travailler avec des experts m’a appris l’importance des échanges pour résoudre des problèmes complexes.
    Gestion des défis techniques : J’ai découvert comment optimiser des outils puissants pour répondre à des besoins spécifiques.

Vision pour l’avenir
Fort de cette expérience, je souhaite :

    Explorer Apache Kafka pour la gestion des flux en temps réel.
    Automatiser davantage avec Apache Airflow.
    Intégrer des modèles de machine learning pour enrichir les données et apporter des insights prédictifs.

Ce projet m’a non seulement permis de contribuer à un produit innovant, mais aussi de développer des compétences clés pour continuer à évoluer dans le domaine de la gestion de données.`,

      competences: ["Data", "Apache spark", "Postgresql", "S3", "Nifi"],
      categorie: "Data"
    },
    {
      id: 2,
      titre: "Gestion privée des métadonnées : Un projet sécurisé avec OpenMetadata",
      resumeCourt: "Gestion sécurisée des métadonnées avec OpenMetadata, garantissant confidentialité et contrôle en environnement privé.",
      contenuComplet: `Gestion privée des métadonnées : Un projet sécurisé avec OpenMetadata.

Contexte
Lors de ce projet intitulé Secure On-Premise Metadata Ingestion, j’ai travaillé sur une solution permettant à une entreprise de cataloguer et gérer ses métadonnées tout en assurant une maîtrise totale de leur sécurité. L’objectif principal était de démontrer comment utiliser OpenMetadata pour collecter, organiser et sécuriser les métadonnées au sein d’une infrastructure privée, sans recours à des services cloud ou tiers.

L’enjeu était de répondre à des exigences strictes de confidentialité, tout en maintenant la performance et l’efficacité des processus d’ingestion. Les connecteurs utilisés incluaient PostgreSQL et Hive, qui permettaient d’intégrer des bases de données locales à la plateforme OpenMetadata.

Qu'est-ce qu'OpenMetadata ?
OpenMetadata est une plateforme open-source qui centralise la gestion des métadonnées. Elle offre des fonctionnalités comme :

    La traçabilité complète des données.
    La gestion de la qualité et de la gouvernance des données.
    Des connecteurs pour bases de données, services de stockage et outils analytiques.

Dans ce projet, OpenMetadata a été configuré pour fonctionner exclusivement en local, permettant de cataloguer et enrichir les métadonnées tout en respectant les exigences de confidentialité de l’entreprise.

Étapes du projet

    Analyse des besoins de l’entreprise
        Identifier les bases de données internes à connecter à OpenMetadata.
        Garantir que toutes les opérations se déroulent exclusivement sur site.
        Mettre en place des contrôles stricts d’accès pour assurer la sécurité des métadonnées sensibles.

    Mise en place technique
        Connecteurs PostgreSQL et Hive : J’ai configuré ces connecteurs pour qu’ils collectent les métadonnées de manière sécurisée et performante.
        Optimisation d’OpenMetadata : J’ai adapté la plateforme pour qu’elle s’intègre parfaitement à l’infrastructure existante, tout en évitant toute dépendance à des services externes.

    Sécurisation et conformité
        Mise en place de politiques d’accès restrictives pour protéger les données sensibles.
        Configuration de logs détaillés permettant une surveillance en temps réel des activités d’ingestion et de gestion des métadonnées.

    Tests et validation
        Des tests ont été réalisés pour vérifier que les métadonnées étaient collectées correctement et que les performances du pipeline restaient optimales, même avec des volumes importants de données gérées via Hive.

Problèmes rencontrés et solutions apportées

    Défi : Garantir une ingestion entièrement sur site
    Pour s’assurer qu’aucune donnée ne soit partagée avec des services externes, j’ai modifié les connecteurs OpenMetadata afin qu’ils fonctionnent uniquement dans l’environnement local de l’entreprise.

    Défi : Maintenir des performances élevées avec Hive
    Hive, souvent utilisé pour gérer de grandes quantités de données, a présenté des défis en termes de temps de réponse. En optimisant les configurations et en réduisant les goulots d’étranglement, j’ai assuré un traitement fluide et rapide des métadonnées.

Résultats pour l’entreprise

    Maîtrise totale des données : L’ingestion et la gestion des métadonnées restent strictement internes, garantissant la confidentialité et la conformité avec les réglementations locales.
    Indépendance vis-à-vis du cloud : L’entreprise n’a plus besoin de dépendre de services externes, réduisant ainsi les risques de violations de données et les coûts liés à l’infrastructure cloud.
    Traçabilité renforcée : Avec OpenMetadata, chaque opération est surveillée, offrant une transparence totale dans la gestion des métadonnées.

Ce que j’ai appris

    Maîtrise d’OpenMetadata : Ce projet m’a permis d’approfondir mes connaissances sur l’intégration de bases de données locales et l’optimisation des connecteurs.
    Sécurisation des données : J’ai acquis une expertise dans la mise en œuvre de politiques d’accès strictes et dans la surveillance des activités sensibles.
    Gestion de la performance : J’ai appris à optimiser des outils comme Hive pour garantir des résultats rapides même sur des datasets volumineux.

Vision pour l’avenir

    Automatisation et machine learning : Enrichir les métadonnées avec des outils d’intelligence artificielle pour détecter automatiquement des anomalies ou générer des insights.
    Renforcement de la sécurité : Intégrer des solutions comme Keycloak pour une authentification renforcée et un contrôle d’accès encore plus précis.
    Audit en temps réel : Développer des outils de surveillance automatisés pour détecter et alerter en cas d’activité suspecte.

Ce projet m’a offert une expérience riche en matière de gestion de métadonnées et m’a préparé à relever des défis similaires dans des environnements complexes et exigeants`,

      competences: ["Openmetadata", "S3", "Nifi", "Posmtna", "Automatisation"],
      categorie: "Catalogue de données"
    },
    {
      id: 3,
      titre: "Système de gestion des utilisateurs et des accès pour une plateforme interne d’entreprise",
      resumeCourt: "Mise en place d'un système de gestion des accès avec la solution  opensource Keycloak.",
      contenuComplet: `Système de gestion des utilisateurs et des accès pour une plateforme interne d’entreprise.

Contexte
Un de nos clients, une entreprise de taille moyenne avec environ 200 employés, souhaitait centraliser la gestion des identités et des accès sur leur plateforme interne. Leur principal objectif était d'améliorer la sécurité, de simplifier les processus de gestion des utilisateurs, et d’offrir une expérience fluide pour les employés.

Pour répondre à ce besoin, j’ai recommandé l’utilisation de Keycloak, une solution open-source spécialisée dans la gestion des identités et des accès. Keycloak permet d'implémenter des fonctionnalités essentielles telles que l’authentification unique (SSO), la gestion des rôles, et la double authentification, tout en s’adaptant parfaitement aux besoins du client.

Étapes de réalisation

    Analyse des besoins et planification
    La première semaine a été consacrée à définir les attentes avec l’équipe du client. Trois rôles principaux ont été établis :
        Administrateurs : Gestion complète des utilisateurs et des permissions.
        Responsables d’équipe : Gestion des accès de leur propre équipe.
        Employés : Accès limité aux outils nécessaires à leurs fonctions.

    Une évaluation approfondie de l’infrastructure existante a permis de planifier une intégration fluide de Keycloak sans perturber les activités en cours.

    Installation et configuration de Keycloak
    Keycloak a été installé sur un serveur dédié. J’ai :
        Configuré les rôles, groupes d’utilisateurs et permissions spécifiques.
        Personnalisé l’interface pour refléter l’identité visuelle de l’entreprise.
        Mis en place des politiques de sécurité robustes, incluant la double authentification et des règles d’expiration de mots de passe.

    Migration des utilisateurs
    La migration des 200 utilisateurs existants a été réalisée pendant un week-end pour minimiser les interruptions. Chaque profil, avec ses rôles et permissions, a été importé avec soin. Une vérification post-migration a permis de garantir l’exactitude et l’intégrité des données.

    Tests et ajustements
    Un groupe pilote composé de cinq employés a testé le système pendant une semaine. Leurs retours ont permis :
        D’améliorer les notifications d’accès refusé.
        D’optimiser les messages d’erreur pour qu’ils soient plus clairs et informatifs.

    Formation et déploiement
    J’ai animé une session de formation pour les administrateurs afin de leur permettre de gérer le système en toute autonomie. Le déploiement a été effectué sans interruption des opérations quotidiennes.

Résultats

    Sécurité renforcée : Le système centralisé avec double authentification réduit considérablement les risques d’accès non autorisé.
    Simplification des processus : Les employés peuvent se connecter via SSO, tandis que les administrateurs disposent d’une interface intuitive pour gérer les utilisateurs.
    Expérience utilisateur améliorée : Les retours des employés ont été très positifs, notamment sur la simplicité d’utilisation et la personnalisation de l’interface.

Vision future

    Surveillance en temps réel : Ajouter des outils d’analyse pour détecter les comportements suspects et surveiller les connexions en continu.
    Automatisation des audits : Intégrer des fonctionnalités pour générer automatiquement des rapports de sécurité.
    Tableaux de bord interactifs : Fournir aux administrateurs une vue d’ensemble en temps réel des activités des utilisateurs pour une gestion encore plus efficace.

Ce que j’ai appris
Ce projet m’a permis d’approfondir mes compétences en gestion des identités et en sécurité des accès. J’ai particulièrement apprécié la collaboration avec le client, qui a permis d'adapter précisément la solution à leurs besoins spécifiques. C’était une expérience enrichissante qui m’a également donné envie d’explorer davantage les outils de gestion des identités et leur intégration avec d’autres solutions de sécurité.`,
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
