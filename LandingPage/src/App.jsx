import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Project from './Projects'
import Footer from './Footer'
import Card from './Card'


function App() {

  return (
    <>
    <Header/>
     {/* Features Section */}
    <section id="features" className="container mx-auto py-16 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"> Features  </h2>
      <div className="grid md:grid-cols-3 gap-8">

       <Card icon = "🚀"  title = "Fast Performance" description = "Experience lightning-fast performance with minimal effort."/>
       <Card icon = "🎨"  title = " Beautiful Design" description = " Create stunning designs effortlessly with Tailwind CSS."/>
       <Card icon = "🔒"  title = "Secure &amp; Reliable" description = "Built with security and reliability at its core."/>

      </div>
    </section>
    <Project/>
     <Footer/>
 </>
  )
}

export default App
