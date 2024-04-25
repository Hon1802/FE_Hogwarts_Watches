// layoutHome.tsx
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { LoadingBackground } from '../loading'
import Header from './Header'
import Footer from './Footer'
import Support from './Support'
import { Suspense } from 'react'

const LayoutHome: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true)

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget
    const position = Math.ceil((scrollTop / (scrollHeight - clientHeight)) * 100)
    const header = document.getElementById('header-id')
    if (header) {
      if (position >= 3) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }
  }

  const scrollToTop = () => {
    document.getElementById('stone-scroll')?.scrollIntoView({ behavior: 'smooth' })
  }

  React.useEffect(() => {}, [isVisible])
  // Now the vertical position is available with `scrollYPosition`
  return (
    <div className='layout full-w full-h' style={{ overflowY: 'auto' }} onScroll={handleScroll}>
      <div id='stone-scroll'></div>
      <header id='header-layout-1'>
        <title>Kids Shop</title>
        <Header />
      </header>
      <main id='main-layout-1'>
        {/* {children} */}
        <Suspense fallback={<LoadingBackground />}>
          <Outlet />
        </Suspense>
        {!isVisible && (
          <button id='btn-on-top' onClick={scrollToTop} className={isVisible ? '' : 'rotate-90'}>
            &#10095;
          </button>
        )}
        <div className='btn-sup'>
          <Support />
        </div>
      </main>
      <footer id='footer-layout-1'>
        <Footer />
      </footer>
    </div>
  )
}
export default LayoutHome
