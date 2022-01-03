import React from 'react';
import MenuBar from '../../../Shared/MenuBar/MenuBar';
import AllProducts from '../AllProducts/AllProducts';
import Banner from '../Banner/Banner';
import FeaturedCategories from '../FeaturedCategories/FeaturedCategories';
import Footer from '../Footer/Footer';
import NewArrival from '../NewArrival/NewArrival';
import SingleProductBanner from '../SingleProductBanner/SingleProductBanner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedCategories></FeaturedCategories>
            <NewArrival></NewArrival>
            <SingleProductBanner></SingleProductBanner>
            <AllProducts/>
            <Footer/>
        </div>
    );
};

export default Home;