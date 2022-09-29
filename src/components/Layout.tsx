import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import HeaderPages from './HeaderPages'
import Footer from './Footer'

// represents all the children of the layout
const Layout: React.FC = () => {

  const pathname = window.location.pathname

  return (
    <>
      {pathname === '/' 
        ? (<Header />) 
        : (<HeaderPages />)
      }
      
      <main className='App'>
          <Outlet />
      </main>
      <Footer />
    </>
    
  )
}

export default Layout