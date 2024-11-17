import { fetchData } from "../services/fetchData"
import { URL_COUNTRIES } from "../constants"
import localCountriesData from "../../db.json"

const CACHE_KEY = 'countries_data'
const CACHE_DURATION = 24 * 60 * 60 * 1000 // 24 horas

// Function to get all countries data

const getAllCountries = fetchData(URL_COUNTRIES)

export function countries () {
  try{
    // 1. Intentar obtener del localStorage
    const cachedData = localStorage.getItem(CACHE_KEY)
    
    if (cachedData) {
      const { data, timestamp } = JSON.parse(cachedData)
      if (Date.now() - timestamp < CACHE_DURATION) {
        return data
      }
      localStorage.removeItem(CACHE_KEY)
    }

    // 2. Intentar fetch
    const freshData = getAllCountries?.read()
    
    const processedData = freshData?.map((res) => ({
      id: res?.cca3,
      name: res?.name?.common || res?.name?.official || res?.name?.nativeName?.common,
      image: res?.flags && res?.flags.png,
      continent: res?.continents && res?.continents.map((el) => el),
      capital: res?.capital
        ? res?.capital.map((el) => el)
        : ['no data'],
      subregion: res?.subregion,
      area: res?.area,
      population: res?.population
    }))

    // Guardar en localStorage
    localStorage.setItem(CACHE_KEY, JSON.stringify({
      data: processedData,
      timestamp: Date.now()
    }))

    return processedData

  } catch (error) {
    console.error('Error fetching countries, checking cache and local data:', error)
    
    // 3. Si falló el fetch, intentar usar localStorage aunque haya expirado
    const cachedData = localStorage.getItem(CACHE_KEY)
    if (cachedData) {
      const { data } = JSON.parse(cachedData)
      return data
    }
    
    // 4. Si no hay nada en cache, usar datos locales
    return localCountriesData.countries.map((res) => ({
      id: res?.cca3,
      name: res?.name?.common || res?.name?.official || res?.name?.nativeName?.common,
      image: res?.flags && res?.flags.png,
      continent: res?.continents && res?.continents.map((el) => el),
      capital: res?.capital
        ? res?.capital.map((el) => el)
        : ['no data'],
      subregion: res?.subregion,
      area: res?.area,
      population: res?.population
    }))
  } 
}

