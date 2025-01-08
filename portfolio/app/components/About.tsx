"use client"

import { motion } from "framer-motion"

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
          {/* Colonne gauche - Illustration SVG interactive */}
          <motion.div
            variants={itemAnimation}
            className="relative"
          >
            <svg
              className="w-full h-auto"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Grille de fond avec animation subtile */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {/* Création d'une grille 4x4 de points */}
                {[...Array(4)].map((_, i) =>
                  [...Array(4)].map((_, j) => (
                    <motion.circle
                      key={`dot-${i}-${j}`}
                      cx={100 + i * 80}
                      cy={100 + j * 80}
                      r={2}
                      className="fill-blue-500/30 dark:fill-blue-400/30"
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1, 0.8] }}
                      transition={{
                        duration: 2,
                        delay: (i + j) * 0.2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                  ))
                )}
              </motion.g>

              {/* Hexagones interconnectés représentant l'écosystème DevOps */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                {/* Hexagone central */}
                <motion.path
                  d="M200 120 L260 150 L260 210 L200 240 L140 210 L140 150 Z"
                  className="stroke-blue-500 dark:stroke-blue-400"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />

                {/* Hexagones satellites */}
                {[0, 120, 240].map((rotation, index) => (
                  <motion.g
                    key={`hex-${index}`}
                    animate={{
                      rotate: [rotation, rotation + 10, rotation],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                    style={{ transformOrigin: "center" }}
                  >
                    <path
                      d="M200 180 L230 195 L230 225 L200 240 L170 225 L170 195 Z"
                      className="stroke-blue-500/50 dark:stroke-blue-400/50"
                      strokeWidth="1.5"
                      fill="none"
                      transform={`translate(${60 * Math.cos(rotation * Math.PI / 180)}, ${60 * Math.sin(rotation * Math.PI / 180)})`}
                    />
                  </motion.g>
                ))}
              </motion.g>

              {/* Lignes de connexion animées */}
              <motion.g>
                {[0, 120, 240].map((angle, index) => (
                  <motion.line
                    key={`line-${index}`}
                    x1={200}
                    y1={200}
                    x2={200 + 80 * Math.cos(angle * Math.PI / 180)}
                    y2={200 + 80 * Math.sin(angle * Math.PI / 180)}
                    className="stroke-blue-500/30 dark:stroke-blue-400/30"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      strokeDashoffset: [0, -8]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  />
                ))}
              </motion.g>

              {/* Cercles pulsants aux intersections */}
              {[0, 120, 240].map((angle, index) => (
                <motion.circle
                  key={`intersection-${index}`}
                  cx={200 + 80 * Math.cos(angle * Math.PI / 180)}
                  cy={200 + 80 * Math.sin(angle * Math.PI / 180)}
                  r={4}
                  className="fill-blue-500 dark:fill-blue-400"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                />
              ))}

              {/* Effet de lueur central */}
              <motion.circle
                cx="200"
                cy="200"
                r="40"
                className="fill-blue-500/10 dark:fill-blue-400/10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </svg>

            {/* Élément décoratif en arrière-plan */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-50 to-indigo-50 
                          dark:from-blue-900/10 dark:to-indigo-900/10 blur-3xl" />
          </motion.div>

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
                Je suis une personne passionnée par le partage et l'interaction humaine,
                Je crois fermement que chacun de nous porte un sac à dos rempli d'expériences, d'émotions et de relations que nous accumulons tout au long de notre vie. C'est ce que nous ramassons qui façonne notre identité et influence notre manière d'interagir avec le monde qui nous entoure.
                Mes valeurs fondamentales guident mes actions et mes choix, tant sur le plan personnel que professionnel.
              </p>
            </div>

            {/* Points forts */}
            <motion.div variants={itemAnimation} className="grid grid-cols-2 gap-6">
            </motion.div>

            {/* Mots-clés et centres d'intérêt */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

