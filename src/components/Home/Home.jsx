import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';

const Home = () => {
    const tShirts =useLoaderData();
    const [cart, setCart]= useState([]);

    const handleAddToCart = tShirts =>{
        const newCart = [...cart, tShirts];
        setCart(newCart);
    }
    return (
        <div className='grid grid-cols-4 gap-3 mt-5'>
            <div className='grid grid-cols-3 col-span-3 gap-3 m-10'>
            {
                tShirts.map(tShirt => <TShirt
                    key={tShirt._id} 
                    tShirt={tShirt}
                    handleAddToCart={handleAddToCart}
                ></TShirt>)
            }
            </div>
            <div className='col-span-1'>
                
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;