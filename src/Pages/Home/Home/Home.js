import image from "../../../assest/2.png"
import React from 'react';

const Home = () => {
    return (
        <div>
            <section>
                <div
                    className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
                >
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div
                            className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
                        >
                            <img
                                alt="Party"
                                src={image}
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>

                        <div className="lg:py-24">
                            <h2 className="text-3xl font-bold sm:text-4xl">সেরা প্রদান</h2>
                            <h2 className="text-3xl font-bold sm:text-4xl">আপনার জন্য জৈব তেল</h2>


                            <p className="mt-4 text-gray-600">

                                আমরা সারা বিশ্বে সেরা দাড়ি তেল সরবরাহ করি। আমরা দাড়ি তেলের জন্য বিশ্বের সেরা দোকান. আপনি কোনো দ্বিধা ছাড়াই আমাদের পণ্য কিনতে পারেন কারণ আমরা সবসময় আমাদের পণ্যের গুণমান সম্পর্কে একমত এবং সর্বদা এটি সঠিকভাবে বজায় রাখি যাতে আপনি বিশ্বাস করতে পারেন এবং এটিই আমাদের মূল লক্ষ্য যে আমরা বিশ্বাস করি...
                            </p>
                            <p className="mt-4 text-gray-600">

                                আমাদের কিছু গ্রাহক বলেছেন যে তারা আমাদের বিশ্বাস করেন এবং আমাদের পণ্যটি কোন প্রকার দ্বিধা ছাড়াই ক্রয় করেন কারণ তারা আমাদের বিশ্বাস করেন এবং সর্বদা খুশি হন
                            </p>
                            <div className="mt-8 flex flex-wrap gap-4 text-center">
                                <a
                                    href="/#order"
                                    className="block w-full rounded bg-[#279b37] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#279b37] focus:outline-none focus:ring active:bg-[#279b37] sm:w-auto"
                                >
                                    ORDER NOW
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;