import React from 'react';
import AllProducts from '../AllProducts/AllProducts';
import Banner from '../Banner/Banner';
import FeaturedCategories from '../FeaturedCategories/FeaturedCategories';
import Footer from '../Footer/Footer';
import LatestNews from '../LatestNews/LatestNews';
import NewArrival from '../NewArrival/NewArrival';
import NewsLetter from '../NewsLetter/NewsLetter';
import SingleProductBanner from '../SingleProductBanner/SingleProductBanner';
import SocialMedia from '../SocialMedia/SocialMedia';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedCategories></FeaturedCategories>
            <NewArrival></NewArrival>
            <SingleProductBanner></SingleProductBanner>
            <AllProducts/>
            <LatestNews/>
            <NewsLetter/>
            <SocialMedia/>
            <Footer/>
        </div>
    );
};

export default Home;