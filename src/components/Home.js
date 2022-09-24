import React from 'react'
import { SiHomeadvisor } from 'react-icons/si';
import { GiReceiveMoney, GiMagnifyingGlass } from 'react-icons/gi';
import { BiHelpCircle } from 'react-icons/bi';

import image1 from '../images/jurica-koletic-7YVZYZeITc8-unsplash.jpg'

const Home = () => {
  return (
    <>
      <section id="featured-homes" className="bg-white">
        <div className="mx-auto container px-40 py-40">
          <h2>Featured Homes</h2>
        </div>
      </section>
      <section id="callback1" className="h-screen mb-12 bg-fixed bg-center bg-cover custom-img max-h-[200px]">
        <div className="mx-auto container">
        <div className="overlay-light"></div>
          <h2 className="text-3xl text-white pt-20 relative">Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin meatloaf. Flank tongue turducken chicken tail jerky.</h2>
          <div className="mx-auto container columns-4 flex justify-center align-middle space-x-1 mt-[50px] mb-[50px] z-10 relative">
              <div className="flex flex-col text-center align-middle justify-center hero-boxes2 px-20 py-5 text-white">
                <GiMagnifyingGlass className="text-6xl w-full mb-3"/>
                <h3 className="mb-0">Looking to Buy</h3>
              </div>
              <div className="flex flex-col text-center align-middle justify-center hero-boxes2 px-20 py-5 text-white">
                <GiReceiveMoney className="text-6xl w-full mb-3"/>
                <h3 className="mb-0">Sell your home</h3>
              </div>
              <div className="flex flex-col text-center align-middle justify-center hero-boxes2 px-20 py-5 text-white">
                <SiHomeadvisor className="text-6xl w-full mb-3"/>
                <h3 className="mb-0">Rent A Place</h3>
              </div>
              <div className="flex flex-col text-center align-middle justify-center hero-boxes2 px-20 py-5 text-white">
                <BiHelpCircle className="text-6xl w-full mb-3"/>
                <h3 className="mb-0">Need Help?</h3>
              </div>
          </div>
        </div>
      </section>
      <section id="types">
        <div className="mx-auto container mb-20 mt-20 overflow-hidden">
          <h2 className="text-3xl">Search different properties...</h2>
          <p className="mb-10">Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin meatloaf. Flank tongue turducken chicken tail jerky.Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin meatloaf. Flank tongue turducken chicken tail jerky.</p>
          <div className="flex columns-3 space-x-6 mb-6">
            <div className="min-w-[23%] min-h-full">
              <a href="/" className="no-underline">
                <div className="flex flex-col align-middle min-h-full justify-center py-32 relative whole-bg apartment">
                    <p className="text-white text-2xl no-underline uppercase z-10">Apartments</p>
                    <p className="text-white text-sm no-underline z-10">29 Properties</p>
                    <div className="overlay-light2"></div>
                </div>
              </a>
            </div>
            <div className="min-w-[23%] min-h-full">
              <a href="/" className="no-underline">
                <div className="flex flex-col align-middle min-h-full justify-center p-4 relative whole-bg multi">
                    <p className="text-white text-2xl no-underline uppercase z-10">Multi Family Home</p>
                    <p className="text-white textsm no-underline z-10">29 Properties</p>
                    <div className="overlay-light2"></div>
                </div>
              </a>
            </div>
            <div className="min-w-[50%] min-h-full">
              <a href="/" className="no-underline">
                <div className="flex flex-col align-middle min-h-full justify-center p-4 relative whole-bg single">
                    <p className="text-white text-2xl no-underline uppercase z-10">Single Family Home</p>
                    <p className="text-white textsm no-underline z-10">29 Properties</p>
                    <div className="overlay-light2"></div>
                </div>
              </a>
            </div>
          </div> {/* end of type */}
          <div className="flex columns-3 space-x-6 mb-6">
            <div className="min-w-[50%] min-h-full relative">
              <a href="/" className="no-underline">
                <div className="flex flex-col align-middle min-h-full justify-center py-32 relative whole-bg studio">
                    <p className="text-white text-2xl no-underline uppercase z-10">Studio</p>
                    <p className="text-white textsm no-underline z-10">29 Properties</p>
                    <div className="overlay-light2"></div>
                </div>
              </a>
            </div>
            <div className="min-w-[23%] min-h-full relative">
              <a href="/" className="no-underline">
                <div className="flex flex-col align-middle min-h-full justify-center p-4 relative whole-bg condo">
                    <p className="text-white text-2xl no-underline uppercase z-10">Condo</p>
                    <p className="text-white textsm no-underline z-10">29 Properties</p>
                    <div className="overlay-light2"></div>
                </div>
              </a>
            </div>
            <div className="min-w-[23%] min-h-full">
              <a href="/" className="no-underline">
                <div className="flex flex-col align-middle min-h-full justify-center p-4 relative whole-bg office">
                    <p className="text-white text-2xl no-underline uppercase z-10">Office</p>
                    <p className="text-white textsm no-underline z-10">29 Properties</p>
                    <div className="overlay-light2"></div>
                </div>
              </a>
            </div>
          </div> {/* end of type */}
        </div>
      </section>
      <section id="callback2" className="h-screen mb-12 bg-fixed bg-center bg-cover custom-img2 max-h-[200px]">
        <div className="mx-auto container">
        <div className="overlay-light"></div>
          <h2 className="text-3xl text-white pt-20 relative">Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin meatloaf. Flank tongue turducken chicken tail jerky.</h2>
          <div className="mx-auto container columns-4 flex justify-center align-middle space-x-1 mt-[50px] mb-[50px] z-10 relative">
              <div className="flex flex-col text-center align-middle justify-center hero-boxes2 px-20 py-5 text-white">
                <GiMagnifyingGlass className="text-6xl w-full mb-3"/>
                <h3 className="mb-0">Looking to Buy</h3>
              </div>
              <div className="flex flex-col text-center align-middle justify-center hero-boxes2 px-20 py-5 text-white">
                <GiReceiveMoney className="text-6xl w-full mb-3"/>
                <h3 className="mb-0">Sell your home</h3>
              </div>
              <div className="flex flex-col text-center align-middle justify-center hero-boxes2 px-20 py-5 text-white">
                <SiHomeadvisor className="text-6xl w-full mb-3"/>
                <h3 className="mb-0">Rent A Place</h3>
              </div>
              <div className="flex flex-col text-center align-middle justify-center hero-boxes2 px-20 py-5 text-white">
                <BiHelpCircle className="text-6xl w-full mb-3"/>
                <h3 className="mb-0">Need Help?</h3>
              </div>
          </div>
        </div>
      </section>
      <section id="agents" className="bg-[#f8f8f8] p-32">
          <div className="mx-auto container">
            <h1 className="text-3xl">Meet our Agents</h1>
            <p className="mb-8">Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin meatloaf. Flank tongue turducken chicken tail jerky.Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin meatloaf.</p>
            <div className="flex align-middle justify-center columns-4 space-x-1">
              <div className="py-5 px-6 text-center bg-white agent">
                <img className="rounded-[50%] mb-4 mx-auto" height="150" width="150" src={image1} alt=""/>
                <h3 className="mb-0 text-[#e57677] font-bold">John Doe</h3>
                <p className="mb-6 font-bold">Agent, Modern Real Estate</p>
                <p className="mb-3">Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin.Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin.</p>
              </div>
              <div className="py-5 px-6 text-center bg-white agent">
                <img className="rounded-[50%] mb-4 mx-auto" height="150" width="150" src={image1} alt=""/>
                <h3 className="mb-0 text-[#e57677] font-bold">John Doe</h3>
                <p className="mb-6 font-bold">Agent, Modern Real Estate</p>
                <p className="mb-3">Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin.Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin.</p>
              </div>
              <div className="py-5 px-6 text-center bg-white agent">
                <img className="rounded-[50%] mb-4 mx-auto" height="150" width="150" src={image1} alt=""/>
                <h3 className="mb-0 text-[#e57677] font-bold">John Doe</h3>
                <p className="mb-6 font-bold">Agent, Modern Real Estate</p>
                <p className="mb-3">Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin.Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin.</p>
              </div>
              <div className="py-5 px-6 text-center bg-white agent">
                <img className="rounded-[50%] mb-4 mx-auto" height="150" width="150" src={image1} alt=""/>
                <h3 className="mb-0 text-[#e57677] font-bold">John Doe</h3>
                <p className="mb-6 font-bold">Agent, Modern Real Estate</p>
                <p className="mb-3">Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin.Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin.</p>
              </div>
            </div>
          </div>
      </section>
    </>
  )
}

export default Home