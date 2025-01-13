"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface CompetenceHumaine {
  id: number
  titre: string
  resumeCourt: string
  contenuComplet: string
  competences: string[]
  categorie: "Communication" | "Développement Personnel" | "Leadership"
}

export default function CompetencesHumaines() {
  const [selectedCompetence, setSelectedCompetence] = useState<number | null>(null)

  const competencesHumaines: CompetenceHumaine[] = [
    {
      id: 1,
      titre: "Quand la Communication Fait la Différence",
      resumeCourt: "Comment transformer des conversations techniques en opportunités de collaboration.",
      contenuComplet: `J'ai toujours su que communiquer, ce n'est pas juste parler, c'est créer des ponts.

Mon Premier Déclic
Lors d'un projet complexe de migration cloud, j'ai réalisé que le plus grand défi n'était pas technique, mais humain. Comment expliquer des concepts techniques à des personnes qui ne vivent pas dans le code 24h/24 ?

L'Art de Traduire la Tech
Ma force ? Transformer le jargon technique en histoire compréhensible. Quand mes collègues me regardaient avec des yeux perdus en parlant de microservices, j'ai appris à utiliser des métaphores :
- Un microservice, c'est comme un employé spécialisé dans une entreprise
- L'orchestration, c'est le chef d'orchestre qui coordonne

Situations Concrètes
Un jour, lors d'une réunion avec des managers, j'ai dû expliquer pourquoi notre migration vers Kubernetes prendrait du temps. Au lieu de noyer mon monde dans des détails techniques, j'ai comparé ça à déménager : on ne change pas toute une infrastructure en claquant des doigts.

Apprentissages Clés
- Écouter avant de parler
- Vulgariser sans perdre en précision
- S'adapter à chaque interlocuteur

Mes Petites Victoires
- Réduire les incompréhensions techniques
- Faire comprendre des choix complexes
- Créer de la cohésion dans les équipes

Ce Que Ça M'a Apporté
La communication m'a permis de :
- Gérer des projets plus efficacement
- Construire des relations de confiance
- Me faire comprendre, même sur des sujets techniques complexes

Conclusion
Communiquer, ce n'est pas un don, c'est un skill qui se travaille. Chaque conversation est une opportunité d'apprentissage.`,
      competences: ["Communication", "Écoute", "Vulgarisation", "Adaptabilité", "Pédagogie"],
      categorie: "Communication"
    },
    {
      id: 2,
      titre: "Mon Parcours d'Adaptation Technique",
      resumeCourt: "Comment j'ai transformé les changements technologiques en opportunités de croissance.",
      contenuComplet: `Le monde tech, c'est un peu comme un manège qui n'arrête jamais de tourner : si tu ne t'adaptes pas, tu tombes.

Mes Débuts Chaotiques
Quand j'ai commencé, j'étais persuadé que maîtriser un langage de programmation suffirait. Grosse erreur. En six mois, mes certitudes ont volé en éclats.

Comment J'ai Appris à Apprendre
Ma méthode ? Pas de panique, de la curiosité et beaucoup de pratique.
- Chaque nouvelle technologie devient un défi personnel
- Je ne dis plus "je ne sais pas", mais "je vais apprendre"
- Les tutoriels, les forums, les collègues : mes meilleurs alliés

Exemples Concrets
Kubernetes ? J'étais perdu au début. Aujourd'hui, je le déploie les yeux fermés.
Docker ? J'ai commencé par copier-coller des configurations, maintenant je les écris.

Mes Stratégies
- 1h par jour d'apprentissage
- Des projets personnels pour tester
- Ne jamais rester bloqué plus de 2h sans demander de l'aide

Moments de Doute
Bien sûr, il y a eu des moments difficiles :
- Des bugs incompréhensibles
- Des technologies qui semblaient insurmontables
- La peur de ne pas être à la hauteur

Ce Que Ça M'a Apporté
- Réactivité face aux changements
- Confiance en ma capacité d'apprentissage
- Un réseau technique riche

Conclusion
L'adaptabilité, c'est mon carburant. Chaque nouvelle technologie est une nouvelle aventure.`,
      competences: ["Adaptabilité", "Apprentissage", "Résilience", "Curiosité", "Flexibilité"],
      categorie: "Développement Personnel"
    },
    {
      id: 3,
      titre: "Mon Parcours Vers le Leadership Technique",
      resumeCourt: "Comment j'ai appris à inspirer et guider, au-delà du code.",
      contenuComplet: `Le leadership technique, ce n'est pas être le plus fort, c'est être celui qui fait grandir les autres.

Mes Premiers Pas
Je ne suis pas né leader. J'ai appris, essayé, échoué, recommencé.

Quand le Code Ne Suffit Plus
Un jour, j'ai réalisé que mon rôle dépassait l'écriture de fonctions parfaites. Il s'agissait de :
- Comprendre les motivations de chacun
- Donner du sens au travail technique
- Transformer des lignes de code en solutions

Mes Méthodes
- Des code reviews constructives
- Des discussions techniques ouvertes
- Valoriser chaque contribution, même petite

Moments Clés
Je me souviens d'un projet où personne ne croyait possible une migration complexe. En cassant ce projet en petites étapes, en montrant que chaque contribution comptait, on l'a réussi.

Mes Apprentissages
- L'écoute est un super pouvoir
- La technique sans empathie ne mène nulle part
- Un bon leader amplifie les talents, pas son ego

Défis Personnels
- Gérer des personnalités différentes
- Maintenir la motivation
- Donner une vision commune

Ce Que Ça M'a Apporté
- Confiance en moi
- Respect de mes collègues
- La satisfaction de voir des talents éclore

Conclusion
Le vrai leadership technique, c'est transformer des collègues en héros de leur propre histoire.`,
      competences: ["Leadership", "Mentorat", "Communication", "Motivation", "Vision Stratégique"],
      categorie: "Leadership"
    }
  ]

  return (
    <section id="competences-humaines" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Compétences Humaines
          </h2>
        </motion.div>

        <div className="space-y-10">
          {competencesHumaines.map((competence) => (
            <motion.article
              key={competence.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6 border-b border-gray-100 dark:border-gray-800">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 
                                   bg-blue-100 dark:bg-blue-900 dark:text-blue-200 rounded-full mb-3">
                      {competence.categorie}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {competence.titre}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {competence.resumeCourt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {competence.competences.map((competence, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 
                               text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {competence}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedCompetence(
                    selectedCompetence === competence.id ? null : competence.id
                  )}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 
                           dark:hover:text-blue-300 transition-colors font-medium"
                >
                  {selectedCompetence === competence.id ? "Voir moins" : "Lire plus"}
                </button>

                <AnimatePresence>
                  {selectedCompetence === competence.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800"
                    >
                      <div className="prose prose-blue dark:prose-invert max-w-none">
                        <div
                          className="text-gray-600 dark:text-gray-300 whitespace-pre-line"
                          dangerouslySetInnerHTML={{ __html: competence.contenuComplet.replace(/\n\n/g, '<br/><br/>') }}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
