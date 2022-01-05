import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://gentle-woodland-78175.herokuapp.com/add-product', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Product Added Successfully');
                    reset();
                }
            })
    };

    return (
        <div className='text-center'>
            <div className="add-product">
                <div className="bg-add-product mx-auto">
                    <h2>Add a Product</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input {...register("productName", { required: true, maxLength: 50 })} className='w-50' placeholder="Product Name" />

                        <div className="row d-flex justify-content-center">
                            <div className="col-md-5">

                                <select {...register("productCategory", { required: true })}>
                                    <option value="">Choose a Product Category</option>
                                    <option value="Decoration Light">Decoration Light</option>
                                    <option value="Skin Care">Skin Care</option>
                                    <option value="Salwar Kameez">Salwar Kameez</option>
                                    <option value="Watch">Watch</option>
                                    <option value="T-Shirt">T-Shirt</option>
                                    <option value="Jewelry">Jewelry</option>
                                    <option value="Saree">Saree</option>
                                    <option value="Hair Care">Hair Care</option>
                                    <option value="Furniture">Furniture</option>
                                    <option value="Garden Tools">Garden Tools</option>
                                </select>

                                <input {...register("productImage")} placeholder="Product Image URL" />

                                <input type="number" {...register("productMainPrice", { required: true })} placeholder="Price" />

                                {/* <textarea {...register("description1")} placeholder="Short Description" />

                                <textarea {...register("description2")} placeholder="Details Description 1" />

                                <textarea {...register("description3")} placeholder="Details Description 2" /> */}

                            </div>
                            <div className="col-md-5">

                                {/* 
                                <input {...register("img2")} placeholder="Image 2 URL" />

                                <input {...register("img3")} placeholder="Image 3 URL" /> */}

                                <input type="number" {...register("productOfferPrice")} placeholder="Discount Price" />

                                <input type="number" {...register("productReview", { required: true })} placeholder="Product Review" />

                                <input type="number" {...register("ReviewStar", { required: true })} placeholder="Review Star" />

                            </div>

                        </div>

                        <input type="submit" value="Add" className="btn-outline-dark w-50" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddProduct;