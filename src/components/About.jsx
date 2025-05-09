import React from 'react'
import dharmendra from "../assets/images/dharmendra.png"
import { Link } from "react-router-dom";


function About() {
    return (
        <>
            <section class="pt-10 overflow-hiddenmd:pt-0 sm:pt-16 2xl:pt-16 hidenOverFlow">
                <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div class="grid items-center grid-cols-1 md:grid-cols-2">

                        <div>
                            <h2 class="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">My Name is
                                <br class="block sm:hidden" /> <span class="text-pink-500">Dharmendra</span>
                            </h2>
                            <p class="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
                                I do frontend and Backend in NodeJs with MongoDB. I am here to enhance your Organiation/Brands with my Creative designing and data assositaion. Explore my portfolio and let's make your digital dreams a reality!.
                            </p>

                            <p class="mt-4 text-xl text-gray-600 dark:text-gray-300 md:mt-8">
                                <span class="relative inline-block">
                                    <span class="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-gray-900"></span>
                                    <span class="relative"> See What I've done So far.</span>
                                </span>
                                <br class="block sm:hidden" />
                                <Link to="/projects" title=""
                                    class="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline">Explore Here</Link>
                            </p>

                            <Link to="https://www.upwork.com/freelancers/~010c382fc0726fb09b?mp_source=share" target='_blank' class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group mt-[20px]">
                                <span class="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Hire Me</span>
                            </Link>

                        </div>

                        <div class="relative">
                            <img class="absolute firstBlobAboutSvg inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />

                            <img class="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src={dharmendra} alt="" />
                            <img class="absolute top-[79%]" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />
                        </div>

                    </div>
                </div>
            </section >
        </>
    )
}

export default About