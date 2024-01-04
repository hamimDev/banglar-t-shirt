import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h1 className='text-5xl'>This is Cart length:{cart.length}</h1>
        </div>
    );
};

export default Cart;