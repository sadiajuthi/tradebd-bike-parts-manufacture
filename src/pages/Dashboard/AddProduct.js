import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imgStorageKey = 'a92324dd2a9136ad371bfe3e735f6ee9';

    const onSubmit = async data => {
        console.log(data);
        const name = data.name;
        const price = data.price;
        const quantity = data.quantity;
        const orderquatity = data.orderquatity;
        const description = data.description;
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
                    const newReview = { name, price, quantity, orderquatity, description, img }
                    console.log(newReview);
                    // send product to mongodb
                    fetch('https://cryptic-tundra-74859.herokuapp.com/product', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(newReview)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log('added', data);
                            toast.success('New Product Added')
                        })
                }
            })
    }

    return (
        <div className='grid md:grid-cols-2 justify-items-center'>

            <div className="px-12 overscroll-y-none">
                <ToastContainer></ToastContainer>
                <h1 className='text-2xl font-semibold my-5 pt-10'>Add a Product</h1>

                <div>

                    <form className=' text-base items-center justify-content-center' onSubmit={handleSubmit(onSubmit)}>
                        <label className='block'>Product Name:</label>
                        <input className='h-8 w-96 border-gray-400 border-2 mb-3' defaultValue="" {...register('name', {
                            required: {
                                value: true,
                                message: 'Name is required'
                            }
                        })
                        } />
                        <label class='my-0 py-0'>{errors.name?.type === 'required' && <span className='label-text-alt text-red-600'>{errors.name.message}</span>}</label>
                        < br />
                        <label className='block'>Price: </label>
                        <input type='number' className='h-8 w-96 border-gray-400 border-2 mb-3' defaultValue="" required {...register('price', {
                            required: {
                                value: true,
                                message: 'price is required'
                            }
                        })
                        } />
                        <label class='my-0 py-0'>{errors.name?.type === 'required' && <span className='label-text-alt text-red-600'>{errors.price.message}</span>}</label>

                        <br />
                        <label className='block'>Available Quantity: </label>
                        <input type='number' className='h-8 w-96 border-gray-400 border-2 mb-3' defaultValue="" required {...register('quantity', {
                            required: {
                                value: true,
                                message: 'Quantity is required'
                            }
                        })
                        } />
                        <label class='my-0 py-0'>{errors.name?.type === 'required' && <span className='label-text-alt text-red-600'>{errors.quantity.message}</span>}</label>


                        <br />
                        <label className='block'>Minimum Quantity: </label>
                        <input type='number' className='h-8 w-96 border-gray-400 border-2 mb-3' defaultValue="" required {...register('orderquatity', {
                            required: {
                                value: true,
                                message: 'Munumum order Quantity is required'
                            }
                        })
                        } />
                        <label class='my-0 py-0'>{errors.name?.type === 'required' && <span className='label-text-alt text-red-600'>{errors.quantity.message}</span>}</label>
                        <br />
                        <label className='block'>Product Description: </label>
                        <textarea className='h-16 w-96 border-gray-400 border-2 ' defaultValue="" required {...register('description', {
                            required: {
                                value: true,
                                message: 'description is required'
                            }
                        })
                        } />
                        <label class='my-0 py-0'>{errors.name?.type === 'required' && <span className='label-text-alt text-red-600'>{errors.description.message}</span>}</label>
                        < label className='block' > Photo</label>

                        <input type='file' className='h-8 w-96 border-gray-400 border-2 mb-3' defaultValue="" {...register('img')
                        } />


                        <br />


                        <input className='btn btn-wide mx-auto my-5  w-96' type="submit" value='Add Review' />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddProduct;