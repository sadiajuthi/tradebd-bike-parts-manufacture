import React, { useEffect, useState } from 'react';

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://cryptic-tundra-74859.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <div className='px-12'>
            <h1 className='text-4xl mt-10 pt-10 mb-10 text-blue-900 font-bold text-center'>Customer Reviews:</h1>

            <div className="grid md:grid-cols-3 gap-2">
                {
                    reviews.map(review =>
                        <div class="card w-96 bg-base-100 shadow-xl">
                            <figure><img className='mt-3 w-20 h-20 mb-5 rounded-full border-2 border-yellow-600' src={review?.img} alt="" /></figure>
                            <div class="m-0 px-4 pb-5 text-center">
                                <h2 class="text-xl font-semibold ">{review.name}</h2>
                                <p className='font-semibold'>Rating: <span className="text-yellow-600">{review.rating}</span></p>
                                <blockquote>{review.review}</blockquote>

                            </div>

                        </div>
                    )
                }
            </div>


        </div>
    );
};

export default Review;