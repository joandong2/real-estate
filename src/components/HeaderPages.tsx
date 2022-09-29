import React from 'react'

const HeaderPages:React.FC = () => {
  return (
    <>
      <section id="HeaderPages" className="bg-red-400">
        <div className="container mx-auto flex justify-between pt-4 mb-10 relative flex-col md:flex-row">
          <div>
            <h1 className="font-dancing text-white text-2xl"><a className="no-underline text-white" href="/">real-estate</a></h1>
          </div>
          <div className="flex justify-between align-middle">
            <ul className="flex space-x-4 align-middle mt-2">
              <a href="/">Home</a>
              <a href="/">Listing</a>
              <a href="/">About</a>
              <a href="/">Contact Us</a>
            </ul>
            <button className="ml-10 border-solid text-white">Create A Listing</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeaderPages