import { countries } from "../../models/countries"
import { getAll } from "../../redux/sliceCountries"
import CountryList from "../countryList/CountryList"
import { useDispatch } from "react-redux"

const CountryListWithSuspense = () => {

  const data = countries()
  const dispatch = useDispatch()
  dispatch(getAll(data))
  return <CountryList country={data} />
}

export default CountryListWithSuspense