"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface TechnicalSkill {
  id: number
  titre: string
  resumeCourt: string
  contenuComplet: string  // Le contenu complet de l'article
  competences: string[]
  categorie: "Language de programmation" | "systèmes d'exploitation" | "ETL(Extract, Transform & Load)"
}

export default function TechnicalSkills() {
  const [selectedSkill, setSelectedSkill] = useState<number | null>(null)

  const technicalSkills: TechnicalSkill[] = [
    {
      id: 1,
      titre: "Python",
      resumeCourt: "Avec Python, on peut automatiser, analyser, développer et innover dans presque tous les domaines.",
      contenuComplet: `Introduction à Python
Introduction
Python est le langage de programmation qui a le plus marqué mon parcours en IT. Grâce à sa simplicité et sa polyvalence, il m'a permis de m’attaquer à une variété de projets, qu'il s'agisse de développement web, d'analyse de données ou encore d’automatisation. C’est un langage que j’utilise quotidiennement pour résoudre des problèmes concrets de manière élégante.

Ce que j'ai maîtrisé avec Python
Avec Python, j’ai acquis une solide maîtrise dans plusieurs domaines clés. En utilisant des frameworks comme Flask et Django, j’ai pu construire des applications web robustes et scalables. Par exemple, j'ai récemment développé une API avec Flask qui interagissait avec une base de données pour permettre à des utilisateurs d’accéder à des données en temps réel, le tout de manière sécurisée.

Dans le domaine de la data science, Python m'a permis de manipuler des données massives avec des bibliothèques comme Pandas et NumPy, où j'ai pu explorer, nettoyer et analyser des datasets complexes. La flexibilité de Python et la richesse de son écosystème m'ont permis d’automatiser des processus répétitifs et d’optimiser mon workflow de manière significative.

Problèmes résolus grâce à Python
Un des moments forts de mon expérience avec Python a été la résolution de défis liés à l'automatisation des tâches répétitives. En entreprise, il y a souvent des processus manuels et chronophages qui peuvent être optimisés. Grâce à Python, j’ai pu écrire des scripts qui ont automatisé ces processus, réduisant ainsi les erreurs humaines et augmentant la productivité.

Dans mes projets de data engineering, j’ai utilisé Python pour gérer le traitement de données volumineuses. Par exemple, j’ai automatisé des processus d’extraction, de transformation et de chargement (ETL) pour préparer les données à des fins d’analyse.

Qu'est-ce que Flask et Django ?

    Flask est un micro-framework Python très léger, parfait pour construire des applications web simples ou des APIs. Il est extrêmement flexible et me permet de démarrer des projets rapidement tout en ayant un contrôle total sur les composants.
    Django, en revanche, est un framework web complet. Il offre une structure robuste pour des projets à plus grande échelle, notamment grâce à son ORM (Object-Relational Mapping), ses modules d'authentification, et sa capacité à gérer des bases de données complexes. J’utilise Django lorsque j'ai besoin de solutions plus puissantes et structurées.

Impact de Python dans mon parcours IT
Python n’est pas juste un langage que j'utilise, c'est un élément central dans ma manière d’aborder les projets. Il m’a permis de développer des solutions rapidement, tout en restant flexible pour m’adapter aux différents besoins des projets. C’est ce qui m'a aidé à m'impliquer dans des projets variés, allant du développement web à l’analyse de données en passant par l’automatisation.

Ce qui m'a le plus marqué avec Python, c'est sa capacité à s'adapter à presque tous les domaines de l'IT. C'est un langage que je peux utiliser aussi bien pour des tâches de back-end que pour des analyses de données avancées, ce qui en fait un atout essentiel pour un ingénieur en data comme moi.

Vision pour l’avenir avec Python
Dans les années à venir, je compte continuer à exploiter Python dans des domaines comme l’intelligence artificielle et l’apprentissage automatique. Ces technologies sont de plus en plus importantes, et Python, avec des frameworks comme TensorFlow et PyTorch, offre une excellente base pour se lancer dans ces projets.

Je souhaite également approfondir l'automatisation à grande échelle, en explorant des outils comme Ansible ou Airflow, où Python joue un rôle clé. En combinant ces technologies avec ma maîtrise de Python, je suis convaincu que je pourrai relever de nouveaux défis dans le domaine du data engineering et de l’IA.`,

      competences: ["Python", "Pandas", "Flask", "ETL", "Automation"],
      categorie: "Language de programmation"
    },
    {
      id: 2,
      titre: "Linux",
      resumeCourt: "Avec Linux, on peut gérer des systèmes, sécuriser des serveurs et automatiser des environnements grâce à sa flexibilité et sa puissance.",
      contenuComplet: `

Introduction
Depuis que j'ai commencé à travailler dans le domaine de l'IT, Linux est devenu un élément central de mon environnement professionnel. Il ne s’agit pas seulement d’un système d’exploitation, mais d’une plateforme sur laquelle je m’appuie pour accomplir pratiquement toutes mes tâches, que ce soit pour l'administration des serveurs, le déploiement d'applications ou l’automatisation des processus. Sa flexibilité et sa puissance en font un outil incontournable dans mon travail quotidien.

Pourquoi Linux est mon choix principal
La raison pour laquelle je préfère Linux réside dans sa stabilité, sa sécurité et ses performances. Que je travaille avec des distributions comme Ubuntu, CentOS ou Red Hat, Linux me permet de gérer des environnements serveurs complexes avec un contrôle total. Chaque commande, chaque configuration me donne un accès direct aux ressources du système, ce qui me permet de diagnostiquer et de résoudre rapidement les problèmes.

De plus, dans le monde du DevOps et du Data Engineering, Linux est omniprésent. Il est au cœur des infrastructures modernes, que ce soit dans le cloud ou sur des serveurs on-premise. C’est un outil universel qui s’adapte parfaitement aux besoins de performance et de sécurité dans les environnements de production.

Mes compétences avec Linux
Au fil du temps, j'ai développé une expertise approfondie en administration système avec Linux. Voici quelques-unes des tâches que je maîtrise :

    Gestion des services : Configurer, démarrer et surveiller des services comme Nginx, Apache et PostgreSQL pour s'assurer que les applications fonctionnent de manière optimale.
    Automatisation : L’utilisation de scripts shell et de cron jobs me permet d'automatiser des tâches critiques, telles que la gestion des backups, les mises à jour système, et le déploiement de nouvelles versions d’applications.
    Gestion des utilisateurs et permissions : La gestion fine des utilisateurs et des permissions est cruciale dans tout environnement Linux. Je configure les groupes et les droits d’accès pour garantir que seuls les utilisateurs autorisés puissent accéder aux ressources critiques du système.

Linux dans mes projets quotidiens
Chaque projet sur lequel je travaille, qu'il s'agisse de Data Engineering, de DevOps ou de déploiement d'applications, implique une utilisation intensive de Linux. Par exemple, lorsque je configure des serveurs pour héberger des bases de données comme PostgreSQL ou des services web avec Nginx, Linux me permet d’administrer ces systèmes de manière fluide et sécurisée.

Lors de la mise en place de pipelines de données, je me repose sur Linux pour assurer l'intégrité et la sécurité des flux de données. Avec des outils comme Ansible, je peux automatiser la configuration de serveurs Linux pour qu'ils s'adaptent aux besoins des projets. Cette automatisation réduit considérablement le temps et les efforts nécessaires pour maintenir un environnement de production.

Problèmes résolus grâce à Linux
J'ai souvent été confronté à des défis où la performance et la sécurité étaient primordiales. Par exemple, sur un projet récent, un serveur sous charge importante avait des problèmes de performance. Grâce à des outils comme htop et netstat, j'ai pu identifier la source du problème et ajuster les configurations pour optimiser les ressources système. Résultat : une amélioration significative des performances et une meilleure stabilité.

J’ai également dû sécuriser des serveurs contre des attaques potentielles. En utilisant des solutions comme Fail2Ban pour bloquer les IP suspectes et iptables pour filtrer le trafic réseau, j’ai pu renforcer la sécurité tout en assurant la disponibilité des services critiques.

Pourquoi Linux continue de m’inspirer
Ce qui me fascine toujours avec Linux, c’est son aspect communautaire et open-source. Il y a toujours une solution à découvrir, un script à améliorer, ou une nouvelle méthode à expérimenter. La documentation abondante et les forums de support en ligne rendent l’apprentissage continu et enrichissant. Ce côté collaboratif fait de Linux non seulement un outil technique, mais aussi un environnement de travail où l’innovation est constante.

Vision future avec Linux
Dans les années à venir, je compte continuer à utiliser Linux pour automatiser encore plus d’infrastructures et améliorer la gestion des systèmes à grande échelle. Je suis particulièrement intéressé par l'intégration de Linux avec des solutions de conteneurs comme Docker et des orchestrateurs comme Kubernetes pour gérer des environnements complexes de manière encore plus efficace.`,

      competences: ["Linux", "Os", "Sécurité", "Automatisation", "Administration"],
      categorie: "systèmes d'exploitation"
    },

    {
      id: 3,
      titre: "Apache nifi",
      resumeCourt: "Apache NiFi : Simplifiez vos flux de données, sécurisez vos pipelines.",
      contenuComplet: `Depuis que j’ai commencé à travailler avec des pipelines de données, Apache NiFi est rapidement devenu un outil clé dans ma boîte à outils. NiFi, pour moi, n’est pas qu’un simple ETL (Extract, Transform, Load), mais une plateforme puissante qui facilite la gestion des flux de données en temps réel, tout en offrant une flexibilité et une simplicité d’utilisation incomparables.

Introduction
Depuis que j’ai découvert Apache NiFi, cet outil est devenu un allié incontournable dans mes projets de gestion des données. Sa simplicité d’utilisation et sa puissance le rendent particulièrement adapté pour concevoir et gérer des pipelines de données complexes. Que ce soit pour l’ingestion, la transformation ou l’automatisation des flux, NiFi offre une flexibilité qui facilite grandement le travail des ingénieurs en données.

Qu’est-ce qu’Apache NiFi ?
Apache NiFi est un outil open-source conçu pour automatiser le mouvement des données entre différents systèmes. Il permet de collecter, transformer et transférer des données de manière visuelle grâce à une interface graphique intuitive. Ce qui rend NiFi unique, c’est sa capacité à gérer les flux de données complexes avec des fonctionnalités comme :

    Gestion en temps réel : Idéal pour les pipelines nécessitant une faible latence.
    Évolutivité : Parfait pour des systèmes allant de petites infrastructures locales à des environnements distribués massifs.
    Contrôle de flux : Grâce à des processeurs configurables, on peut surveiller et contrôler chaque étape du pipeline.

Pourquoi Apache NiFi est mon choix privilégié
L’un des plus grands avantages de NiFi est sa simplicité visuelle. On peut littéralement “dessiner” un pipeline en glissant-déposant des composants, ce qui rend la gestion des flux de données accessible même aux non-développeurs. Mais sous cette simplicité se cache une puissance énorme.

Avec NiFi, j’ai pu intégrer des sources de données diverses (bases SQL, fichiers CSV, API, stockage cloud) dans un pipeline unique, tout en appliquant des transformations avancées. Ce qui me plaît particulièrement, c’est son focus sur la sécurité avec des options comme le chiffrement SSL et la gestion fine des permissions.

Où utilise-t-on Apache NiFi ?
NiFi est utilisé dans plusieurs domaines :

    Data Engineering : Pour construire des pipelines ETL robustes et automatisés.
    IoT : Collecte et transformation des données provenant de capteurs en temps réel.
    Big Data : Intégration avec Hadoop, Kafka, ou Elasticsearch pour traiter des volumes massifs de données.
    Cloud et on-premise : Que ce soit sur AWS, Azure ou dans des infrastructures locales, NiFi s’adapte parfaitement.

Ce que j’ai appris avec NiFi
Au fil des projets, NiFi m’a appris à penser en termes de flux de données :

    Flexibilité des pipelines : J’ai appris à concevoir des flux adaptatifs, capables de gérer des cas d’erreurs sans interrompre tout le processus.
    Optimisation des performances : En configurant les processeurs et en utilisant des files d’attente adaptées, j’ai pu maximiser la rapidité de traitement tout en minimisant les ressources nécessaires.
    Monitoring avancé : Grâce aux outils intégrés, j’ai développé une expertise dans la surveillance des flux en temps réel pour détecter rapidement les anomalies.

Un exemple marquant : lors d’un projet, j’ai intégré NiFi avec Apache Kafka pour créer un pipeline de données en temps réel qui synchronisait des millions d’événements entre plusieurs systèmes tout en garantissant leur transformation et leur livraison en temps voulu.

Avantages d’Apache NiFi

    Interface intuitive : Une prise en main rapide avec une interface visuelle.
    Sécurité intégrée : Chiffrement des données en transit et gestion fine des accès.
    Évolutivité : Capable de s’adapter à des infrastructures de petite ou grande taille.
    Large compatibilité : Prise en charge d’un grand nombre de connecteurs et de formats de données.

Problèmes résolus grâce à NiFi
Un exemple concret : lors d’un projet où les données d’un client étaient réparties sur plusieurs systèmes, le défi était d’unifier ces données sans perturber les processus en cours. Avec NiFi, j’ai créé un pipeline qui collectait les données depuis plusieurs bases SQL et fichiers JSON, les transformait pour les uniformiser, et les envoyait à une base Elasticsearch.

J’ai également pu résoudre des problèmes liés à la latence grâce à des configurations optimisées des processeurs et des files d’attente. Résultat : une amélioration significative de la performance et de la fiabilité du système.

Pourquoi Apache NiFi continue de m’inspirer
Ce que j’aime avec NiFi, c’est qu’il évolue constamment. La communauté open-source derrière l’outil est très active, et il y a toujours de nouvelles fonctionnalités à explorer. La simplicité qu’il apporte dans des tâches complexes est fascinante, et c’est un outil qui me donne envie de toujours repousser les limites de ce qu’un pipeline peut accomplir.

Vision future avec NiFi
À l’avenir, je souhaite approfondir l’intégration de NiFi avec des technologies comme Kubernetes pour orchestrer des pipelines encore plus complexes et dynamiques. J’aimerais également explorer davantage l’utilisation de NiFi dans des environnements IoT pour traiter des données en temps réel issues de capteurs connectés.

Enfin, je vois une opportunité de combiner NiFi avec des solutions d’intelligence artificielle pour enrichir les données en temps réel, ouvrant la voie à des pipelines de données intelligents.

Conclusion
Apache NiFi n’est pas juste un outil pour moi, c’est une façon de simplifier l’ingestion et la gestion des données tout en rendant chaque projet plus efficace et innovant.`,

      competences: ["Nifi", "Apache", "ETL", "Automaatisation", "S3"],
      categorie: "ETL(Extract, Transform & Load)"
    },
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
