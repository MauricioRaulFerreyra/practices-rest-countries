import PropTypes from "prop-types"
import Card from "../card/Card"
import { useSelector } from "react-redux"
import Details from "../details/Details";

const CountryList = ({country}) => {
  // Desestructuramos los estados que necesitamos
  const { countries, loading, error } = useSelector((state) => state.countries)
  const { currentPage } = useSelector((state) => state.pagination)
  const countriesPerPage = 10;
  
  const getPaginatedCountries = () => {
    const countriesToUse = countries.length > 0 ? countries : country;
    
    // Si solo hay un país, es porque es una búsqueda específica
    if (countriesToUse?.length === 1) {
      return countriesToUse[0];
    }
    
    // Si tenemos países, aplicamos la paginación
    if (Array.isArray(countriesToUse)) {
      const startIndex = (currentPage - 1) * countriesPerPage;
      return countriesToUse.slice(startIndex, startIndex + countriesPerPage);
    }
    
    // Si no hay datos disponibles, retornamos un array vacío
    return [];
  };

  const currentCountries = getPaginatedCountries();
  
  // Manejo de estados de carga y error
  if (loading) {
    return (
      <div className="flex justify-center items-center p-4 font-semibold text-4xl">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center p-4 font-semibold text-xl text-red-500">
        {error}
      </div>
    );
  }

  // Si no hay países disponibles
  if (!countries?.length && !country?.length) {
    return (
      <div className="flex justify-center items-center p-4 font-semibold text-4xl">
        No hay países disponibles
      </div>
    );
  }

  // Si currentCountries es un objeto (país único), mostramos Details
  if (!Array.isArray(currentCountries)) {
    return <Details />;
  }

  // Renderizado normal de la lista de países
  return (
    <div className={`mx-1 w-[99%] grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-2`}>
      {
        currentCountries?.map((country) => (
          <Card
            key={country.id}
            id={country.id}
            image={country.image}
            name={country.name}
            population={country.population}
          />
      ))}
    </div>
  );
};

CountryList.propTypes = {
  country: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string,
      population: PropTypes.number
    })
  )
};

export default CountryList;