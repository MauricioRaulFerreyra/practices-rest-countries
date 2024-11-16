import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoading, setError, filterById} from "../../redux/sliceCountries";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Details = () => {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { id } = useParams()

  // Obtener estados del slice
  const { loading, error, details: country } = useSelector((state) => state.countries)

  useEffect(() => {
    // Simula una llamada para obtener todos los países si el estado está vacío
    if (!country) {
      dispatch(startLoading());
      // Simulación: sustituye esta línea con una llamada real a tu backend/API
      setTimeout(() => {
        try {
          dispatch(filterById(id))
        } catch (err) {
          dispatch(setError("Error fetching countries :" + err));
        }
      }, 1000);
    }
  }, [dispatch, country]);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error: {error}</div>;

  if (!country) return <div>Country not found</div>;

  function handleBack (e) {
    e.preventDefault()
    setTimeout(() => {
      navigate('/home');
    }, 300);
  }

  return (
    <div className="sticky top-0 left-0 m-0 py-1 w-auto h-auto box-border flex flex-col sm:flex-row items-center justify-center text-center bg-[url('https://cdn.pixabay.com/photo/2018/03/15/16/11/background-3228704_960_720.jpg')] bg-cover bg-no-repeat">
      <div className="flex flex-col w-full h-96 sm:w-[43%] sm:h-screen bg-gradient-to-r from-[rgba(245,248,248,0.308)] to-[rgba(197,181,179,0.7)] my-2 rounded-md sm:m-1">Country</div>
      <div className="flex flex-col items-center rounded-md bg-gradient-to-r from-[rgba(245,248,248,0.308)] to-[rgba(197,181,179,0.7)] w-[95%] h-96 my-1 sm:w-[55%] sm:h-screen sm:ml-1 relative">
      <button 
        onClick={handleBack} 
        className="absolute left-0 mx-1 my-2 p-2 px-6 py-3 rounded cursor-pointer bg-gradient-to-b from-blue-400/40 to-pink-200/70 text-gray-800 font-semibold tracking-wider hover:text-blue-800 hover:bg-gradient-to-t hover:from-white/30 hover:to-rose-300/80 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105"
      >
        Back
      </button>
        <div>
          <h3 className="text-[#1d1816] size-6">Activities</h3>
        </div>
        <div></div>  
      </div>  
    </div>
  )
}

export default Details;
