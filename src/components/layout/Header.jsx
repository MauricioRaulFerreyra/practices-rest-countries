import OrderByPopulation from "../population/Population"
import ThemeToggle from "../themeToggle/ThemeToggle"
import Back from "../buttons/Back"
import Reload from "../buttons/Reload"
import Search from "../buttons/Search"
import NavBar from "./NavBar"

const Header = () => {

  return (
    <header className="flex flex-col bg-white dark:bg-gray-700">
      <div className="container mx-auto p-2 flex items-center justify-between">
        <Back />
        <Reload />
        <Search/>
        <OrderByPopulation />
        <ThemeToggle />
      </div>
      <NavBar/>
    </header>
  )
}

export default Header; 