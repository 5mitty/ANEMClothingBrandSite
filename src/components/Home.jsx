import React from 'react';
// import aNewEraHomePic from '../assets/AnemClothingSiteCover.png';
import aNewEraHomePic from '../assets/ANEMMOCKUP1.jpg';
import aNewEraHomePic2 from '../assets/ANEMMOCKUP3.jpg';
import aNewEraHomePic3 from '../assets/ANEMMOCKUP4.jpg';

const Home = () => {
  return (
    <div className='mainBody'>
        <div className='eraPageType1'>
            <h2 className='homeText'>What Era Are You In?</h2>
            <div className='eraHomePageBox'>
                <img src={aNewEraHomePic} alt="A New Era of Me Demo Pics" className='eraBoxDiv'/>
                <h2 className='eraHomeText'>
                  <div className='eraHomeText1'>
                     Break the mold. The Theory of Revolution tee challenges everything you thought was written in stone. Made from 100% premium cotton in a versatile charcoal grey, this loose-fitting streetwear essential delivers comfort without compromising edge.
                  </div>
                </h2>
                <h2 className='eraHomeText'>
                    The front graphic flips the classic "theory of evolution" diagram on its head—literally. From ape to man, the familiar progression is interrupted and defaced with a bold, graffiti-style R. This raw mark isn’t vandalism—it’s a statement. It symbolizes rebellion, resistance, and Revolution—a nod to rewriting the rules and reshaping identity.
                </h2>
                <h2 className='eraHomeText'>
                    Welcome to a new era of me. This is more than a shirt. It’s a mindset.
                </h2>
                <img src={aNewEraHomePic2} alt="A New Era of Me Demo Pics" className='eraBoxDiv'/>
                <img src={aNewEraHomePic3} alt="A New Era of Me Demo Pics" className='eraBoxDiv' id='squareImgShirtDemo'/>
            </div>
        </div>
    </div>
  );
};

export default Home;