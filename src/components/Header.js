import React from 'react'

const Header = () => {
  return (
    <section id="header">
      <div className="container mx-auto flex justify-between mt-6 mb-10">
        <div>
          <h1 className="font-dancing text-red-500 text-3xl">estates</h1>
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
    </section>
  )
}

export default Header