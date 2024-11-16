import PropTypes from "prop-types"

const Back = ({handleBack}) => {
  return (
    <div>
      <button onClick={e => handleBack(e)} className="font-bold px-1.5 py-1 border-transparent rounded bg-gradient-to-b from-[#f5b7b1] to-[#cb4335] cursor-pointer text-[#201d1d] hover:text-white hover:bg-gradient-to-b hover:from-[#cb4335] hover:to-[#f5b7b1] duration-1000 active:scale-75 transition-transform">
        Back
      </button>
    </div>
  )
}

Back.propTypes = {
  handleBack: PropTypes.func.isRequired
}

export default Back