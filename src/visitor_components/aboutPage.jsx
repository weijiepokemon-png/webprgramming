//i am the about page with all the text
import { Link } from 'react-router-dom';
import { useState } from 'react';

import NormalPage from '../userHandling_component/normalpage';
import LoginSignup from '../userHandling_component/login-signup';

import Page from '../admin_components/admin_page'; 

import EditUserDetails from '../customer_components/editDetails';
import ViewOrderHistory from '../userHandling_component/vieworderhistory';

import Checkout from '../userHandling_component/checkout';

import LoginButton from '../admin_components/login'
import HomeButton from './homeButton';
import SearchBar from './searchBar';
import CartButton from './cartButton';
import Testbackend1 from '../database_components/test';
function AboutPage(){
//just the home button at the top to return
//then wall of text


    return(<div>

 <div className="d-flex align-items-center gap-3">
      <HomeButton />
     
    </div>
    <h1 className='bg-primary'> About US</h1>

   <div className="about-page">

      <section className="hero">
        <div className="hero-content">
          <h1>Entertainment Guild</h1>
          <h3>Let Us Entertain You</h3>
          <p>
            Bringing the world of entertainment closer to you through
            premium products, exclusive collections, and unforgettable experiences.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-card">
          <h2>Who We Are</h2>

          <p>
            Entertainment Guild is a leading online platform dedicated to
            providing high-quality entertainment products for customers of all
            ages. Whether you're passionate about gaming, movies, music,
            collectibles, or the latest entertainment technology, we have
            something for everyone.
          </p>

          <p>
            Our team carefully selects products from trusted suppliers to ensure
            quality, reliability, and customer satisfaction. We aim to create a
            community where entertainment enthusiasts can discover exciting new
            products and stay connected with the latest trends.
          </p>

          <p>
            Since our establishment, our goal has been simple: to make
            entertainment accessible, enjoyable, and affordable for everyone.
            Through innovation and excellent customer service, Entertainment
            Guild continues to grow as a trusted destination for entertainment
            lovers worldwide.
          </p>
        </div>

        <div className="stats">
          <div className="stat-card">
            <h2>500+</h2>
            <p>Products Available</p>
          </div>

          <div className="stat-card">
            <h2>10K+</h2>
            <p>Happy Customers</p>
          </div>

          <div className="stat-card">
            <h2>24/7</h2>
            <p>Customer Support</p>
          </div>
        </div>
      </section>
    </div>















    </div>);
}export default AboutPage