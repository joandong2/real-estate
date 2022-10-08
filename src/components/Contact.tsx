import React from 'react'
import InquiryFormHome from './InquiryFormHome'

const Contact:React.FC = () => {
  return (
    <div className="container mx-auto">
        <div className="flex columns-2 space-x-8 mb-8">
            <div className="w-3/4">
                <div className="bg-white p-6 mb-5 text-left">
                    <h1 className="font-bold text-lg">Contact Us</h1>
                    <p>Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin meatloaf. Flank tongue turducken chicken tail jerky. T-bone andouille leberkas, pig spare ribs buffalo tail doner landjaeger.Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin meatloaf. Flank tongue turducken chicken tail jerky. T-bone andouille leberkas, pig spare ribs buffalo tail doner landjaeger.Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin meatloaf. Flank tongue turducken chicken tail jerky. T-bone andouille leberkas, pig spare ribs buffalo tail doner landjaeger.Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin meatloaf. Flank tongue turducken chicken tail jerky. T-bone andouille leberkas, pig spare ribs buffalo tail doner landjaeger.</p>
                    <InquiryFormHome />
                </div>
            </div>
            <div className="w-1/4">
                <div className="bg-white p-6 mb-5 text-left">
                    <p className="font-bold mb-3">Contact Us:</p>
                    <div className="mb-4">
                        <p className="font-bold">John Oblenda</p>
                        <p>johnoblenda@gmail.com</p>
                        <p>+1 908 635 2194</p>
                        <p>New Jersey</p>
                    </div>
                    <div className="mb-4">
                        <p className="font-bold">John Oblenda</p>
                        <p>johnoblenda@gmail.com</p>
                        <p>+1 908 635 2194</p>
                        <p>New Jersey</p>
                    </div>
                    <div className="mb-4">
                        <p className="font-bold">John Oblenda</p>
                        <p>johnoblenda@gmail.com</p>
                        <p>+1 908 635 2194</p>
                        <p>New Jersey</p>
                    </div>
                </div>
                <div className="bg-white p-6 mb-5 text-left">
                    <p className="font-bold mb-3">Main Office:</p>
                    <p>Bridgewater, New Jersey 08807</p>
                    <p className="font-bold mb-3">Extended Office:</p>
                    <p>Bridgewater, New Jersey 08807</p>
                </div>
            </div>
        </div>
        <div className="mapouter mb-8">
            <div className="gmap_canvas">
                <iframe title="address" src="https://maps.google.com/maps?q=bridgewater%20new%20jersey&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" id="gmap_canvas" frameBorder="0" scrolling="no" width="100%"></iframe>
            </div>
        </div>
    </div>
  )
}

export default Contact