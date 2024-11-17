import Alphabet from "../buttons/Alphabet"
import FilterByContinents from "../buttons/FilterByContinents"
import SearchActivity from "../buttons/SearchActivity"
import CreateActivity from "../buttons/CreateActivity"

const NavBar = () => {

  return (
    <nav className="hidden sm:flex dark:bg-gray-700 sm:container sm:mx-auto sm:justify-around pb-2 sm:items-center shadow-md dark:shadow-none">
      <Alphabet/>
      <FilterByContinents />
      <SearchActivity />
      <CreateActivity />
    </nav>  
  )
}

export default NavBar