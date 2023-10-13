import React from 'react';

const Video = () => {
    return (
        <div>
            <section className="bg-[url(https://i.ibb.co/7WdZH77/background.jpg)] bg-cover bg-center bg-no-repeat">
                <div
                    className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
                >
                    <div className="mx-auto max-w-xl text-center">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                            Organic
                            <strong className="font-extrabold text-[#279b37] sm:block">
                                Natural Hair oil
                            </strong>
                        </h1>

                        <p className="mt-4 sm:text-xl/relaxed">
                            চুলের যেকোনো সমস্যার যদি প্রাকৃতিক ভাবে সমাধান করতে চান কোন পার্শ্ব-প্রতিক্রিয়া ছাড়া তাহলে এখনি অর্ডার করুন প্রাকৃতিক প্রায় ৩০ টি উপাদানে তৈরি Natural Hair oilচুলের যেকোনো সমস্যার যদি প্রাকৃতিক ভাবে সমাধান করতে চান কোন পার্শ্ব-প্রতিক্রিয়া ছাড়া তাহলে এখনি অর্ডার করুন প্রাকৃতিক প্রায় ৩০ টি উপাদানে তৈরি Natural Hair oil
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <a
                                className="block w-full rounded bg-[#279b37] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#279b37] focus:outline-none focus:ring active:bg-[#279b37] sm:w-auto"
                                href="/#order"
                            >
                                Order Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Video;