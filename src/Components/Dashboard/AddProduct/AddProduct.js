import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Product Added Successfully');
                    reset();
                }
            })
    };

    return (
        <div>
            <div className="add-course">
                <div className="bg-add-course mx-auto">
                    <h2>Add a Product</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input {...register("name", { required: true, maxLength: 50 })} className='w-25' placeholder="Product Name" />

                        <div className="row d-flex justify-content-center">
                            <div className="col-md-5">

                                <textarea {...register("description1")} placeholder="Short Description" />

                                <textarea {...register("description2")} placeholder="Details Description 1" />

                                <textarea {...register("description3")} placeholder="Details Description 2" />

                            </div>
                            <div className="col-md-5">
                                <input {...register("img1")} placeholder="Image 1 URL" />

                                <input {...register("img2")} placeholder="Image 2 URL" />

                                <input {...register("img3")} placeholder="Image 3 URL" />
                                <input type="number" {...register("price", { required: true })} placeholder="Price" />
                            </div>

                        </div>

                        <input type="submit" value="Add" className="btn-outline-primary w-25" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddProduct;