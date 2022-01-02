import React from 'react';

const NewArrival = () => {
    return (
        <div className="pb-5">
            <div className="text-center mt-5 pt-5">
                <h3 className="pt-5">-New Arrival-</h3>
                <p className="pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Architecto fugit error hic ipsa id</p>
            </div>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-4 g-4 text-start">
                    <div className="col">
                        <div className="card ">
                            <img src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2016/08/product-accessories-8-1-430x491.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Watch</h5>
                                <p className="card-text text-success fw-bold">$120.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2016/08/product-furniture-11-3.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title ">bottle</h5>
                                <p className="card-text text-success fw-bold">$130.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2016/08/product-furniture-14-2.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title ">Table Pen</h5>
                                <p className="card-text text-success fw-bold">$100.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2016/09/product-furniture-4-3.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title ">Wood Table</h5>
                                <p className="card-text text-success fw-bold">$110.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewArrival;