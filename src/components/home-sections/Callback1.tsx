import React from 'react'
import { SiHomeadvisor } from 'react-icons/si';
import { GiReceiveMoney, GiMagnifyingGlass } from 'react-icons/gi';
import { BiHelpCircle } from 'react-icons/bi';

const Callback1: React.FC = () => {
  return (
    <>
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
    </>
  )
}

export default Callback1