import React from 'react';
import { useNavigate } from 'react-router-dom';
import myResumeLeft from '../assets/anemEraSplit1.png'; // Placeholder for left image
import myResumeRight from '../assets/anemEraSplit2.png'; // Placeholder for right image

const EraSplit = () => {
  const navigate = useNavigate();

  const handleShopClick1 = (product) => {
    // if (product.tags && product.tags.includes('redacted')) {
      
    //   return;
    // }
    navigate(`/shop/`);
  };

  return (
    <div className='mainBodyFlex'>
      <div className='eraPageType1Flex'>
        <h2>What Do You Decide?</h2>
        <div className='eraBoxFlex'>
          <div className='eraBoxLeft'>
            
            <button className='imageButton1' onClick={handleShopClick1}>Old</button>
            <img src={myResumeLeft} alt="Era Choice Left" className='eraBoxDivLeftFlex' />
          </div>
          <div className='eraBoxRight'>
            <button className='imageButton2' onClick={handleShopClick1}>New</button>
            <img src={myResumeRight} alt="Era Choice Right" className='eraBoxDivRightFlex' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EraSplit;