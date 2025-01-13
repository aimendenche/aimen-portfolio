"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
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

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-8"
          >
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 
                      dark:hover:text-white transition-colors"
            >
              Accueil
            </button>

            <button
              onClick={() => scrollToSection("experience")}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 
                      dark:hover:text-white transition-colors"
            >
              Expérience
            </button>

            <button
              onClick={() => scrollToSection("realisation")}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 
                      dark:hover:text-white transition-colors"
            >
              Projets
            </button>

            <button
              onClick={() => scrollToSection("technicalskills")}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 
                      dark:hover:text-white transition-colors"
            >
              Compétences Techniques
            </button>

            <button
              onClick={() => scrollToSection("softskills")}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 
                      dark:hover:text-white transition-colors"
            >
              Compétences Humaines
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 
                      dark:hover:text-white transition-colors"
            >
              Contact
            </button>
          </motion.div>
        </div>
      </div>
    </nav>
  )
}
