import React from 'react'
import Computer from '../assets/Computer.png'
import About from './About'
import Whyus from './Whyus'
import Courses from './Courses'
import Stats from './Stats'
import Testimonials from './Testimonials'
import Contactus from './Contactus'


export default function Home() {
  return (
    <>
      <header
        className="bg-cover bg-right bg-no-repeat text-white relative flex justify-center items-center py-40 md:py-48 z-[1]"
        style={{
          backgroundImage:
            "url(https://study.com/cimages/course-image/computing-for-teachers-professional-development_137549_large.jpg)",
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 bottom-0 -z-[1]"
          style={{
            background:
              "linear-gradient(130deg, rgba(13, 110, 253, 0.35), rgba(0, 0, 0, 0.631))",
          }}
        ></div>
        <div className="container px-4">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-9 lg:col-span-7 xl:col-span-6">
              <h2 className="text-[26px] leading-tight md:text-7xl font-bold tracking-wider mb-6">
                Computer Plaza
              </h2>
              <p className="text-lg leading-relaxed mb-12 md:mr-32 lg:mr-52">
              Computer Plaza is a computer training school which is imparting computer education such as Tally, Adobe Photoshop, school courses, and programming courses to students and professionals for the past 25 years
              </p>
              <div className="md:mr-40 lg:mr-72">
                <button className="py-4 px-8 text-bold bg-white text-black font-bold hover:bg-opacity-80 rounded-full w-full">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Whyus />
      <About />
      <Courses />
      <Stats />
      <Testimonials />
      <Contactus />
    </>
  );
};






