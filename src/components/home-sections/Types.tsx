import React from 'react'

const Types: React.FC = () => {
  return (
    <>
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
    </>
  )
}

export default Types