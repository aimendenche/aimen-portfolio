"use client"

import { useTheme } from "./theme-provider"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function Navbar() {
  // État pour gérer la transparence de la navbar lors du scroll
  const [isScrolled, setIsScrolled] = useState(false)

  // Hook pour gérer le thème clair/sombre

  // Effet pour détecter le scroll et mettre à jour la transparence
  useEffect(() => {
    const handleScroll = () => {
      // On change le style quand on scroll plus de 50px
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    // Ajout de l'écouteur d'événement
    window.addEventListener("scroll", handleScroll)

    // Nettoyage de l'écouteur lors du démontage du composant
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Fonction pour gérer le défilement fluide vers les sections
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Offset pour tenir compte de la hauteur de la navbar
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Nom avec animation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={() => scrollToSection("hero")}
              className="text-xl font-bold text-gray-900 dark:text-white"
            >
              YOUSNADJ Yanis
            </button>
          </motion.div>

          {/* Menu de navigation avec animation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-8"
          >
            {/* Liens de navigation */}
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 
                      dark:hover:text-white transition-colors"
            >
              À propos
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 
                      dark:hover:text-white transition-colors"
            >
              Expérience
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 
                      dark:hover:text-white transition-colors"
            >
              Projets
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 
                      dark:hover:text-white transition-colors"
            >
              Contact
            </button>

            {/* Bouton de changement de thème */}
          </motion.div>
        </div>
      </div>
    </nav>
  )
}
