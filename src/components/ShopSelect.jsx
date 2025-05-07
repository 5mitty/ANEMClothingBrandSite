import React from 'react';
import { useLocation } from 'react-router-dom';

const ShopSelect = () => {
  const location = useLocation();
  const { product } = location.state || {}; // Access the product data from the state

  if (!product) {
    return <div>Error: No product selected.</div>;
  }

  return (
    <div className="shopSelectPage">
      <div className='shopSelectSpacer'></div>
      <img src={product.image} alt={product.name} style={{ maxWidth: '300px' }} />
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>
      <p>Brand: {product.brand}</p>
      <p className='shopDescription1'>Break the mold. The Theory of Revolution tee challenges everything you thought was written in stone. Made from 100% premium cotton in a versatile charcoal grey, this loose-fitting streetwear essential delivers comfort without compromising edge. </p>
      <p className='shopDescription2'>The front graphic flips the classic "theory of evolution" diagram on its head—literally. From ape to man, the familiar progression is interrupted and defaced with a bold, graffiti-style R. This raw mark isn’t vandalism—it’s a statement. It symbolizes rebellion, resistance, and Revolution—a nod to rewriting the rules and reshaping identity.</p>
      <p className='shopDescription2'>Welcome to a new era of me. This is more than a shirt. It’s a mindset.</p>
    </div>
  );
};

export default ShopSelect;