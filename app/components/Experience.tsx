"use client"

import { motion } from "framer-motion"

interface ExperienceItem {
  title: string
  establishment: string
  date: string
  description: string[]
  type: "Professionnel" | "Académique"
  technologies?: string[]
}

export default function Experience() {
  // Les données d'expérience 
  const experiences: ExperienceItem[] = [
    // Expériences Professionnelles
    {
      type: "Professionnel",
      title: "Alternant Ingénieur Data ",
      establishment: "Stirfar",
      date: "Juin 2022 - Présent",
      description: [
        "Qualité et Gouvernance des données",
        "Automatisation du flux de données ",
        "Transformation(ETL)",
        "Développement backend + intégration OAuth",
        "Mise en place des couches de sécurité renforcées"
      ],
      technologies: ["Apache Spark", "Python", "SSO", "Airflow", "Elastic SLK", "postman", "Flask", "Nifi ETL"]
    },

    {
      type: "Professionnel",
      title: "Collaboration Avec Openmetadata",
      establishment: "COLLATE",
      date: "Novembre 2023- Mai 2024",
      description: [
        "Installation et configuration d'OpenMetadata",
        "Configuration du data lineage",
        "Développement de connecteurs personnalisés"
      ],
      technologies: ["Openmetaata", "Postgresql", "S3", "Nifi", "Docker"]
    },

    {
      type: "Professionnel",
      title: "Stagiaire Ingénieur DevOps",
      establishment: "Direction Générale des finances publiques",
      date: "Aout 2022 - Février 2023",
      description: [
        "Contribution au développement d'un outil de restitution des données",
        "Tests de charge et de performance.",
        "Automatisation des flux de données entre les API de la DGFiP et Talend",
        "Rédaction de la documentation technique."
      ],
      technologies: ["Ansible", "Git", "Docker", "Nubo", "Elastic ELK", "Jenkins"]
    },

    // Expériences Académiques
    {
      type: "Académique",
      title: "Master Expert En Architecture des Systèmes d'informations",
      establishment: "ESIEA",
      date: " Mars 2023 - Présent",
      description: [
        "Gestion et optimisation d'infrastructures cloud",
        "Conduite de projets en systèmes d'information, du design à l'implémentation.",
        "Évaluation des risques et réponse aux incidents de sécurité"
      ]
    },
    {
      type: "Académique",
      title: "Bachelor Administrateur Systèmes & Réseaux",
      establishment: "INTECH",
      date: "Mars 2022 - Marss 2023",
      description: [
        "Conception et gestion des infrastructures",
        "Gestion de la sécurité informatique",
        "sécurisation des systèmes contre les menaces potentielles"
      ]
    },
    {
      type: "Académique",
      title: "Baccalauréat Scientifique",
      establishment: "Ibn Badis",
      date: "Séptembre 2017 - Aout 2018",
      description: [
        "Mention  Trés Bien",
        "Spécialité Scientifique",

      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Parcours Professionnel et Académique
          </h2>
        </motion.div>

        {/* Disposition avec ligne centrale */}
        <div className="relative">
          {/* Ligne verticale centrale */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full 
            bg-gray-200 dark:bg-gray-700 z-0" />

          {/* Grille pour le contenu */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            {/* Colonne Expériences Professionnelles */}
            <div className="space-y-8 md:pr-12">
              <h3 className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-6 relative z-10">
                Expériences Professionnelles
              </h3>
              {experiences
                .filter(exp => exp.type === "Professionnel")
                .map((experience, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="relative z-10 mb-6 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg"
                  >
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      {experience.title}
                    </h4>
                    <p className="text-green-600 dark:text-green-400 font-medium">
                      {experience.establishment}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">
                      {experience.date}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {experience.description.map((item, i) => (
                        <li key={i} className="text-gray-600 dark:text-gray-300">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {experience.technologies?.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 
                                   text-blue-800 dark:text-blue-200 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))
              }
            </div>

            {/* Colonne Expériences Académiques */}
            <div className="space-y-8 md:pl-12">
              <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-6 relative z-10">
                Parcours Académique
              </h3>
              {experiences
                .filter(exp => exp.type === "Académique")
                .map((experience, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="relative z-10 mb-6 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg"
                  >
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      {experience.title}
                    </h4>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">
                      {experience.establishment}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">
                      {experience.date}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {experience.description.map((item, i) => (
                        <li key={i} className="text-gray-600 dark:text-gray-300">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
