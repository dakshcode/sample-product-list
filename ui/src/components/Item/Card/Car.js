import React from 'react';

const Car = ({data,dealer_id=null}) => {
  return (
    <div className="card mr-2 d-inline-block shadow-lg">
        <div className="card-img-top">
          <img
            src={`../../../images/${data.image}`}
            className="img-fluid border-radius p-4"
            alt=""
          />
        </div>
        <div className="card-body">
          <h4 className="card-title">{data.name}</h4>
          <p className="card-text">
            { `Rs ${data.price} ${data.unit} onwards` }
            <br />
            <span>Ex Showroom Price</span>
          </p>
          { dealer_id && <a href="/">Search By Dealers</a>}
        </div>
      </div>
  );
};

export default Car;
