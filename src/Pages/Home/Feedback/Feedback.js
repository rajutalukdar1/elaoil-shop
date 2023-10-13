import review1 from '../../../assest/elaoilshop-revew1.PNG'
import review2 from '../../../assest/elaoilshop-revew3.PNG'
import review3 from '../../../assest/elaoilshop-revew4.PNG'
import React from 'react';

const Feedback = () => {
    return (
        <div>
            <section className="bg-white">
                <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:pt-16">
                    <h2
                        className="text-center lg:text-3xl font-bold tracking-tight text-gray-900 text-[20px]"
                    >
                        শত শত মানুষের উপকার পাওয়ার রিভিউ আমাদের ফেসবুক পেইজে আছে। তার মধ্যে থেকে কিছু রিভিউ <span className='underline'>এখানে দেয়া হলঃ</span>
                    </h2>

                    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
                        <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                            <div className="">
                                <img
                                    alt="Man"
                                    src={review1}
                                    className="bg-cover bg-center bg-no-repeat h-full w-full"
                                />
                            </div>
                        </blockquote>

                        <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                            <div className="">
                                <img
                                    alt="Man"
                                    src={review2}
                                    className="bg-cover bg-center bg-no-repeat h-full w-full"
                                />
                            </div>
                        </blockquote>

                        <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                            <div className="">
                                <img
                                    alt="Man"
                                    src={review3}
                                    className="bg-cover bg-center bg-no-repeat h-full w-full"
                                />
                            </div>
                        </blockquote>
                    </div>

                </div>
                <a href="https://www.facebook.com/elaoilshop/reviews" target='_blank' rel="noreferrer">
                    <div className="card-actions flex justify-center pb-10">
                        <button className="btn bg-[#279b37] text-white hover:bg-[#279b37]">More review</button>
                    </div>
                </a>
            </section>
        </div>
    );
};

export default Feedback;