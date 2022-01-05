import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const blogImage = ('https://i.ibb.co/yRfcQSK/blogi7.jpg')
const image = ('https://i.ibb.co/1s77N0Z/newsletter-1500x500.jpg')
const backgroundB = {
    background: `url(${image})`,
    backgroundColor: 'rgba(1, 28, 38, 0.5)',
    backgroundBlendMode: 'multiply, luminosity',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'scroll',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
}
const Blog = () => {
    return (
        <div className='text-center my-5 pt-5'>
            <div style={backgroundB} className='text-white py-5'>
                <h2 className='pt-5'>You Can Konw More with Our Blog</h2>
                <h6 className='pt-3 pb-5'>
                    <Link className="text-decoration-none text-white " to='/'> Home</Link>
                    <FontAwesomeIcon className="mx-2" icon={faGreaterThan} size="xs" />
                    <span className="text-secondary"> Blog </span>
                </h6>
            </div>
            <div className="container">
            <h3 className='text-start pt-3'>Inspirational thinking and trends. These Chic 2022 Bag Trends Should Definitely Be on Your Radar </h3>
            <p className='text-start'>Presented by- A.Debnath</p>

                <div className="row row-cols-1 row-cols-md-2 g-4 text-start">
                    <div className="col">
                        <div className=''>
                            <img src={blogImage} className="card-img-top" alt="..." />
                        </div>
                    </div>
                    <div className="col">
                        <div className=''>
                            <p> <span className='fs-2'>W</span>hether it’s used to carry your phone and wallet around (essentials only!) or to hold your computer, snacks, a notebook, etc. (always gotta be prepared!), a good bag can really help you get by. Not to mention, this accessory is a must-have addition to any Insta-worthy outfit. Essentially, purses are where form and function meet—and we’re already obsessed with all the 2022 bag trends coming our way.</p>
                            <br />
                            <p>From sequined, sparkly mini bags to extra-large totes, these purses are seriously major. No matter if you’re just searching for a chic, substantial bucket bag or something a little more intricate—like chain detailing or rhinestones! Ooh la la—there’s a bag for you on this list. Anyone itching to level up their accessories collection, keep scrolling for the 2022 bag trends you’ll be seeing everywhere soon. Bonus: You can get ahead of the trend and start shopping for them now too. (You’re welcome!)</p>
                            <br />
                            <p>And while you’re on a shopping kick, ya might as well check out these fashion, shoe, and jewelry trends for 2022 if you want to complete your look.</p>
                        </div>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-1 g-4 text-start">
                    <div>
                        <p>What's your need?
                            Before buying your bag you must ask yourself for what do you need it for? Will it be your everyday bag? Or will you use just on special ocasions? Do you need to carry your laptop and books? Or just to carry all your essentials? Do you carry a look of things making it useful if the bag has extra pockets to make it easy to search for things like your phone and keys?
                            <br />
                            When choosing your bag you must know for what you will use it, keeping in mind all of these things it will be much easier for you to choose the right bag.</p>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-1 g-4 text-start">
                    <div>
                        <p>Design details
                            The details of the bag, like hardware and embellishments, can make a huge diference. The truth is that these details can make the bags go from simple and classic to extravagant bags.
                            <br />
                            If you're looking for a bag to use for as long as it lasts our advice is to choose simple details, very detailed and decorative embellishments are more easy to be dated and also more easy for you to be tired of it.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;