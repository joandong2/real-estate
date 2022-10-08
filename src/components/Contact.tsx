import React from 'react'

const Contact:React.FC = () => {
  return (
    <div className="container mx-auto">
        <div className="flex columns-2 space-x-8 mb-8">
            <div className="w-3/4">
                <div className="bg-white p-6 mb-5 text-left">

                </div>
            </div>
            <div className="w-1/4">
                <div className="bg-white p-6 mb-5 text-left">
                    
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