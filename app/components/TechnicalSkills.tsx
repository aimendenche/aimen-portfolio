// app/components/TechnicalSkills.tsx
"use client"

import { motion } from "framer-motion"

type TechnicalSkill = {
  id: number;
  titre: string;
  resumeCourt: string;
  contenuDetaille: {
    contexte: string;
    utilisation: string;
    maitrise: string;
    impact: string;
  };
  technologies: string[];
  niveau: "Expert" | "Avancé" | "Intermédiaire";
};

export default function TechnicalSkills() {
  const competencesTechniques: TechnicalSkill[] = [
    {
      id: 1,
      titre: "Kubernetes & Orchestration de Conteneurs",
      resumeCourt: "Expertise en déploiement et gestion d'applications conteneurisées à grande échelle avec Kubernetes.",
      contenuDetaille: {
        contexte: "Dans un environnement de production critique nécessitant une haute disponibilité et une scalabilité dynamique.",
        utilisation: "Configuration et maintenance de clusters Kubernetes, déploiement d'applications, mise en place de stratégies de scaling et de résilience.",
        maitrise: "Maîtrise approfondie des concepts Kubernetes : pods, services, deployments, ingress, et gestion avancée des configurations.",
        impact: "Amélioration significative de la disponibilité des services et réduction des temps de déploiement de 70%."
      },
      technologies: ["Kubernetes", "Docker", "Helm", "Prometheus", "Grafana"],
      niveau: "Expert"
    }
  ];

  return (
    <section id="technical-skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Compétences Techniques
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Expertise approfondie en DevOps et Cloud Computing
          </p>
        </motion.div>

        {/* Grille de compétences */}
        <div className="grid gap-8">
          {competencesTechniques.map((competence) => (
            <motion.div
              key={competence.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {competence.titre}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {competence.resumeCourt}
                    </p>
                  </div>
                  <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium">
                    {competence.niveau}
                  </span>
                </div>

                <div className="space-y-6 mt-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Contexte
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {competence.contenuDetaille.contexte}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Utilisation
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {competence.contenuDetaille.utilisation}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {competence.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 
                                 text-gray-800 dark:text-gray-200 rounded-full text-sm"
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
  );
}
