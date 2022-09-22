import React from 'react'

const Header = () => {
  return (
    <>
      <section id="header">
        <div className="container mx-auto flex justify-between pt-4 mb-10">
          <div>
            <h1 className="font-dancing text-white text-4xl">estates</h1>
          </div>
          <div className="flex justify-between align-middle">
            <ul className="flex space-x-4 align-middle mt-2">
              <a href="/">Home</a>
              <a href="/">Listing</a>
              <a href="/">About</a>
              <a href="/">Contact Us</a>
            </ul>
            <button className="ml-10 border border-solid px-2 py-2 rounded bg-blue-300 text-white">Create A Listing</button>
          </div>
        </div>
        <div className="container mx-auto flex flex-col space-y-4 text-white justify-center align-middle text-center mt-9">
          <h1 className="text-6xl font-roboto">Welcome to Estates</h1>
          <p>Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin meatloaf. Flank tongue turducken chicken tail jerky. T-bone andouille leberkas, pig spare ribs buffalo tail doner landjaeger.Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin meatloaf. Flank tongue turducken chicken tail jerky. T-bone andouille leberkas, pig spare ribs buffalo tail doner landjaeger.</p>
        </div>
        <div className="overlay"></div>
      </section>
    </>
  )
}

export default Header