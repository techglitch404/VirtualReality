import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Workflow from '../components/Workflow'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='max-w-7xl mx-auto pt-20 px-6'>
      <Hero />
      <Features />
      <Workflow />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Home