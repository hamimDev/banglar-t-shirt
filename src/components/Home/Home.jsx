import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tShirts =useLoaderData();
    console.log(tShirts);
    return (
        <div>
            <h2>All Product in Home: {tShirts.length}</h2>
        </div>
    );
};

export default Home;