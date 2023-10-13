const Order = () => {

    return (
        <div className='lg:mt-20 mt-0 ' id="order">
            <div className='px-4 lg:px-8 md:px-7 py-6 lg:py-8 md:py-7 w-full md:w-full bg-[#FFFFFF] custom_shadow mt-8 lg:mt-0 md:mt-0'>
                <h3 className='lg:leading-[36px] leading-[30px] text-center md:text-2xl lg:text-2xl text-xl font-semibold text-[#1B1D48]'>অর্ডার করতে আপনার সঠিক তথ্য দিয়ে নিচের ফর্মটি সম্পূর্ণ পূরন করুন। (আগে থেকে কোন টাকা দেয়া লাগবে না। প্রোডাক্ট হাতে পাবার পর টাকা দিবেন)</h3>
                <form
                    action="https://formspree.io/f/xzblbaao"
                    method="POST"
                >
                    <div className='grid lg:grid-cols-2 items-center justify-between mt-4 gap-x-5'>
                        <div>
                            <div>
                                <label className="label">
                                    <span className="label-text">আপনার নাম লিখুন</span>
                                </label>
                                <input type="text" name="name" required placeholder="Name" className="rounded-lg input input-bordered w-full border-[#C3C4E1] focus:outline-none placeholder:text-[#CACACA] only-of-type:text-[#333333]" />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">আপনার মোবাইল নাম্বারটি লিখুন *</span>
                                </label>
                                <input type="number" name="phoneNumber" required placeholder="Phone Number" className="rounded-lg input input-bordered w-full border-[#C3C4E1] focus:outline-none placeholder:text-[#CACACA] only-of-type:text-[#333333]" />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">আপনার ঠিকানা লিখুন</span>
                                </label>
                                <input type="text" name="address" required placeholder="Address" className="rounded-lg input input-bordered w-full border-[#C3C4E1] focus:outline-none placeholder:text-[#CACACA] only-of-type:text-[#333333]" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <label className="label">
                                    <span className="label-text">কোন প্যাকেজটি নিতে চান সিলেক্ট করুন</span>
                                </label>
                                <select required name="product" className="text-[#333333] select select-bordered w-full border-[#C3C4E1] focus:outline-none">
                                    <option>ট্রায়াল কোর্স – ২০০ মিলি তেল</option>
                                    <option>হাফ কোর্সঃ ৪০০ মিলি তেল</option>
                                    <option>কম্বো প্যাকেজঃ ২৫০ গ্রাম হেয়ার স্পা + ৪০০ মিলি তেল</option>
                                </select>
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">পণ্যের পরিমাণ</span>
                                </label>
                                <input type="text" name="quantity" required placeholder="Quaintity" className="rounded-lg input input-bordered w-full border-[#C3C4E1] focus:outline-none placeholder:text-[#CACACA] only-of-type:text-[#333333]" />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">প্রদান খরচ</span>
                                </label>
                                <select required name="shipping" className="text-[#333333] select select-bordered w-full border-[#C3C4E1] focus:outline-none">
                                    <option>ঢাকার ভিতরে: ৳ 80.00</option>
                                    <option>ঢাকার বাহিরে: ৳ 140.00</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <button className='mt-5 leading-[21px] lg:leading-[24px] md:leading-[22px] text-sm lg:text-base md:text-base font-semibold text-white rounded-[10px] bg-[#279b37] md:py-3 lg:py-3 py-2 px-[109px] w-full'>Order</button>
                </form>
            </div>
        </div>

    );
};

export default Order;