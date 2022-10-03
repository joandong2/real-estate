import React from 'react'
import { SiHomeadvisor } from 'react-icons/si';
import { GiReceiveMoney, GiMagnifyingGlass } from 'react-icons/gi';
import { BiHelpCircle } from 'react-icons/bi';
import InquiryFormHome from '../InquiryFormHome';

const Callback2 = () => {
  return (
    <>
        <section id="callback2" className="h-screen bg-fixed bg-center bg-cover custom-img2 p-20">
        <div className="mx-auto container text-left">
          <div className="overlay-light"></div>
          <div className="flex justify-between align-middle z-10">
            <div className="w-[50%] relative">
              <h2 className="text-2xl text-white relative">Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin meatloaf. Flank tongue turducken chicken tail jerky.</h2>
              <div className="border-t-[1px] bg-gray-400 w-[100%] h-[1px] mb-8"></div>
              <p className="text-white relative">Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin meatloaf. Flank tongue turducken chicken tail jerky.Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin meatloaf. Flank tongue turducken chicken tail jerky.Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin meatloaf. Flank tongue turducken chicken tail jerky.</p>
            </div>
            <div className="w-[40%] relative p-8 bg-white">
              <InquiryFormHome />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Callback2