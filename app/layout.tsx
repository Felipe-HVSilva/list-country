import type { Metadata } from "next"
import { Nunito_Sans } from "next/font/google"
import "./globals.css"
import Image from "next/image"

const nunitoSans = Nunito_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Country List",
  description: "Country list created by Next 13",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <main className="bg-gray-100 min-h-screen">
          <nav className="w-full bg-white h-16 flex items-center justify-center">
            <section className="container flex items-center gap-3">
              <Image src="/logo.svg" alt="Logo do App" width={48} height={48} />
              <h1 className="font-bold text-2xl">Lista de países</h1>
            </section>
          </nav>
          {children}
        </main>
      </body>
    </html>
  )
}
