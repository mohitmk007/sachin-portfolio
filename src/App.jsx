// import React from 'react'

import About from "./Components/About/About";
import Home from "./Components/Home/Home";

import Navbar from "./Components/Navbar/Navbar";
import Title from "./Components/Titles/Title";
import Title2 from "./Components/Titles/Title2";
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Services/Services";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Title title="About Section" />
      <About></About>
      <Title2
        subtitle="Portfolio"
        title="My Amazing Works"
        desc="Most common methods for designing websites that work well on desktop is responsive and adaptive design"
      ></Title2>
      <Portfolio></Portfolio>
      <Title2
        subtitle="Services"
        title="What I Do for Clients"
        desc="Most common methods for designing websites that work well on desktop is responsive and adaptive design"
      ></Title2>
      <Services></Services>
      <Title2
        subtitle="Testimonials"
        title="What My Clients Say"
        desc="Most common methods for designing websites that work well on desktop is responsive and adaptive design"
      ></Title2>
      <Testimonial></Testimonial>
      <Title2
        subtitle="Contact Me"
        title="I Want To Hear From You"
        desc="Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET,"
      ></Title2>
      <Contact></Contact>
    </div>
  );
};

export default App;
