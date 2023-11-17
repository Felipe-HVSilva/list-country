import CoutryCard from "@/components/CoutryCard"

export type Country = {
  name: {
    common: string
  }
  flags: {
    svg: string
    alt: string
  }
  translations: {
    por: {
      common: string
    }
  }
  capital: string
  region: string
  subregion: string
  population: number
  languages?: {
    [key: string]: string
  }
  borders?: string[]
  cca3: string
}

async function getCountries(): Promise<Country[]> {
  const response = await fetch("https:restcountries.com/v3.1/all")
  return response.json()
}

export default async function Home() {
  const countries = await getCountries()

  return (
    <section className="grid grid-cols-5 w-full container gap-2 mt-16">
      {countries.map((country) => (
        <CoutryCard
          key={country.name.common}
          name={country.name.common}
          flag={country.flags.svg}
          ptName={country.translations.por.common}
          flagAlt={country.flags.alt}
        />
      ))}
    </section>
  )
}
