"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Image from 'next/image'

export default function Hero() {
  // On garde un seul état pour le texte final
  const [text, setText] = useState("")
  const finalText = "Cloud Native"

  // Effet modifié pour s'exécuter une seule fois
  useEffect(() => {
    let currentText = ""
    let currentIndex = 0

    const typingInterval = setInterval(() => {
      // Si on n'a pas fini d'écrire le texte final
      if (currentIndex < finalText.length) {
        currentText += finalText[currentIndex]
        setText(currentText)
        currentIndex++
      } else {
        // Une fois terminé, on nettoie l'intervalle
        clearInterval(typingInterval)
      }
    }, 100)  // Vitesse de frappe

    // Nettoyage de l'effet
    return () => clearInterval(typingInterval)
  }, [])  // Dépendances vides pour ne s'exécuter qu'une fois

  // Fonction de défilement reste identique
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
    <section id="hero" className="min-h-screen relative bg-white dark:bg-gray-900 overflow-hidden">
      {/* Fond avec motif subtil */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(59 130 246 / 0.1) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Colonne gauche - Contenu principal (8 colonnes) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 space-y-8"
          >
            {/* Badge DevOps */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 
                       rounded-full"
            >
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                Ingénieur
              </span>
            </motion.div>

            {/* Titre principal et description */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Solutions
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 
                              dark:from-blue-400 dark:to-indigo-400 px-3">
                  DevOps
                </span>
                <br />
                <span className="text-blue-600 dark:text-blue-400 min-h-[80px] block">
                  {text}
                  {/* Le curseur clignotant ne s'affiche que pendant l'animation */}
                  {text.length < finalText.length && (
                    <span className="animate-pulse">_</span>
                  )}
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
                Infrastructure & DevOps passionné.
              </p>
            </div>

            {/* Le reste du code reste identique ... */}
            {/* Statistiques */}

            {/* Boutons d'action */}
            <div className="flex flex-wrap gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection("realisations")}
                className="px-8 py-4 bg-blue-600 text-white rounded-xl font-medium
                         hover:bg-blue-700 transition-all"
              >
                Découvrir mes projets
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-900 
                         dark:text-white rounded-xl font-medium hover:bg-gray-200 
                         dark:hover:bg-gray-700 transition-all"
              >
                Me contacter
              </motion.button>
            </div>
          </motion.div>

          {/* Colonne droite - Photo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                           dark:from-blue-400/20 dark:to-purple-400/20 rounded-3xl blur-2xl" />

              <div className="relative rounded-2xl overflow-hidden aspect-[3.5/4] max-w-sm mx-auto">
                <Image
                  src="/images/yanis.jpg"
                  alt="Portrait professionnel"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-4 right-4 bg-white dark:bg-gray-800 
                         px-4 py-2 rounded-xl shadow-lg"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    Disponible
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
// "use client"
//
// import { motion } from "framer-motion"
// import { useEffect, useState } from "react"
//
// export default function Hero() {
//   const [text, setText] = useState("")
//   const phrases = ["Infrastructure", "Automation", "Cloud Native"]
//   const [phraseIndex, setPhraseIndex] = useState(0)
//
//   useEffect(() => {
//     let currentText = ""
//     let currentIndex = 0
//     const currentPhrase = phrases[phraseIndex]
//
//     const typingInterval = setInterval(() => {
//       if (currentIndex < currentPhrase.length) {
//         currentText += currentPhrase[currentIndex]
//         setText(currentText)
//         currentIndex++
//       } else {
//         setTimeout(() => {
//           setPhraseIndex((prev) => (prev + 1) % phrases.length)
//           setText("")
//         }, 2000)
//       }
//     }, 100)
//
//     return () => clearInterval(typingInterval)
//   }, [phraseIndex])
//
//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId)
//     if (element) {
//       const offset = 80
//       const elementPosition = element.getBoundingClientRect().top
//       const offsetPosition = elementPosition + window.pageYOffset - offset
//
//       window.scrollTo({
//         top: offsetPosition,
//         behavior: "smooth"
//       })
//     }
//   }
//
//   return (
//     <section id="hero" className="min-h-screen relative bg-white dark:bg-gray-900 overflow-hidden">
//       {/* Fond avec motif subtil */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute inset-0" style={{
//           backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(59 130 246 / 0.1) 1px, transparent 0)',
//           backgroundSize: '40px 40px'
//         }} />
//       </div>
//
//       {/* Contenu principal */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
//         <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
//           {/* Colonne gauche - Contenu principal (8 colonnes) */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="lg:col-span-8 space-y-8"
//           >
//             {/* Badge DevOps */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.3 }}
//               className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 
//                        rounded-full"
//             >
//               <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
//               <span className="text-blue-600 dark:text-blue-400 font-medium text-sm">
//                 DevOps Engineer
//               </span>
//             </motion.div>
//
//             {/* Titre principal et description */}
//             <div className="space-y-6">
//               <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
//                 Solutions
//                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 
//                               dark:from-blue-400 dark:to-indigo-400 px-3">
//                   DevOps
//                 </span>
//                 <br />
//                 <span className="text-blue-600 dark:text-blue-400 min-h-[80px] block">
//                   {text}
//                   <span className="animate-pulse">_</span>
//                 </span>
//               </h1>
//
//               <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
//                 Spécialisé dans l'orchestration Kubernetes, l'automatisation CI/CD
//                 et l'architecture cloud native, je transforme la complexité en solutions
//                 élégantes et performantes.
//               </p>
//             </div>
//
//             {/* Statistiques */}
//             <div className="flex space-x-12">
//               <div className="space-y-2">
//                 <div className="text-4xl font-bold text-gray-900 dark:text-white">3+</div>
//                 <div className="text-gray-600 dark:text-gray-400">Années d'expérience</div>
//               </div>
//               <div className="space-y-2">
//                 <div className="text-4xl font-bold text-gray-900 dark:text-white">50+</div>
//                 <div className="text-gray-600 dark:text-gray-400">Projets déployés</div>
//               </div>
//             </div>
//
//             {/* Boutons d'action */}
//             <div className="flex flex-wrap gap-4 pt-4">
//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 onClick={() => scrollToSection("projects")}
//                 className="px-8 py-4 bg-blue-600 text-white rounded-xl font-medium
//                          hover:bg-blue-700 transition-all"
//               >
//                 Découvrir mes projets
//               </motion.button>
//
//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 onClick={() => scrollToSection("contact")}
//                 className="px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-900 
//                          dark:text-white rounded-xl font-medium hover:bg-gray-200 
//                          dark:hover:bg-gray-700 transition-all"
//               >
//                 Me contacter
//               </motion.button>
//             </div>
//           </motion.div>
//
//           {/* Colonne droite - Photo et décorations (4 colonnes) */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="lg:col-span-4 relative"
//           >
//             {/* Conteneur de la photo avec taille réduite */}
//             <div className="relative">
//               {/* Cercles décoratifs en arrière-plan */}
//               <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 
//                            dark:from-blue-400/20 dark:to-purple-400/20 rounded-3xl blur-2xl" />
//
//               {/* Photo principale */}
//               <div className="relative rounded-2xl overflow-hidden aspect-[3/4] max-w-sm mx-auto">
//                 <img
//                   src="/images/yanis.jpg"
//                   alt="Portrait professionnel"
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
//               </div>
//
//               {/* Badge flottant */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.5 }}
//                 className="absolute -bottom-4 right-4 bg-white dark:bg-gray-800 
//                          px-4 py-2 rounded-xl shadow-lg"
//               >
//                 <div className="flex items-center space-x-2">
//                   <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
//                   <span className="text-sm font-medium text-gray-900 dark:text-white">
//                     Disponible
//                   </span>
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }
