import React from 'react'


const App = () => {
  return (
    <div className='main w-full h-screen flex bg-zinc-400'>
      <div className='leftsection w-[30%] h-screen bg-black'>
        <h1 className='Portfolio text-2xl text-white font-semibold px-20 py-3 ml-10'>PROTOFILO.</h1>
        <h1 className='Portfoliotext text-3xl text-white font-semibold px-20 mt-[80%] ml-[10%]' >MY NAME IS <br /> ABDULRAHMAN</h1>
        <button className='buttontext w-20px h-10px text-1xl text-white font-semibold bg-yellow-500 px-3 py-2 ml-[31%] mt-3 rounded'>I'M A UI DEVELOPER</button>
      </div>
      <div className='rightsection w-[70%] h-[92%] bg-gray-500'>
        <nav className='navbar w-20px h-25px bg-gray-800 flex justify-center gap-9 py-3 text-1xl font-semibold text-white'>
          <h2>HOME</h2>
          <h2>ABOUT</h2>
          <h2>WORKS</h2>
          <h2>BLOG</h2>
          <h2>CONTACT</h2>
        </nav>
        <img className="w-full h-full object-cover" src="/imageofman.avif" alt="Abdulrahman" />

      </div>
    </div>
  )
}

export default App



