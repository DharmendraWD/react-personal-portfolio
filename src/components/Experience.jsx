import React from 'react'
import { Link } from "react-router-dom";


function Experience() {
    return (
        <>
            <section class="">
                <div class="py-12">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                        <div class="lg:text-center">

                            <p class="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-white sm:text-4xl">
                                I'm Working as a Web developer Since 2022.
                            </p>
                            <p class="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
                                Back in the day, while I was learning as a freelancer, I learned lot of Lattest Technologies and I'm currently Working as a <b>MERN</b> Web Developer.
                            </p>
                        </div>

                        <div class="mt-10">
                            <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                                <div class="relative">
                                    <dt>
                                        <div
                                            class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                            <img src="https://www.svgrepo.com/show/503163/api-settings.svg" />
                                        </div>
                                        <p class="font-heading ml-16 text-lg leading-6 font-bold text-white">API Integration/Development</p>
                                    </dt>
                                    <dd class="mt-2 ml-16 text-base text-gray-500">
                                        I Integrate and Develope API as your requirements with the Help of NodeJs, ExpressJS.
                                    </dd>
                                </div>
                                <div class="relative">
                                    <dt>
                                        <div
                                            class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                            <img src="https://www.svgrepo.com/show/503138/webpack.svg" />
                                        </div>
                                        <p class="font-heading ml-16 text-lg leading-6 font-bold text-white">DO Frontend
                                        </p>
                                    </dt>
                                    <dd class="mt-2 ml-16 text-base text-gray-500">
                                        I do all the frontend work with or without framework or Library. I do it traditionally and also Usinf latest framework and library.
                                    </dd>
                                </div>
                                <div class="relative">
                                    <dt>
                                        <div
                                            class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                            <img src="https://www.svgrepo.com/show/511771/dashboard-671.svg" />

                                        </div>
                                        <p class="font-heading ml-16 text-lg leading-6 font-bold text-white">Worked on Project
                                        </p>
                                    </dt>
                                    <dd class="mt-2 ml-16 text-base text-gray-500"> I work and worked on lot of real Project which is making lot of profit in today's market. You can check them in my Project Section.
                                    </dd>
                                </div>
                                <div class="relative">
                                    <dt>
                                        <div
                                            class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                            <img src="https://www.svgrepo.com/show/76267/free-commercial-label.svg" />

                                        </div>
                                        <p class="font-heading ml-16 text-lg leading-6 font-bold text-white">We think about your Satisfaction
                                        </p>
                                    </dt>
                                    <dd class="mt-2 ml-16 text-base text-gray-500">Our first approach is to make our client happy with the project that is given to us. We provide next level work for our clients.
                                    </dd>
                                </div>
                            </dl>
                        </div>
                        <Link to="mailto:dharmendrathakur.dev@gamail.com">
                            <h2
                                class="mt-[50px] font-heading mb-4 bg-orange-100 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest text-[pink-600] text-center uppercase title-font">
                                Contact
                            </h2></Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Experience