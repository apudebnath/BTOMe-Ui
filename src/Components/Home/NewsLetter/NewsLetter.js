import React from 'react';
const image=('https://i.ibb.co/1s77N0Z/newsletter-1500x500.jpg')
const backgroundB ={
    background: `url(${image})`,
    backgroundColor: 'rgba(1, 28, 38, 0.5)',
    backgroundBlendMode: 'multiply, luminosity',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'scroll',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
}
const NewsLetter = () => {
    return (
        <div style={backgroundB} className='bg-secondary py-5 my-5'>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-4 py-5 text-start">
                    <div className="col text-white">
                        <h2>Keep Touch With Us</h2>
                        <p>Sign up now to receive exclusive offer, promotion and discount pack. Hurry up!!!</p>
                    </div>
                    <div className="col d-flex align-items-center">
                        <form className='w-100'>
                            <input type="text" placeholder="Enter Your Email" className='w-75 border-white'/>
                            <input type="submit" value="SEND" className='w-25 mt-2 bg-warning border-warning fw-bold' />
                        </form>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default NewsLetter;