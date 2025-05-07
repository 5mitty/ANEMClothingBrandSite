import React from 'react';
import myImage from '../assets/AnemLogos.png'; // Adjust the file name and extension as needed

const About = () => {
  return (
    <div className='mainBody'>
      <div className="aboutPage">
        <h3 className='aboutHeaderText'>About A New Era of Me (ANEM)</h3>
        <p className='bioText'>&emsp;&emsp;
        In a world saturated with fleeting trends and often questionable quality at inflated prices,
         A New Era of Me (ANEM) emerges with a different vision. This isn't just another streetwear 
         brand; it's a conscious movement built on the belief that clothing should empower, not just 
         decorate. Tired of uninspired designs and the hype that dictates value, ANEM is different—a 
         passion-driven endeavor to redefine urbanwear with intention and accessibility 
         at its core. More than just fabric and thread, each curated design is crafted to foster a 
         mindset shift, helping you step into a new era of self-expression and unwavering confidence. 
         We're starting small, but our purpose is significant: to deliver quality streetwear that 
         resonates with authenticity and empowers those ready to embrace change. ANEM isn't about 
         overpriced hype; it's about intentional design, enduring quality, and the powerful transformation 
         that comes from within. <br />It's more than clothing—it's a new era of you.</p>
         <h4>- Julian Vega (Creator)</h4>
      </div>
      <img src={myImage} alt="ANEM Logos" className='logoImage'/>
    </div>
  );
};

export default About;