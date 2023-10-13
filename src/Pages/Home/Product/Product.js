import card1 from "../../../assest/card1.png"
import card2 from "../../../assest/Cream Beige Essential Oil Facebook Post (1).png"
import card3 from "../../../assest/Cream Beige Essential Oil Facebook Post (2).png"
import React from 'react';

const Product = () => {
    return (
        <div className='mx-auto max-w-screen-xl'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 justify-center items-center mx-4'>
                <div className="card card-compact lg:w-96 md:w-96 w-full bg-base-100 shadow-xl h-[420px]">
                    <figure><img src={card1} alt="Shoes" className="h-full w-full" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">চুলের তেল - 200 মিলি: ৭৯৯ টাকা</h2>

                        <a href="/#order">
                            <div className="card-actions pt-4">
                                <button className="btn bg-[#279b37] text-white hover:bg-[#279b37]">Order Now</button>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl h-[420px]">
                    <figure><img src={card2} alt="Shoes" className="h-full w-full" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">চুলের প্যাক 100 গ্রাম: ১৯৯ টাকা</h2>
                        <a href="/#order">
                            <div className="card-actions pt-4">
                                <button className="btn bg-[#279b37] text-white hover:bg-[#279b37]">Order Now</button>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl h-[420px]">
                    <figure><img src={card3} alt="Shoes" className="h-full w-full" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">কম্বো প্যাকেজঃ 200 মিলি তেল + চুলের প্যাক 100 গ্রাম: ৯৫০ টাকা</h2>
                        <a href="/#order">
                            <div className="card-actions pt-4">
                                <button className="btn bg-[#279b37] text-white hover:bg-[#279b37]">Order Now</button>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;