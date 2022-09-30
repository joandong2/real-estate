import React from 'react'
import { GoLocation } from 'react-icons/go';
import { 
  AiOutlinePhone, 
  AiOutlineMail, 
  AiFillFacebook, 
  AiFillTwitterCircle, 
  AiFillInstagram } 
from 'react-icons/ai';
import Newsletter from './Newsletter';

const Footer: React.FC = () => {
  return (
    <>
      <section id="clients" className="border-t-[1px]">
        <div className="mx-auto container p-10">
          <div className="flex columns-6 space-x-5 gap-32 algin-middle justify-between">
            <p>Company1</p>
            <p className="font-dancing">Company2</p>
            <p>Company3</p>
            <p className="font-dancing">Company4</p>
            <p>Company5</p>
            <p className="font-dancing">Company6</p>
          </div>
        </div>
      </section>
      <section id="footer" className="bg-lightBlack text-white">
        <div className="container mx-auto flex justify-between align-middle py-8 space-x-6">
          <div className="min-w-[25%]">
            <h3>About Us</h3>
            <p className="mb-6">Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin meatloaf. Flank tongue turducken chicken tail jerky. T-bone andouille leberkas, pig spare ribs buffalo tail doner landjaeger.</p>
            <a href="/about" className="text-red-500">Read More</a>
          </div>
          <div className="min-w-[25%]">
            <h3>Contact Us</h3>
            <ul>
              <li className="mb-3"><p><GoLocation className="inline-block mr-2"/> 1234 Test Blvd, Testing, NJ 08876</p></li>
              <li className="mb-3"><p><AiOutlinePhone className="inline-block mr-2"/> Call Us +1 908 635 2828</p></li>
              <li className="mb-3"><p><AiOutlineMail className="inline-block mr-2"/> johnoblenda@gmail.com</p></li>
            </ul>
          </div>
          <div className="min-w-[50%]">
            <h3>Newsletter</h3>
            <p>Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin meatloaf. Flank tongue turducken chicken tail jerky. T-bone andouille leberkas, pig spare ribs buffalo tail doner landjaeger.</p>
            <Newsletter />
          </div>
        </div>
      </section>
      <section id="footer-copy" className="bg-black">
        <div className="flex justify-between columns-3 mx-auto container py-4 text-white">
          <div>&copy; Estates - All Rights Reserved.</div>
          <div>
            <ul className="flex space-x-2">
              <li><a href="/" className="text-white">Privacy</a></li>
              <li><a href="/" className="text-white">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <ul className="flex space-x-2 text-lg">
              <li><a href="/" className="text-white"><AiFillFacebook /></a></li>
              <li><a href="/" className="text-white"><AiFillTwitterCircle /></a></li>
              <li><a href="/" className="text-white"><AiFillInstagram /></a></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer