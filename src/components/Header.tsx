import React from 'react'
import { SiHomebridge } from 'react-icons/si'

const Header: React.FC = () => {
  return (
    <>
      <section id="header">
        <div className="bg-image"></div>
        <div className="overlay"></div>
        <div className="container mx-auto flex align-middle justify-between items-center mb-10 relative flex-col md:flex-row">
          <div>
            <h1 className="font-dancing text-white text-2xl mb-0"><a href="/" className="no-underline text-white"><SiHomebridge className="inline-block" /> real-estate</a></h1>
          </div>
          <div className="flex justify-between align-middle">
            <ul className="flex space-x-4 align-middle">
              <a className="no-underline text-white py-5 px-3 hover:bg-white/[.30]" href="/">Home</a>
              <a className="no-underline text-white py-5 px-3 hover:bg-white/[.30]" href="/">Listing</a>
              <a className="no-underline text-white py-5 px-3 hover:bg-white/[.30]" href="/">About</a>
              <a className="no-underline text-white py-5 px-3 hover:bg-white/[.30]" href="/">Contact Us</a>
            </ul>
            {/* <button className="ml-10 border-solid text-white">Create A Listing</button> */}
          </div>
        </div>
        <div className="container mx-auto flex flex-col space-y-4 text-white justify-center align-middle text-center mt-9 relative min-h-[200px]">
          <h1 className="text-6xl font-dancing">Welcome to real-estate</h1>
          <p>Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin meatloaf. Flank tongue turducken chicken tail jerky. T-bone andouille leberkas, pig spare ribs buffalo tail doner landjaeger.Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin meatloaf. Flank tongue turducken chicken tail jerky. T-bone andouille leberkas, pig spare ribs buffalo tail doner landjaeger.</p>
        </div>
      </section>
      <section id="hero" className="bg-red-400 pb-20">
        <div className="columns-3 flex container mx-auto justify-center align-middle space-x-3 text-center"> 
          <div className="hero-boxes p-4 bg-transparent text-white cursor-pointer">
            <h4>Easy to access</h4>
            <p className="mb-4">Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin meatloaf. Flank tongue turducken chicken tail jerky.</p>
            <a href="/" className="text-white hover:text-slate-300">Read More</a>
          </div>
          <div className="hero-boxes p-4 bg-transparent text-white cursor-pointer">
            <h4>Easy to access</h4>
            <p className="mb-4">Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin meatloaf. Flank tongue turducken chicken tail jerky.</p>
            <a href="/" className="text-white hover:text-slate-300">Read More</a>
          </div>
          <div className="hero-boxes p-4 bg-transparent text-white cursor-pointer">
          <h4>Easy to access</h4>
            <p className="mb-4">Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin meatloaf. Flank tongue turducken chicken tail jerky.</p>
            <a href="/" className="text-white hover:text-slate-300">Read More</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header