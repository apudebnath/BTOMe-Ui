import React from 'react';
import axios from 'axios';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useForm } from "react-hook-form";

const ReviewAdding = () => {
    const [value, setValue] = React.useState(4);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('https://gentle-woodland-78175.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Review Added Successfully');
                    reset();
                }
            })
    };

    return (
        // Review adding form 
        <div className="add-product">
            <div className="bg-add-product mx-auto">
                <h2>Add a Review</h2>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" className="w-50" />

                    <textarea {...register("reviewtext", { required: true })} placeholder="Write A Review" className="w-50" />

                    <input {...register("img", { required: true })} placeholder="Image URL" className="w-50" />
                    <div className='bg-dark w-50 py-2 my-2 rounded-pill'>
                        <Typography component="legend">Give Rating</Typography>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                    </div>
                    <input type="submit" value="Add" className="w-50 btn-outline-success" />
                </form>

            </div>
        </div>
    );
};

export default ReviewAdding;