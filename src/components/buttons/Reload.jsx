import PropTypes from "prop-types"
import { countries } from "../../models/countries"
import { getAll } from "../../redux/sliceCountries"
import { useDispatch } from "react-redux"


const Reload = () => {

  const dispatch = useDispatch()
  
  const handleReload = (e) => {
    e.preventDefault()
    const data = countries()
    dispatch(getAll(data))
  }

  return (
    <div className="hidden md:block">
      <button onClick={e => handleReload(e)} className="font-bold px-1.5 py-1 border-transparent rounded bg-gradient-to-b from-[#f5b7b1] to-[#cb4335] cursor-pointer text-[#201d1d] hover:text-white hover:bg-gradient-to-b hover:from-[#cb4335] hover:to-[#f5b7b1] duration-1000 active:scale-75 transition-transform">
        Reload
      </button>
    </div>
  )
}

Reload.propTypes = {
  handleReload: PropTypes.func.isRequired
}

export default Reload