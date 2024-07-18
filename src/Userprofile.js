import React from 'react'
import ProfileCards from './ProfileCards'
import HeaderStrip from './HeaderStrip'
import Footer from './Footer'

export default function Userprofile() {
  return (
    <>
    <div className="flex flex-col min-h-screen px-2 bg-slate-200">
    <header className=" text-center py-4">
        <HeaderStrip name="User Profile"></HeaderStrip>
      </header>
      <main className="flex-1">
        <ProfileCards/>
      </main>
      <footer className="text-center">
        <Footer/>
      </footer>
    </div>
    </>
  )
}
