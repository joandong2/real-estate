import React from 'react'

const Header = () => {
  return (
    <>
      <section id="header">
        <div className="bg-image"></div>
        <div className="overlay"></div>
        <div className="container mx-auto flex justify-between pt-4 mb-10 relative">
          <div>
            <h1 className="font-dancing text-white text-4xl">Real-estate</h1>
          </div>
          <div className="flex justify-between align-middle">
            <ul className="flex space-x-4 align-middle mt-4">
              <a href="/">Home</a>
              <a href="/">Listing</a>
              <a href="/">About</a>
              <a href="/">Contact Us</a>
            </ul>
            <button className="ml-10 border-solid text-white">Create A Listing</button>
          </div>
        </div>
        <div className="container mx-auto flex flex-col space-y-4 text-white justify-center align-middle text-center mt-9 relative min-h-[200px]">
          <h1 className="text-6xl font-dancing">Welcome to Real-estate</h1>
          <p>Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin meatloaf. Flank tongue turducken chicken tail jerky. T-bone andouille leberkas, pig spare ribs buffalo tail doner landjaeger.Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin meatloaf. Flank tongue turducken chicken tail jerky. T-bone andouille leberkas, pig spare ribs buffalo tail doner landjaeger.</p>
        </div>
      </section>
      <section id="hero" className="bg-red-400 pb-20">
        <div className="columns-3 flex container mx-auto justify-center align-middle space-x-3"> 
          <div className="hero-boxes p-4 bg-transparent text-white">
            <h4>Easy to access</h4>
            <p className="mb-4">Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin meatloaf. Flank tongue turducken chicken tail jerky.</p>
            <a href="/">Read More</a>
          </div>
          <div className="hero-boxes p-4 bg-transparent text-white">
            <h4>Easy to access</h4>
            <p className="mb-4">Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin meatloaf. Flank tongue turducken chicken tail jerky.</p>
            <a href="/">Read More</a>
          </div>
          <div className="hero-boxes p-4 bg-transparent text-white">
          <h4>Easy to access</h4>
            <p className="mb-4">Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin meatloaf. Flank tongue turducken chicken tail jerky.</p>
            <a href="/">Read More</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header