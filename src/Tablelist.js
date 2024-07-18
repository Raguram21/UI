import React from 'react'
import Tabels from './Tabels'
import HeaderStrip from './HeaderStrip'
import Footer from './Footer'

export default function Tablelist() {
  return (
  <>
 <div className="flex flex-col min-h-screen px-3 bg-slate-200">
  
    <header className=" text-center py-4">
        <HeaderStrip name="Tablelist"></HeaderStrip>
      </header>
      <main className="flex-1">
        <Tabels/>
      </main>
    
    <footer className=" text-center">
        <Footer/>
      </footer>
    </div>
  </>
  )
}
