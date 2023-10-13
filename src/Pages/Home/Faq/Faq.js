import React from 'react';

const Faq = () => {
    return (
        <div className='lg:mt-10 mt-0'>
            <h1 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-3xl"
            >নীচের প্রশ্নগুলো আমরা প্রতিনিয়ত পেয়ে থাকি। আশা করি এর মধ্যে আপনি আপনার প্রশ্নের উত্তর পেয়ে যাবেন এবং আমাদের তেলের সম্পর্কে বিস্তারিত জানতে পারবেন...</h1>
            <div className="space-y-4">
                <details
                    className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
                    open
                >
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                        <h2 className="text-lg font-medium text-gray-900">
                            তেলের দাম কত এবং কিভাবে অর্ডার পাবো??
                        </h2>

                        <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                        ২০০ ml Natural Hair Oil এর দাম ৫০০ টাকা। ডেলিভারি চার্জ ঢাকার ভেতর ৮০ টাকা। ঢাকার বাইরে ১৪০ টাকা। ৪০০ মিলি. অর্থাৎ ২ বোতল নিলে ডেলিভারি চার্জ ফ্রি। সেক্ষেত্রে ১০০০ টাকা দিলেই হবে। হোম ডেলিভারিতে প্রোডাক্ট হাতে পাবার পর টাকা দিয়ে নিতে পারবেন। অর্ডার করতে আপনার বিস্তারিত লিখে নীচের ফর্মটি পূরণ করুন। ৩-৫ দিনের মধ্যে ডেলিভারি পাবেন।
                    </p>
                </details>

                <details
                    className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
                >
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                        <h2 className="text-lg font-medium text-gray-900">
                            আমার প্রচুর চুল পড়ছে। আমার কি চুল পড়া কম হবে কিংবা নতুন চুল গজাবে?
                        </h2>

                        <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                        চুল পড়ার বিভিন্ন কারণ থাকতে পারে। কারও বংশগত কারণে হয় কারও বা আবার প্রোটিনের অভাবে। আসলে চুল পড়া শুরু হওয়ার আগে আমরা খুব কম মানুষই চুলের যত্ন নিই। কিন্তু সময় থাকতে আপনি সঠিকভাবে যত্ন নিলে আপনি একদম টাক হয়ে যাওয়া থেকে রক্ষা পাবেন। চুলের জন্য উপকারী প্রায় ৩০ টি প্রাকৃতিক উপাদানে তৈরি আমার তেলটি ব্যবহারে চুল পড়া কমবে, নতুন চুল গজাবে, চুল লম্বা ও ঘন হবে, চুল সিল্কি, শাইনি এবং কালো হবে, খুশকি থাকলে সেটাও কমে যাবে, তেলটি ব্যবহারের অল্প কিছুদিনের মধ্যেই আপনি পরিবর্তন টা বুঝতে পারবেন। মোটকথা চুলের যেকোনো সমস্যার সমাধান আমার এই ন্যাচারাল হেয়ার অয়েল।
                    </p>
                </details>
                <details
                    className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
                >
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                        <h2 className="text-lg font-medium text-gray-900">
                            আমার চুল অকালে পেকে যাচ্ছে। এই তেল কি আমার চুল কালো করবে?
                        </h2>

                        <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                        অকালে চুল পেকে যাওয়া চুলের জন্য খুব খারাপ লক্ষণ। এর মানে আপনার চুলের স্বাস্থ্য ভালো নেই কিংবা প্রোটিনের অভাব। সময় থাকতে সঠিক ভাবে যত্ন না নিলে সামনে আরও ক্ষতি হবে। আমার তেলটি প্রাকৃতিক ভাবে আপনার চুলকে কালো করবে শতভাগ। বহু মানুষের অকাল পক্কতার সমাধান করছে আমার প্রাকৃতিক তেলটি।
                    </p>
                </details>
                <details
                    className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
                >
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                        <h2 className="text-lg font-medium text-gray-900">
                            আমার খুশকির সমস্যা আছে। এই তেল কি খুশকি দূর করবে?
                        </h2>

                        <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                        খুশকি হওয়া চুল পড়ে যাওয়ার প্রধান কারণ। আমার এই তেল নিয়মিত ব্যবহারে খুশকি শতভাগ দূর হবে এবং আপনার চুল পড়ে যাওয়া থেকে রক্ষা পাবে।
                    </p>
                </details>
                <details
                    className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
                >
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                        <h2 className="text-lg font-medium text-gray-900">
                            কি কি উপদান দিয়ে তৈরি এবং উপকারিতা?
                        </h2>

                        <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                        আমলকী,পুরতকী,বইরা,শিকাকাই,রিঠা,কালিজিরা,মেথি,কাঠবাদাম,তিসি,টিল,সুনালিলতা,কারিপাতা,জবা পাতা,এলোভেরা,নিম পাতা,পান পাতা, ই-ক্যাপ,ক্যাসটোর ওয়েল, নারিকেল,নরতুকি, কালাকিশোর গাছ, আমলোকি পিয়াজ এর রস,দারচিনি,লং ও ত্যাজ পাতা সহ আরো কিছু উপাদান

                        উপকারিতা
                        নিয়মিত ওয়েলিং স্ক্যাল্পকে হাইড্রেটেড রেখে চুলে জট বাঁধা, খুশকি ও চুল পড়া নিয়ন্ত্রন করে। ব্লাড সার্কুলেশন বাড়িয়ে হেয়ার গ্রোথ স্টিমুলেট করে । প্রয়োজনীয় পুষ্টির যোগান দিয়ে চুলের গোড়া শক্ত ও মজবুত করে, চুল পড়া বন্ধ করে। চিরতরে ড্যান্ড্রাফ ও স্ক্যাল্প ইনফেকশন থেকে মুক্তি দেয়। চুল লম্বা করে , চুল ঘন করে ।
                    </p>
                </details>
                <details
                    className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
                >
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                        <h2 className="text-lg font-medium text-gray-900">
                            আপনারা কি কোন গ্যারান্টি দেন?
                        </h2>

                        <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                        ১০০% গ্যারান্টির কথা বলা বিক্রির জন্য মিথ্যার আশ্রয় ছাড়া আর কিছুই না। কারণ চুলপড়ার অনেক কারণ থাকতে পারে। অনেকের বংশগত কারণেও চুল পড়ে থাকে। আবার অনেকের প্রোটিনের অভাবে চুল পড়ে। আমরা শতভাগ গ্যারান্টি দিইনা তবে প্রাকৃতিক যেসব উপাদান চুলের জন্য উপকারী এমন প্রায় ৩০ টা উপাদান দিয়ে তেলটি তৈরি করেছি। আমি এবং আরও অনেকে উপকার পেয়েছে। আশা করছি আপনিও উপকার পাবেন। এছাড়াও আমাদের পেইজে আপনি উপকার পেয়েছে এমন মানুষের প্রচুর পরিমাণে রিভিউ দেখতে পাবেন। নিয়ম মেনে ব্যবহার করলে আপনি অবশ্যই উপকার পাবেন।
                    </p>
                </details>
                <details
                    className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
                >
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                        <h2 className="text-lg font-medium text-gray-900">
                            আগে থেকে কোন টাকা দেয়া লাগবে?
                        </h2>

                        <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                        আগে থেকে এক টাকাও দেয়া লাগবে না। ডেলিভারি ম্যান এর কাছ থেকে প্রোডাক্ট বুঝে পেয়ে তারপর টাকা দিবেন। অর্ডার করতে নীচের ফর্মটি পূরণ করুন।
                    </p>
                </details>
            </div>
        </div>
    );
};

export default Faq;