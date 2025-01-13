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
      title: "Alternant DevOps Engineer",
      establishment: "Credit Agricole GIP",
      date: "2022 - Présent",
      description: [
        "Administrateur Kubernetes",
        "Mise en place d'infrastructures cloud",
        "Automatisation des déploiements"
      ],
      technologies: ["Kubernetes", "FluxCd", "GitLab", "OpenStack", "Vault", "Prometheus", "Grafana", "Go"]
    },
    {
      type: "Professionnel",
      title: "Stage DevOps Engineer",
      establishment: "Credit Agricole GIP",
      date: "2022 - 6 mois",
      description: [
        "Administrateur Kubernetes",
        "Développement d'outils d'automatisation",
        "Support à l'infrastructure cloud"
      ],
      technologies: ["Kubernetes", "FluxCd", "GitLab", "OpenStack", "Vault", "Prometheus", "Grafana", "Go"]
    },
    {
      type: "Professionnel",
      title: "Stage Software Engineer",
      establishment: "BNA",
      date: "2021 - 6 mois",
      description: [
        "Conception d'un site web",
        "Mise en place d'une base de données",
        "Maintenance du site web"
      ],
      technologies: ["Javascript", "CSS", "B2 Database", "Symfony"]
    },
    // Expériences Académiques
    {
      type: "Académique",
      title: "Master en Informatique",
      establishment: "ESIEA",
      date: "2022 - Présent",
      description: [
        "Spécialisation en DevOps et Cloud Computing",
        "Projets avancés en développement logiciel",
        "Recherche en technologies émergentes"
      ]
    },
    {
      type: "Académique",
      title: "Licence en Informatique",
      establishment: "ESIEA",
      date: "2022",
      description: [
        "Formation en développement logiciel",
        "Réseaux",
        "Bases de données et systèmes d'information"
      ]
    },
    {
      type: "Académique",
      title: "Baccalauréat Scientifique",
      establishment: "Technicum",
      date: "2017",
      description: [
        "Mention Bien",
        "Spécialité Mathématiques",
        "Option Informatique"
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
