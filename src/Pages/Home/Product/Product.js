import card1 from "../../../assest/card1.png"
import React from 'react';

const Product = () => {
    return (
        <div className='mx-auto max-w-screen-xl px-4 py-8 sm:py-12 lg:py-16 lg:px-8'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={card1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">ট্রায়াল কোর্স – ২০০ মিলি তেল</h2>
                        <p>(ঢাকার ভেতর ৮০ টাকা ঢাকার বাইরে ১৪০ টাকা ডেলিভারি চার্জ যোগ হবে)</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-success font-extrabold">৮০০ টাকা</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">হাফ কোর্সঃ ৪০০ মিলি তেল</h2>
                        <p>ডেলিভারি চার্জ ফ্রি</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-success">১০০০ টাকা</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">কম্বো প্যাকেজঃ ২৫০ গ্রাম হেয়ার স্পা + ৪০০ মিলি তেল</h2>
                        <p>ডেলিভারি চার্জ ফ্রি</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-success">১৫০০ টাকা</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;