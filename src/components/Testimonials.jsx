import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const testimonialList = [
    {
        img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
        name: "Aksay Kumar",
        position: "CEO & Founder at EasyFrontend",
        content:
            "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you. It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.",
    },
    {
        img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_2.jpeg",
        name: "Sara Tailor",
        position: "CEO & Founder at EasyFrontend",
        content:
            "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.",
    },
    {
        img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg",
        name: "John Leo",
        position: "CEO & Founder at EasyFrontend",
        content:
            "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you. It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.",
    },
    {
        img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg",
        name: "Aksay Kumar",
        position: "CEO & Founder at EasyFrontend",
        content:
            "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you. It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.",
    },
    {
        img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_2.jpeg",
        name: "Sara Tailor",
        position: "CEO & Founder at EasyFrontend",
        content:
            "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.",
    },
    {
        img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
        name: "John Leo",
        position: "CEO & Founder at EasyFrontend",
        content:
            "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you. It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.",
    },
];

export default function Testimonials() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className="ezy__testimonial24 py-14 md:py-24 bg-black text-white">
            <div className="container px-4 mx-auto">
                <div className="flex items-center justify-center text-center mb-6 md:mb-12">
                    <div className="max-w-xl">
                        <hr className="w-20 mb-4 border-gray-600 mx-auto" />
                        <h2 className="text-[32px] font-bold">What They Say</h2>
                    </div>
                </div>

                <Slider {...settings}>
                    {testimonialList.map((testimonial, i) => (
                        <div
                            className="transition-transform duration-300 ease-in-out transform hover:scale-105 px-2"
                            key={i}
                        >
                            <div className="flex flex-col h-80 mt-5 mb-5 p-6 cursor-pointer xl:p-10 border border-gray-600 rounded-md shadow-lg shadow-cyan-500/50">
                                <div className="flex items-center mb-6">
                                    <div className="mr-3">
                                        <img
                                            src={testimonial.img}
                                            alt={testimonial.name}
                                            className="max-w-full h-auto rounded-full border"
                                            width="85"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-medium">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-sm mb-2">{testimonial.position}</p>
                                    </div>
                                </div>
                                <p className="opacity-75 mb-2">{testimonial.content}</p>
                                <div className="mt-auto"></div> {/* Keeps all cards equal height */}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}
