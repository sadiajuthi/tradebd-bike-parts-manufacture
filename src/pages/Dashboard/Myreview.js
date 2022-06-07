import React from 'react';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import './Myreview.css'

const Myreview = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    const imgStorageKey = 'a92324dd2a9136ad371bfe3e735f6ee9';

    const onSubmit = async data => {
        console.log(data);
        const name = data.name;
        const rating = data.rating;
        const review = data.review;
        const img = data.img[0];
        const formData = new FormData();
        formData.append('image', img);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const newReview = { name, rating, review, img }
                    console.log(newReview);


                    // send review to mongodb
                    fetch('http://localhost:5000/review', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(newReview)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log('added', data);
                            alert('Your review Added')
                        })
                }
            })
    }

    return (
        <div className='background'>
            <div className="px-12">
                <h1 className='text-2xl font-semibold my-5 pt-10'>Add your valuable review!</h1>
                <ToastContainer></ToastContainer>
                <div>

                    <form className=' text-base items-center justify-content-center' onSubmit={handleSubmit(onSubmit)}>
                        <label className='block'>Your Name:</label>
                        <input className='h-8 w-96 border-gray-400 border-2 mb-3' defaultValue="" {...register('name', {
                            required: {
                                value: true,
                                message: 'Name is required'
                            }
                        })
                        } />
                        <label class='my-0 py-0'>{errors.name?.type === 'required' && <span className='label-text-alt text-red-600'>{errors.name.message}</span>}</label>

                        < br />
                        <label className='block'>Rating: </label>
                        <input type='number' className='h-8 w-96 border-gray-400 border-2 mb-3' defaultValue="" required {...register('rating', {
                            required: {
                                value: true,
                                message: 'Rating is required'
                            }
                        })
                        } />
                        <label class='my-0 py-0'>{errors.name?.type === 'required' && <span className='label-text-alt text-red-600'>{errors.rating.message}</span>}</label>
                        < br />
                        <label className='block'>Your Review: </label>
                        <textarea className='h-16 w-96 border-gray-400 border-2 ' defaultValue="" required {...register('review', {
                            required: {
                                value: true,
                                message: 'Review is required'
                            }
                        })
                        } />
                        <label class='my-0 py-0'>{errors.name?.type === 'required' && <span className='label-text-alt text-red-600'>{errors.review.message}</span>}</label>
                        < label className='block' > Photo</label>

                        <input type='file' className='h-8 w-96 border-gray-400 border-2 mb-3' defaultValue="" {...register('img')
                        } />


                        <br />


                        <input className='btn btn-wide mx-auto my-5  w-96' type="submit" value='Add Review' />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Myreview;