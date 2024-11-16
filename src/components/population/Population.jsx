import { useDispatch } from "react-redux"
import { orderByPopulation } from "../../redux/sliceCountries"

const OrderByPopulation = () => {

  const dispatch = useDispatch()

  const handleOrderByPopulation = (e) => {
    dispatch(orderByPopulation(e.target.value))
  }

  return (
    <aside className="p-1 cursor-pointer">
      <select onChange={handleOrderByPopulation} className="outline-none w-3/4 p-1 font-bold border-transparent rounded bg-gradient-to-b from-[#f5b7b1] to-[#cb4335] cursor-pointer text-[#201d1d] hover:text-white hover:bg-gradient-to-b hover:from-[#cb4335] hover:to-[#f5b7b1] duration-1000 active:scale-75 transition-transform sm:w-full">
        <option className="font-bold text-sm bg-[#ec857c] cursor-pointer p-1 text-[rgb(20,20,20)]">Population</option>
        <option className="bg-[#ec857c] font-bold text-sm cursor-pointer p-1 text-[rgb(20,20,20)]" value="higher" >higher population</option>
        <option className="bg-[#ec857c] font-bold text-sm cursor-pointer p-1 text-[rgb(20,20,20)]" value="less">less population</option>
      </select>
    </aside>
  )

}

export default OrderByPopulation