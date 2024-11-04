// components/Wishlist.js
import React, { useState } from 'react';
import './Wishlist.css';

function Wishlist() {
  const [wishlist, setWishlist] = useState(["Favorite Movie"]);

  const removeItem = (index) => {
    setWishlist(wishlist.filter((_, i) => i !== index));
  };

  return (
    <div className="wishlist">
      <h2>찜 목록</h2>
      {wishlist.map((item, index) => (
        <div key={index} className="wishlist-item">
          {item}
          <button onClick={() => removeItem(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Wishlist;
