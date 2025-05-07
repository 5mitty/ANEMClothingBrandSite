import React from 'react';
import '../ShopPageFlex.css'; // Import the new CSS file
import { useNavigate } from 'react-router-dom';

import anemLogo1 from '../assets/ANEMMOCKUP2.jpg';
import anemLogo2 from '../assets/ANEMLOGOS_02.jpg';
import anemLogo3 from '../assets/ANEMLOGOS_03.jpg';
import anemLogo4 from '../assets/ANEMLOGOS_04.jpg';
import anemLogo5 from '../assets/ANEMLOGOS_05.jpg';
import anemLogo6 from '../assets/ANEMLOGOS_06.jpg';
import anemLogo7 from '../assets/ANEMLOGOS_07.jpg';
import anemLogo8 from '../assets/ANEMLOGOS_08.jpg';
import anemLogo9 from '../assets/ANEMLOGOS_09.jpg';
import anemLogo10 from '../assets/ANEMLOGOS_10.jpg';

const products = [
  {
    id: 1,
    name: 'Theory of Revolution Tee',
    price: '$29.99',
    image: anemLogo1,
    brand: 'ANEM',
    era: 'new' ,
    description: 'Break the mold. The Theory of Revolution tee challenges everything you thought was written in stone. Made from 100% premium cotton in a versatile charcoal grey, this loose-fitting streetwear essential delivers comfort without compromising edge. \n\nThe front graphic flips the classic theory of evolution diagram on its head—literally. From ape to man, the familiar progression is interrupted and defaced with a bold, graffiti-style R. This raw mark isn’t vandalism—it’s a statement. It symbolizes rebellion, resistance, and Revolution—a nod to rewriting the rules and reshaping identity.',
  },
  {
    id: 2,
    name: '?????',
    price: '$??.??',
    image: anemLogo7,
    brand: 'ANEM',
    tags: ['redacted'],
    era: 'new' ,
    description: "",
  },
  {
    id: 3,
    name: '????',
    price: '$??.??',
    image: anemLogo8,
    brand: 'ANEM',
    tags: ['redacted'],
    era: 'new' ,
  },
  {
    id: 4,
    name: '?????',
    price: '$??.??',
    image: anemLogo9,
    brand: 'ANEM',
    tags: ['redacted'],
    era: 'new' ,
  },
  {
    id: 5,
    name: '?????',
    price: '$??.??',
    image: anemLogo10,
    brand: 'ANEM',
    tags: ['redacted'],
    era: 'new' ,
  },
  {
    id: 6,
    name: '????',
    price: '$??.??',
    image: anemLogo6,
    brand: 'ANEM',
    tags: ['redacted'],
    era: 'new' ,
  },
  {
    id: 7,
    name: '????',
    price: '$??.??',
    image: anemLogo7,
    brand: 'ANEM',
    tags: ['redacted'],
    era: 'new' ,
  },
  {
    id: 8,
    name: 'Bloom',
    price: '$??.??',
    image: anemLogo8,
    brand: 'ANEM',
    tags: ['redacted'],
    era: 'new' ,
  },
  {
    id: 9,
    name: 'Glow',
    price: '$??.??',
    image: anemLogo9,
    brand: 'ANEM',
    tags: ['redacted'],
    era: 'new' ,
  },
  {
    id: 10,
    name: 'Shine',
    price: '$??.??',
    image: anemLogo10,
    brand: 'ANEM',
    tags: ['redacted'],
    era: 'new' ,
  },
  {
    id: 11,
    name: '?????',
    price: '$??.??',
    image: anemLogo6,
    brand: 'ANEM',
    tags: ['redacted'],
    era: 'new' ,
  },
  {
    id: 12,
    name: '?????',
    price: '$??.??',
    image: anemLogo7,
    brand: 'ANEM',
    tags: ['redacted'],
    era: 'new' ,
  },
  {
    id: 13,
    name: '????',
    price: '$??.??',
    image: anemLogo8,
    brand: 'ANEM',
    tags: ['redacted'],
    era: 'new' ,
  },
  {
    id: 14,
    name: '?????',
    price: '$??.??',
    image: anemLogo9,
    brand: 'ANEM',
    tags: ['redacted'],
    era: 'new' ,
  },
  {
    id: 15,
    name: '????',
    price: '$??.??',
    image: anemLogo10,
    brand: 'ANEM',
    tags: ['redacted'],
    era: 'new' ,
  },
  {
    id: 16,
    name: '?????',
    price: '$??.??',
    image: anemLogo7,
    brand: 'ANEM',
    tags: ['redacted'],
    era: 'old' ,
  },
  {
    id: 17,
    name: '????',
    price: '$??.??',
    image: anemLogo8,
    brand: 'ANEM',
    tags: ['redacted'],
    era: 'old' ,
  },
  {
    id: 18,
    name: '?????',
    price: '$??.??',
    image: anemLogo9,
    brand: 'ANEM',
    tags: ['redacted'],
    era: 'old' ,
  },
  {
    id: 19,
    name: '?????',
    price: '$??.??',
    image: anemLogo10,
    brand: 'ANEM',
    tags: ['redacted'],
    era: 'old' ,
  },
  {
    id: 20,
    name: '????',
    price: '$??.??',
    image: anemLogo6,
    brand: 'ANEM',
    tags: ['redacted'],
    era: 'old' ,
  },
  {
    id: 21,
    name: '????',
    price: '$??.??',
    image: anemLogo7,
    brand: 'ANEM',
    tags: ['redacted'],
    era: 'old' ,
  },
  {
    id: 22,
    name: 'Bloom',
    price: '$??.??',
    image: anemLogo8,
    brand: 'ANEM',
    tags: ['redacted'],
    era: 'old' ,
  },
  {
    id: 23,
    name: 'Glow',
    price: '$??.??',
    image: anemLogo9,
    brand: 'ANEM',
    tags: ['redacted'],
    era: 'old' ,
  },
  {
    id: 24,
    name: 'Shine',
    price: '$??.??',
    image: anemLogo10,
    brand: 'ANEM',
    tags: ['redacted'],
    era: 'old' ,
  },
  {
    id: 25,
    name: '?????',
    price: '$??.??',
    image: anemLogo6,
    brand: 'ANEM',
    tags: ['redacted'],
    era: 'old' ,
  },
  {
    id: 26,
    name: '?????',
    price: '$??.??',
    image: anemLogo7,
    brand: 'ANEM',
    tags: ['redacted'],
    era: 'old' ,
  },
  {
    id: 27,
    name: '????',
    price: '$??.??',
    image: anemLogo8,
    brand: 'ANEM',
    tags: ['redacted'],
    era: 'old' ,
  },
  {
    id: 28,
    name: '?????',
    price: '$??.??',
    image: anemLogo9,
    brand: 'ANEM',
    tags: ['redacted'],
    era: 'old' ,
  },
  {
    id: 29,
    name: '????',
    price: '$??.??',
    image: anemLogo10,
    brand: 'ANEM',
    tags: ['redacted'],
    era: 'old' ,
  },
  {
    id: 30,
    name: '????',
    price: '$??.??',
    image: anemLogo10,
    brand: 'ANEM',
    tags: ['redacted'],
    era: 'old' ,
  },
];

