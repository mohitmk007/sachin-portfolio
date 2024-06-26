// import React from 'react'

import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Title2 from "./Components/Titles/Title2";
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Services/Services";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { FaWhatsapp } from "react-icons/fa";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Title2
        subtitle="About"
        title="What's people thinks about us"
        desc="Photography studio offering wedding photography, emphasizing growth, creativity, and monthly theme projects."
      ></Title2>
      <About></About>
      <Title2
        subtitle="Portfolio"
        title="My Amazing Works"
        desc="Sometimes reality blurs, and I embrace it. Abstracts emerge—a swirl of colors, a play of light, a texture that begs to be touched."
      ></Title2>
      <Portfolio></Portfolio>
      <Title2
        subtitle="Services"
        title="What I Do for Clients"
        desc="From weddings to corporate headshots, from newborn portraits to travel adventures—I’m here to capture life’s exquisite moments. Let’s embark on this creative journey together!"
      ></Title2>
      <Services></Services>
      <Title2
        subtitle="Testimonials"
        title="What My Clients Say"
        desc="Thank you for choosing us to be part of your memories. We look forward to hearing from you! please leave your comments also."
      ></Title2>
      <Testimonial></Testimonial>
      <Title2
        subtitle="Contact Me"
        title="I Want To Hear From You"
        desc="Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET,"
      ></Title2>
      <Contact></Contact>
      <Footer></Footer>
      <li className="list-none text-3xl text-green-600 sticky bottom-32 h-0">
        <a
          href="https://wa.me/9837716511"
          target="_blank"
          rel="noopener noreferrer"
          className="float-end text-5xl bg-orange-300 p-3 max-sm:text-4xl max-sm:p-2 rounded-full mr-10"
        >
          <FaWhatsapp />
        </a>
      </li>
    </div>
  );
};

export default App;
