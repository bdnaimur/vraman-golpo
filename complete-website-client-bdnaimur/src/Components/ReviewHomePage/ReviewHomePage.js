import React, { useContext, useEffect, useState } from 'react';
import AllReview from '../AllReview/AllReview';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

//swiper slider
import SwiperCore, {
    Autoplay, Pagination
} from 'swiper/core';
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { userContext } from '../../App';
const ReviewHomePage = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [reviews, setReview] = useState([] || 1);
    useEffect(() => {
        const url = `http://localhost:5055/reviews`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReview(data)
            })
    }, [])
    console.log(loggedInUser);
    return (
        <div className="container mt-5">
            <h2 className="text-secondary text-center" >Reviews</h2>
            <div className="row">
                {/* {reviews.map(rvw => <AllReview review = {rvw}></AllReview>)} */}
                <Swiper
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },

                        480: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },

                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },

                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        }

                    }}
                    autoplay={true}
                    pagination={{
                        "clickable": true
                    }} className="mySwiper">
                    {
                        reviews.map(review =>
                            <SwiperSlide>
                                <div className="group w-90 mt-10 mb-16 testimonial-card cursor-pointer bg-white dark:bg-gray-800 shadow-lg mx-auto rounded-xl p-4">
                                        <div className="d-flex justify-content-between">
                                        <div className="review-image">
                                            <img src={review.imageURL} className="" />
                                        </div>
                                    <div className="mt-5">
                                        {review.displayName}
                                    </div>
                                        </div>
                                    <p className="text-gray-600 dark:text-white flex">
                                        <span className="leftQoute">
                                            <ImQuotesLeft />
                                        </span>
                                        <p className="review-details">{review.details}</p>
                                        <span className="rightQoute">
                                            <ImQuotesRight />
                                        </span>
                                    </p>
                                    <div className="flex items-center mt-4 xl:w-1/4 md:w-1/2 p-4">

                                        <div className="d-flex justify-content-between">
                                            <div>Tour Name</div>
                                            <div>
                                                <span className="dark:text-gray-400 text-xs flex items-center">
                                                    {review.name}
                                                    {/* <img src={review.imageURL} className="ml-2 h-4 w-4" /> */}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>)}
                </Swiper>

            </div>
        </div>
    );
};

export default ReviewHomePage;