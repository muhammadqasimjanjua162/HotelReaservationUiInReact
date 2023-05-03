import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/Header/Header'
import Featured from '../../components/featured/Featured'
import '../home/home.css'
import Propertylist from '../../components/propertyList/Propertylist';
import FeaturedProperties from '../../components/featuredProperty/FeaturedProperties'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'


const Home = () => {
  return (
    <div>
    <Navbar/>
    <Header/>
    <div className="homeContainer">
      <Featured/>
      <h1 className="homeTitle">Browse by property type</h1>
      <Propertylist/>
      <h1 className="homeTitle">Homes guests love</h1>
      <FeaturedProperties/>
      <MailList/>
      <Footer/>
      
    </div>
      
    </div>
  )
}

export default Home
