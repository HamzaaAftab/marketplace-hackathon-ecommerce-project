'use client'
import Navbar from '@/app/(components)/Navbar'
import FeaturesSection from '@/app/(components)/FeaturesSection'
import Footer from '@/app/(components)/Footer'
import ContactForm from '@/app/(components)/ContactForm'
const page = () => {
  return (
    <div>
        <Navbar/>
        <ContactForm/>
        <FeaturesSection/>
        <Footer/>
    </div>
  )
}

export default page
