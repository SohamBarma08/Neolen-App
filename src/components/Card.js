import React from "react";
import Navbar from "./Navbar";
export default function Card() {
    return (
        <div>
            <div className="h-full w-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-cyan-600 from-10% via-purple-500 via-30% to-slate-900 to-75% min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-2">
                <div className="h-full relative py-3 sm:max-w-full sm:mx-auto">
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-5 bg-clip-padding bg-opacity-50 border border-gray-200">
                        <Navbar />
                        <div className="flex flex-row justify-between items-center">
                            <div className="w-full flex items-center justify-center">
                                <div className="max-w-md mx-auto">
                                    <h1 className="text-5xl text-zinc-200 font-sans font-black mt-10">The Digital Marketing Agency that makes A Difference</h1>
                                    <div className="my-10">
                                        <button
                                            type="button"
                                            className="text-amber-500 hover:text-white border border-amber-500 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-white dark:text-white dark:hover:text-white border border-amber-500 dark:hover:bg-amber-500 dark:focus:ring-amber-300"
                                        >
                                            Mobile App Design
                                        </button>

                                        <button
                                            type="button"
                                            className="text-amber-500 hover:text-white border border-amber-500 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-white dark:text-white dark:hover:text-white border border-amber-500 dark:hover:bg-amber-500 dark:focus:ring-amber-300"
                                        >
                                            Games
                                        </button>
                                        <button
                                            type="button"
                                            className="text-amber-500 hover:text-white border border-amber-500 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-white dark:text-white dark:hover:text-white border border-amber-500 dark:hover:bg-amber-500 dark:focus:ring-amber-300"
                                        >
                                            Marketing
                                        </button>
                                        <button
                                            type="button"
                                            className="text-amber-500 hover:text-white border border-amber-500 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-white dark:text-white dark:hover:text-white border border-amber-500 dark:hover:bg-amber-500 dark:focus:ring-amber-300"
                                        >
                                            Search Engine OPT
                                        </button>
                                        <button
                                            type="button"
                                            className="text-amber-500 hover:text-white border border-amber-500 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-white dark:text-white dark:hover:text-white border border-amber-500 dark:hover:bg-amber-500 dark:focus:ring-amber-300"
                                        >
                                            Software Development for Business
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex items-center justify-center">
                                <div>
                                    <p className="text-2xl text-zinc-200 font-sans font-semibold m-10">
                                        Agency that build many amazing product to boost your
                                        business to next level
                                    </p>
                                    <div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between items-center mt-10 md:flex-row">
                            <div className="w-full flex items-center justify-center">
                                <div class="relative bg-fuchsia-200 w-96 h-60 rounded-lg shadow m-5 md:m-0">
                                    <div className="justify-center p-5 text-left font-sans font-semibold text-4xl">
                                        Global partners
                                    </div>
                                    <div className="flex flex-row justify-between items-center">
                                        <div className="w-full flex items-center justify-center p-5">
                                            <div className="max-w-md mx-auto">
                                                <p className="font-sans font-medium">
                                                    Agency that build many amazing product to boost your
                                                    business to next level
                                                </p>
                                            </div>
                                        </div>
                                        <div className="w-full flex items-center justify-center p-5">
                                            <div>
                                                <p className="font-sans font-medium">We are officiallypartner with world to best brands, Subscribe to our new letter.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex items-center justify-around">
                                <div className="relative bg-sky-200 w-72 h-48 rounded-lg shadow m-5 md:ml-5 mt-0">
                                    <div className="w-full h-full flex justify-center items-center text-5xl font-black">45M</div>
                                </div>
                            </div>
                            <div className="w-full flex items-center justify-around">
                                <div className="relative bg-red-200 w-72 h-48 rounded-lg shadow m-5 md:mt-0">
                                    <div class="w-full h-full flex justify-center items-center text-center text-xl font-black">
                                        <p>5000+<br/>Total Clients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
