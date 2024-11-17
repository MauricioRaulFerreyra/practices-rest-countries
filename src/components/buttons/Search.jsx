import { useState } from "react"
import { searchByName, startLoading, setError } from "../../redux/sliceCountries"
import { setPage } from "../../redux/slicePagination"
import { useDispatch, useSelector } from "react-redux"

const Search = () => {
  const [name, setName] = useState('')
  const dispatch = useDispatch()
  
  // Obtener estados del slice
  const { countries, loading, error } = useSelector(state => state.countries)

  const validate = value => {
    if (!value.trim()) {
      return 'Required field'
    }

    if (!Array.isArray(countries)) {
      return 'Error loading countries'
    }

    const findCountry = countries?.find(el =>
      el.name.toLowerCase().includes(value.toLowerCase())
    )

    if (findCountry === undefined) {
      return 'Country not found'
    }

    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationError = validate(name)

    if (validationError) {
      dispatch(setError(validationError))
      return
    }

    try {
      dispatch(startLoading())
      dispatch(searchByName(name))
      dispatch(setPage(1))
      setName('')
    } catch (err) {
      dispatch(setError(err.message || 'Error searching country'))
    }
  }

  const handleChange = e => {
    setName(e.target.value)
    // Si hay un error, lo limpiamos cuando el usuario empiece a escribir
    if (error) {
      dispatch(setError(null))
    }
  }
  
  return (
    <div className="mx-1">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div className="flex gap-2">
          <input
            type='text'
            placeholder='search country'
            value={name}
            onChange={handleChange}
            className="bg-slate-100 outline-none px-2"
            name='name'
            disabled={loading}
          />
          <button 
            type="submit"
            className="font-semibold px-1 py-1 border-transparent rounded bg-gradient-to-b from-[#f5b7b1] to-[#cb4335] cursor-pointer text-[#201d1d] hover:text-white hover:bg-gradient-to-b hover:from-[#cb4335] hover:to-[#f5b7b1] duration-1000 active:scale-75 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>
        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}
      </form>
    </div>
  )
}

export default Search