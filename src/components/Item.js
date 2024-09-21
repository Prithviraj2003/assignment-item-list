import React from 'react';
// React.memo is used to prevent unnecessary re-renders of the Item component it will only re-render if the props change otherwise it will use the cached version of the component
const Item = React.memo(({  name, photo, price, quantity }) => {
    
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={photo} className="card-img-top" alt={name} style={{
            height: '350px',
            objectFit: 'fill',
        }}   /> 
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            Price: ₹{price} <br />
            Quantity: {quantity}
          </p>
        </div>
      </div>
    </div>
  );
});

export default Item;
