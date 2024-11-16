import { Link } from 'react-router-dom'


export const LandingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen text-center m-0 p-0 bg-no-repeat bg-cover bg-[url('https://c.tenor.com/t9G5ZkLMlccAAAAC/earth-planet.gif')] object-cover">
      <div className="flex flex-col items-center">
        <h1 className="text-center relative top-[-5rem] md:text-left transition-[1.6s] text-[#e4b1ad] text-5xl md:text-7xl font-[1000] font-serif"> Proyect Countries</h1>
      </div>
      <div>
        <Link to='/home'>
          <button className="font-extrabold font-serif text-4xl p-3 rounded-full cursor-pointer text-[#daa6e7] mt-2 hover:text-[#542a5f]">START</button>
        </Link>
      </div>
    </div>
  )
}