const Shop = () => {
  const navigate = useNavigate();
  const bgColors = [
    '#ade9e71c',
    '#f0e68c1c',
    '#d3d3d31c',
    '#90ee901c',
    '#b0c4de1c',
    '#dda0dd1c',
  ];

  const handleItemClick = (product) => {
    if (product.tags && product.tags.includes('redacted')) {
      // Do nothing if the item is redacted
      return;
    }
    navigate(`/shop/${product.id}`, { state: { product } });
  };

  return (
    <div className='mainBody'>
      <div className="shopPageBox">
        <h2 className='shopHeader'>Find Your Era!</h2>
        <div className="shopPageFlex">
          <div className="shop-grid-flex">
            {products.map((product) => {
              const colorIndex = (product.id - 1) % 6;
              const bgColor = bgColors[colorIndex];

              return (
                <div
                  key={product.id}
                  className="item-flex"
                  style={{ backgroundColor: bgColor, cursor: product.tags && product.tags.includes('redacted') ? 'not-allowed' : 'pointer' }}
                  onClick={() => handleItemClick(product)}
                >
                  <div className="item-image-container-flex">
                    <div className='shopImgSpace' style={{  }}></div>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="item-image-flex"
                      style={{ backgroundColor: 'black' }}
                    />
                  </div>
                  <div className="item-details-flex">
                    <h3 className="item-name-flex">{product.name}</h3>
                    <p className="item-price-flex">{product.price}</p>
                    {product.tags && product.tags.includes('redacted') && (
                      <span className="redacted-tag" style={{ color: 'red', fontWeight: 'bold' }}>Redacted</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;