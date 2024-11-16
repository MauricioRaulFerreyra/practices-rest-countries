import { useNavigate } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const Card = ({id,image,name,population}) => {

  const navigate = useNavigate()

  const handleDetail = (id) => {
    navigate(`/details/${id}`)
  }

  return (
    <div>
      <div onClick={()=>handleDetail(id)} className="w-full h-full flex flex-col border border-slate-300 border-opacity-100 rounded-lg cursor-pointer bg-slate-100 hover:bg-slate-300">
        <div className="flex justify-center items-center">
          <h4 className="text-slate-500 font-semibold text-xl sm:text-lg md:text-base">{name}</h4>
        </div>
        <div className="px-1">
          <img className="w-full h-52 sm:h-48 object-cover rounded-[0.2rem]" src={image} alt={name} />
        </div>
        {/* <div className="h-[15%] flex justify-center items-center">
          <h6 className="text-[#01161a] font-semibold">{continent}</h6>
        </div> */}
        <div className="flex justify-center items-center">
          <h6 className="text-slate-500 font-semibold text-lg sm:text-base">population: {population}</h6>
        </div> 
      </div>
    </div>
  )
}

export default Card;