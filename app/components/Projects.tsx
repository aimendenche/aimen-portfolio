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
      contenuComplet: `**Optimisation de la qualité des données avec Apache Spark**

## Contexte
Lors de mon alternance, j'ai collaboré avec une startup en pleine expansion qui travaillait sur la création d'un catalogue de données. L'objectif principal était de développer un pipeline capable de traiter des données massives tout en garantissant leur qualité, leur intégrité et leur sécurité.

## Les étapes du projet

### Analyse des besoins
Dès le départ, nous avons défini les attentes de la startup :
- Valider les types de données pour éviter les erreurs en aval.
- Gérer les valeurs nulles afin de garantir la cohérence des données.
- Actualiser les métadonnées en temps réel pour offrir un suivi précis.

### Mise en place technique
- Apache Spark : J'ai configuré Spark pour traiter les datasets massifs, en réalisant des transformations comme le filtrage, l'agrégation et la validation des données.
- MinIO : J'ai intégré MinIO comme solution de stockage compatible S3, permettant une gestion sécurisée des fichiers JSON et une optimisation des transferts.

### Collaboration avec des experts
J'ai eu la chance de travailler avec :
- Un architecte big data, qui m'a aidé à optimiser Spark en ajustant la taille des partitions et en configurant correctement la gestion de la mémoire.
- Un ingénieur DevOps, qui m'a guidé dans la configuration de MinIO, en particulier pour garantir la sécurité des données grâce à des mécanismes de chiffrement et une architecture distribuée.

### Optimisation et validation
Une fois les configurations mises en place, nous avons réalisé des tests intensifs pour identifier les points de friction et ajuster les performances. Ces tests ont permis d'assurer la fluidité du pipeline, même sur des volumes importants de données.

## Problèmes rencontrés et solutions

### Défi 1 : Performances Spark
Le traitement des données volumineuses nécessitait une gestion fine des ressources. Grâce aux conseils de l'architecte big data, nous avons ajusté les partitions pour équilibrer la charge de travail et éviter les ralentissements.

### Défi 2 : Sécurisation des données
Pendant les transferts, la sécurité des fichiers JSON était primordiale. MinIO, avec ses mécanismes de chiffrement, a permis de garantir cette sécurité tout en maintenant des performances élevées.

## Résultats pour la startup
Grâce à ce projet :
- Le pipeline assure maintenant une qualité des données optimale, réduisant les erreurs dans le catalogue.
- La rapidité du traitement a permis de gagner du temps précieux pour la mise à jour des données critiques.
- Les données sont stockées de manière sécurisée, renforçant la confiance des utilisateurs.

## Ce que j'ai appris
- Maîtrise technique : J'ai perfectionné mes compétences en big data, notamment sur Apache Spark et MinIO.
- Collaboration interdisciplinaire : Travailler avec des experts m'a appris l'importance des échanges pour résoudre des problèmes complexes.
- Gestion des défis techniques : J'ai découvert comment optimiser des outils puissants pour répondre à des besoins spécifiques.

## Vision pour l'avenir
Fort de cette expérience, je souhaite :
- Explorer Apache Kafka pour la gestion des flux en temps réel.
- Automatiser davantage avec Apache Airflow.
- Intégrer des modèles de machine learning pour enrichir les données et apporter des insights prédictifs.

Ce projet m'a non seulement permis de contribuer à un produit innovant, mais aussi de développer des compétences clés pour continuer à évoluer dans le domaine de la gestion de données.`,
      competences: ["Data", "Apache spark", "Postgresql", "S3", "Nifi"],
      categorie: "Data"
    },
    {
      id: 2,
      titre: "Gestion privée des métadonnées : Un projet sécurisé avec OpenMetadata",
      resumeCourt: "Gestion sécurisée des métadonnées avec OpenMetadata, garantissant confidentialité et contrôle en environnement privé.",
      contenuComplet: `**Gestion privée des métadonnées : Un projet sécurisé avec OpenMetadata**

## Contexte
Lors de ce projet intitulé Secure On-Premise Metadata Ingestion, j'ai travaillé sur une solution permettant à une entreprise de cataloguer et gérer ses métadonnées tout en assurant une maîtrise totale de leur sécurité.

## Qu'est-ce qu'OpenMetadata ?
OpenMetadata est une plateforme open-source qui centralise la gestion des métadonnées. Elle offre des fonctionnalités comme :
- La traçabilité complète des données.
- La gestion de la qualité et de la gouvernance des données.
- Des connecteurs pour bases de données, services de stockage et outils analytiques.

## Étapes du projet

### Analyse des besoins de l'entreprise
- Identifier les bases de données internes à connecter à OpenMetadata.
- Garantir que toutes les opérations se déroulent exclusivement sur site.
- Mettre en place des contrôles stricts d'accès pour assurer la sécurité des métadonnées sensibles.

### Mise en place technique
- Connecteurs PostgreSQL et Hive : Configuration pour collecter les métadonnées de manière sécurisée.
- Optimisation d'OpenMetadata : Adaptation pour une intégration parfaite à l'infrastructure existante.

### Sécurisation et conformité
- Mise en place de politiques d'accès restrictives.
- Configuration de logs détaillés pour une surveillance en temps réel.

### Tests et validation
Des tests approfondis pour vérifier la collecte et les performances des métadonnées.

## Problèmes rencontrés et solutions

### Défi : Ingestion entièrement sur site
Modification des connecteurs OpenMetadata pour un fonctionnement exclusivement local.

### Défi : Performances avec Hive
Optimisation des configurations pour assurer un traitement fluide des métadonnées.

## Résultats pour l'entreprise
- Maîtrise totale des données
- Indépendance vis-à-vis du cloud
- Traçabilité renforcée

## Ce que j'ai appris
- Maîtrise d'OpenMetadata
- Sécurisation des données
- Gestion de la performance

## Vision pour l'avenir
- Automatisation et machine learning
- Renforcement de la sécurité
- Audit en temps réel

Ce projet m'a offert une expérience riche en matière de gestion de métadonnées.`,
      competences: ["Openmetadata", "S3", "Nifi", "Posmtna", "Automatisation"],
      categorie: "Catalogue de données"
    },
    {
      id: 3,
      titre: "Système de gestion des utilisateurs et des accès pour une plateforme interne d'entreprise",
      resumeCourt: "Mise en place d'un système de gestion des accès avec la solution  opensource Keycloak.",
      contenuComplet: `**Système de gestion des utilisateurs et des accès pour une plateforme interne d'entreprise**

## Contexte
Un de nos clients, une entreprise de taille moyenne avec environ 200 employés, souhaitait centraliser la gestion des identités et des accès sur leur plateforme interne.

## Solution : Keycloak
Pour répondre à ce besoin, j'ai recommandé Keycloak, une solution open-source spécialisée dans la gestion des identités et des accès.

## Étapes de réalisation

### Analyse des besoins et planification
Trois rôles principaux ont été établis :
- Administrateurs : Gestion complète des utilisateurs et des permissions.
- Responsables d'équipe : Gestion des accès de leur propre équipe.
- Employés : Accès limité aux outils nécessaires à leurs fonctions.

### Installation et configuration de Keycloak
- Configuration des rôles, groupes d'utilisateurs et permissions.
- Personnalisation de l'interface.
- Mise en place de politiques de sécurité robustes.

### Migration des utilisateurs
Migration des 200 utilisateurs existants pendant un week-end.

### Tests et ajustements
Un groupe pilote a testé le système pendant une semaine.

## Résultats
- Sécurité renforcée
- Simplification des processus
- Expérience utilisateur améliorée

## Ce que j'ai appris
- Gestion des identités et des accès
- Collaboration avec le client
- Adaptation des solutions de sécurité

## Vision future
- Surveillance en temps réel
- Automatisation des audits
- Tableaux de bord interactifs

Ce projet m'a permis d'approfondir mes compétences en gestion des identités et en sécurité des accès.`,
      competences: ["Keycloack", "OAauth", "postgresql", "S3", "APIrest", "SMTP"],
      categorie: "SSO"
    }
  ]

  const formatArticleContent = (content: string) => {
    return content
      .split('\n')
      .map((line) => {
        if (line.startsWith('**') && line.endsWith('**')) {
          return `<h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">${line.replace(/\*\*/g, '')}</h2>`;
        }
        if (line.startsWith('## ')) {
          return `<h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-4">${line.replace('## ', '')}</h3>`;
        }
        if (line.startsWith('### ')) {
          return `<h4 class="text-lg font-medium text-gray-700 dark:text-gray-300 mt-4 mb-2">${line.replace('### ', '')}</h4>`;
        }
        if (line.startsWith('- ')) {
          return `<li class="text-gray-600 dark:text-gray-300">${line.replace('- ', '')}</li>`;
        }
        if (line.trim() === '') {
          return '';
        }
        return `<p class="text-gray-600 dark:text-gray-300 mb-4">${line}</p>`;
      })
      .join('');
  }

  return (
    <section id="realisations" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
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
                      <div
                        className="prose prose-blue dark:prose-invert max-w-none"
                        dangerouslySetInnerHTML={{
                          __html: formatArticleContent(realisation.contenuComplet)
                        }}
                      />
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