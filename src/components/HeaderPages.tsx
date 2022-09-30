import React from 'react'
import { SiHomebridge } from 'react-icons/si'

const HeaderPages:React.FC = () => {
  return (
    <>
      <section id="HeaderPages" className="bg-red-400">
        <div className="container mx-auto flex justify-between mb-8 relative flex-col md:flex-row items-center">
          <div>
            <h1 className="font-dancing text-white text-2xl mb-0"><a className="no-underline text-white" href="/"><SiHomebridge className="inline-block" /> real-estate</a></h1>
          </div>
          <div className="flex justify-between align-middle">
            <ul className="flex space-x-4 align-middle">
              <a className="no-underline text-white py-5 px-3 hover:bg-white/[.30]" href="/">Home</a>
              <a className="no-underline text-white py-5 px-3 hover:bg-white/[.30]" href="/">Listing</a>
              <a className="no-underline text-white py-5 px-3 hover:bg-white/[.30]" href="/">About</a>
              <a className="no-underline text-white py-5 px-3 hover:bg-white/[.30]" href="/">Contact Us</a>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeaderPages