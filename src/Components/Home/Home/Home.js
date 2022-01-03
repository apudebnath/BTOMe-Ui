import React from 'react';
import AllProducts from '../AllProducts/AllProducts';
import Banner from '../Banner/Banner';
import FeaturedCategories from '../FeaturedCategories/FeaturedCategories';
import NewArrival from '../NewArrival/NewArrival';
import SingleProductBanner from '../SingleProductBanner/SingleProductBanner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedCategories></FeaturedCategories>
            <NewArrival></NewArrival>
            <SingleProductBanner></SingleProductBanner>
            <AllProducts />
        </div>
    );
};

export default Home;