"use client";

import { motion } from "framer-motion";

/* eslint-disable react/no-unescaped-entities */

export default function About() {
  // Configuration des animations pour les nœuds
  const nodeAnimation = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: [0.6, 1, 0.6],
      scale: [1, 1.2, 1],
    },
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  // Configuration des animations pour les connexions
  const connectionAnimation = {
    animate: {
      strokeDashoffset: [0, -10],
      opacity: [0.5, 1, 0.5],
    },
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Logo animé représentant les données */}
          <motion.div className="relative">
            <svg
              className="w-full h-auto"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Nœud central */}
              <motion.circle
                cx="200"
                cy="200"
                r="10"
                className="fill-purple-500 dark:fill-purple-400"
                {...nodeAnimation}
              />

              {/* Nœuds satellites */}
              {[...Array(6)].map((_, index) => {
                const angle = (index * 60) * (Math.PI / 180); // Diviser le cercle en 6 parties
                const x = 200 + 100 * Math.cos(angle); // Position X
                const y = 200 + 100 * Math.sin(angle); // Position Y
                return (
                  <motion.circle
                    key={`data-node-${index}`}
                    cx={x}
                    cy={y}
                    r="8"
                    className="fill-purple-400/80 dark:fill-purple-300/80"
                    {...nodeAnimation}
                    transition={{
                      ...nodeAnimation.transition,
                      delay: index * 0.3,
                    }}
                  />
                );
              })}

              {/* Connexions */}
              {[...Array(6)].map((_, index) => {
                const angle = (index * 60) * (Math.PI / 180);
                const x = 200 + 100 * Math.cos(angle);
                const y = 200 + 100 * Math.sin(angle);
                return (
                  <motion.line
                    key={`connection-${index}`}
                    x1="200"
                    y1="200"
                    x2={x}
                    y2={y}
                    className="stroke-purple-500/50 dark:stroke-purple-300/50"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    {...connectionAnimation}
                    transition={{
                      ...connectionAnimation.transition,
                      delay: index * 0.3,
                    }}
                  />
                );
              })}
            </svg>
          </motion.div>

          {/* Colonne droite - Contenu textuel */}
          <motion.div className="space-y-8">
            {/* En-tête de section */}
            <div className="space-y-4">
              <motion.span
                className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30
                         text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium"
              >
                A Propos de Moi
              </motion.span>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                Moi, c'est Aimen
              </h2>
            </div>

            {/* Description principale */}
            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <p className="text-lg leading-relaxed">
                Je suis une personne passionnée par les échanges et les rencontres. <br />
                J'adore découvrir de nouveaux horizons, apprendre des choses variées et partager mes connaissances. <br />
                Lorsque je ne suis pas occupé à coder ou à résoudre des défis techniques, <br />
                je réalise souvent des documentaires sur des lieux que je visite ou j'explore différentes cultures. <br />
                <br />
                Chaque expérience est une source d'apprentissage, et chaque interaction me motive. <br />
                Ces moments de découverte et d'échange m'inspirent à avancer, à créer <br />
                et à donner le meilleur de moi-même dans tous mes projets. <br />
                <br />
                Voila qui je suis, simplement et sincèrement.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
