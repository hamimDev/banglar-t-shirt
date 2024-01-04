import React from "react";

const TShirt = ({ tShirt, handleAddToCart}) => {
  const { _id, index, price, picture, name, gender } = tShirt;
  return (
    <div>
      <div className="border-2 border-light-blue-500 rounded  bg-slate-800">
        <img
          className="h-[250px] rounded-3xl p-4 mx-auto"
          src={picture}
          alt=""
        />
        <h4 className="text-center text-2xl text-white font-bold">
          Name: {name}
        </h4>
        <h4 className="text-center text-xl text-gray-400 font-bold">
          Price: ${price}
        </h4>
        <div class="flex justify-center items-center mb-5 mt-5">
          <button onClick={()=>handleAddToCart(tShirt)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TShirt;
