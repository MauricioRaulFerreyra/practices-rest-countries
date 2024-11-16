
import { fetchData } from "../services/fetchData"
import { URL_COUNTRIES } from "../constants"

// Function to get all countries data

const getAllCountries = fetchData(URL_COUNTRIES)

export function countries () {
  try{
    const data = getAllCountries?.read()
    return data?.map((res) => ({
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
  } catch (error) {
    console.error('Error fetching countries:', error);
    throw error; 
  } 
}

