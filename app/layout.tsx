import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/app/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Votre Portfolio - DevOps Engineer",
  description: "Portfolio professionnel - DevOps Engineer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
// import type { Metadata } from "next"
// import { Inter } from "next/font/google"
// import "./globals.css"
// import { ThemeProvider } from "@/app/components/theme-provider"
//
// const inter = Inter({ subsets: ["latin"] })
//
// export const metadata: Metadata = {
//   title: "Votre Portfolio - DevOps Engineer",
//   description: "Portfolio professionnel - DevOps Engineer spécialisé en automatisation et cloud computing",
// }
//
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="fr" suppressHydrationWarning>
//       <body className={inter.className}>
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="system"
//           enableSystem
//           disableTransitionOnChange
//         >
//           {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   )
// }
