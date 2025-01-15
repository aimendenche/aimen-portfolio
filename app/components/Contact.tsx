"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        // Si la réponse n'est pas ok, on récupère le message d'erreur du serveur
        const errorData = await response.json();
        throw new Error(errorData.error || 'Une erreur est survenue');
      }

      setFormStatus({
        type: "success",
        message: "Merci pour votre message ! Je vous répondrai bientôt."
      });
      setFormData({ name: "", email: "", message: "" });

    } catch (error: unknown) {
      // On type l'erreur comme unknown et on la traite correctement
      let errorMessage = "Une erreur est survenue lors de l&apos;envoi du message.";

      // Si c'est une Error, on utilise son message
      if (error instanceof Error) {
        errorMessage = error.message;
      }

      // On met à jour le state avec le message d'erreur
      setFormStatus({
        type: "error",
        message: errorMessage
      });

      // On peut aussi logger l'erreur pour le debugging
      console.error('Erreur lors de l\&apos;envoi du formulaire:', error);
    }
  };
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Me Contacter
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Contactez-moi pour vos projets ou opportunités !.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Coordonnées
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>aimen.denche18@gmail.com</span>
              </div>

              <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2 9h4v12H2z"
                  />
                  <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth={2} />
                </svg>
                <a
                  href="https://www.linkedin.com/in/aimen-denche/"
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 
                           border border-gray-300 dark:border-gray-600
                           text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 
                           border border-gray-300 dark:border-gray-600
                           text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 
                           border border-gray-300 dark:border-gray-600
                           text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent
                           resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-6 py-3 text-white bg-purple-600 rounded-lg
                         hover:bg-purple-700 transition-colors duration-200
                         focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                Envoyer
              </motion.button>
            </form>

            {formStatus.type && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 p-4 rounded-md ${formStatus.type === "success"
                  ? "bg-green-50 text-green-800 dark:bg-green-900 dark:text-green-200"
                  : "bg-red-50 text-red-800 dark:bg-red-900 dark:text-red-200"
                  }`}
              >
                {formStatus.message}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
