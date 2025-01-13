"use client"

import { motion } from "framer-motion"
import { Book, Telescope, Palette, Zap, Flower } from "lucide-react"

export default function About() {
  // Configurations des animations
  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const passions = [
    {
      icon: Book,
      label: "Lecture",
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
    },
    {
      icon: Telescope,
      label: "Astronomie",
      color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
    },
    {
      icon: Zap,
      label: "Sport",
      color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
    },
    {
      icon: Palette,
      label: "Dessin",
      color: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
    },
    {
      icon: Flower,
      label: "Culture Japonaise",
      color: "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400"
    }
  ]

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerAnimation}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Reste du code SVG inchangé */}

          {/* Colonne droite - Contenu textuel */}
          <motion.div
            variants={itemAnimation}
            className="space-y-8"
          >
            {/* En-tête de section */}
            <div className="space-y-4">
              <motion.span
                variants={itemAnimation}
                className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 
                         text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
              >
                À Propos de Moi
              </motion.span>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                Ma philosophie
              </h2>
            </div>

            {/* Description principale */}
            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <p className="text-lg leading-relaxed">
                Je suis une personne passionnée par le partage et l&apos;interaction humaine.
                Je crois fermement que chacun de nous porte un sac à dos rempli d&apos;expériences, d&apos;émotions et de relations que nous accumulons tout au long de notre vie. C&apos;est ce que nous ramassons qui façonne notre identité et influence notre manière d&apos;interagir avec le monde qui nous entoure.
                Mes valeurs fondamentales guident mes actions et mes choix, tant sur le plan personnel que professionnel.
              </p>
            </div>

            {/* Passions et Centres d'Intérêt */}
            <motion.div
              variants={itemAnimation}
              className="space-y-4"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Mes Passions
              </h3>
              <div className="flex flex-wrap gap-4">
                {passions.map((passion, index) => (
                  <motion.div
                    key={passion.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 300
                    }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full ${passion.color}`}
                  >
                    <passion.icon size={20} />
                    <span className="text-sm font-medium">{passion.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
