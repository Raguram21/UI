import React from 'react'
import Header from './Header';
import Cards from './Cards';
import TabelsCards from './TabelsCards';
import Footer from './Footer';
import HeaderStrip from './HeaderStrip';

export default function Home() {
  return (
    <>
    <div className="flex flex-col min-h-screen px-2 bg-slate-200">
    <header className=" text-center py-4">
        <HeaderStrip name="Dashboard"></HeaderStrip>
      </header>
      <main className="flex-1">
        <Header/>
        <Cards/>
        <TabelsCards/>
      </main>
      <footer className="text-center">
        <Footer/>
      </footer>
    </div>
    </>
  )
}