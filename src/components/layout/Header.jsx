import OrderByPopulation from "../population/Population"
import ThemeToggle from "../themeToggle/ThemeToggle"
import { useNavigate } from "react-router-dom"
import Back from "../buttons/Back"
import Reload from "../buttons/Reload"
import Search from "../buttons/Search"
import NavBar from "./NavBar"

const Header = () => {

  const navigate = useNavigate()
  
  function handleBack (e) {
    e.preventDefault()
    setTimeout(() => {
      navigate('/');
    }, 300);
  }

  return (
    <header className="flex flex-col bg-white dark:bg-gray-700">
      <div className="container mx-auto p-2 flex justify-between items-center">
        <Back handleBack={handleBack} />
        <Reload />
        <Search/>
        <OrderByPopulation />
        <ThemeToggle />
      </div>
      <div className="container py-2">
        <NavBar/>
      </div>
    </header>
  )
}

export default Header; 