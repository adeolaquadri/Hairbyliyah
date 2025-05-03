import React from "react";
import Header from "./Header";
import Welcome from "./Welcome";
import About from "./About";
import Service from "./Service";
import Footer from "./Footer";
import Testimonial from "./Testimonial";
import BookingForm from "./Contact";

const Home = ()=>{
   return(
      <>
      <Header/>
     <Welcome/>
     <About />
     <Service />
     <Testimonial />
     <BookingForm />
     <Footer />
      </>
   );
};
 export default Home;