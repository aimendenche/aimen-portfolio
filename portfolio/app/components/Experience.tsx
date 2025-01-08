"use client"

import { motion } from "framer-motion"

interface ExperienceItem {
  title: string
  company: string
  date: string
  description: string[]
  technologies: string[]
}

export default function Experience() {
  // Les données d'expérience (à personnaliser selon votre parcours)
  const experiences: ExperienceItem[] = [


    {
      title: "Alternant DevOps Engineer",
      company: "Credit Agricole GIP",
      date: "2022 - Présent",
      description: [
        "Administrateur Kubernetes",
      ],
      technologies: ["Kubernetes", "FluxCd", "GitLab", "OpenStack", "Vault", "prometheus", "Grafana", "Go"]
    },
    {
      title: " Stage DevOps Engineer",
      company: "Credit Agricole GIP",
      date: "2022 - 6 mois",
      description: [
        "Administrateur Kubernetes",
      ],
      technologies: ["Kubernetes", "FluxCd", "GitLab", "OpenStack", "Vault", "prometheus", "Grafana", "Go"]
    },
    {
      title: "Stage Software Engineer",
      company: "BNA",
      date: "2021 - 6 mois",
      description: [
        "Conception d'un site web",
        "Mise en place d'une base de données",
        "Maitenance du site web"
      ],
      technologies: ["Javascript", "Css", "B2 database", "Symfony"]
    },



    // Ajoutez d'autres expériences ici...
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
            Expérience Professionnelle
          </h2>
        </motion.div>

        {/* Timeline d'expérience */}
        <div className="relative">
          {/* Ligne verticale de la timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200 dark:bg-gray-700" />

          {/* Expériences */}
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 
                ${index % 2 === 0 ? 'md:text-left' : 'md:text-left md:flex-row-reverse'}`}
            >
              {/* Point sur la timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full" />

              {/* Contenu */}
              <div className={`md:col-span-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {experience.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {experience.company}
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
                    {experience.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 
                                 text-blue-800 dark:text-blue-200 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
