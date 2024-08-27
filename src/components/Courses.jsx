import React from 'react';
import { Link } from 'react-router-dom';

import photoshop from '../assets/photoshop.jpg'
import school from '../assets/school.jpg'
import tally from '../assets/tally.jpg'
import webdev from '../assets/webdev.jpg'
import coding from '../assets/coding.webp'
import basic from '../assets/basic.jfif'

export default function Courses() {
  const courses = [
    { id: 1, title: 'Computer Basics', description: 'Learn the basics of computers.',image:basic },
    { id: 2, title: 'School Course', description: 'School-level course material.' ,image:school},
    { id: 3, title: 'Tally', description: 'Tally accounting software course.' ,image:tally},
    { id: 4, title: 'Programming', description: 'Introduction to programming.',image:coding },
    { id: 5, title: 'Photoshop Illustrations', description: 'Learn Photoshop illustrations.',image:photoshop },
    { id: 6, title: 'Web Technology', description: 'Web development and technologies.',image:webdev},
  ];

  return (
    <section className="pl-20 lg:pt-[40px] pb-12 lg:pb-[90px]">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
              <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">Our Courses</h2>
              <p className="text-base text-body-color">
                Explore our diverse range of courses designed to cater to the varying needs and interests of individuals aspiring to enhance their computer proficiency.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-4">
          {courses.map(course => (
            <div key={course.id} className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] border p-2 w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
                <div className="min-h-[245px]">
                  {/* <img src="https://readymadeui.com/cardImg.webp" className="w-full rounded-lg" alt={course.title} /> */}
                  <img src={course.image} className="w-full rounded-lg" alt={course.title} />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold">{course.title}</h3>
                  <p className="mt-3 text-sm text-gray-500 leading-relaxed">{course.description}</p>
                  {/* course has  title,description and img */}
                  <Link to="/courseSection" state={course}>
                    <button
                      type="button"
                      className="mt-6 px-5 py-2.5 w-full rounded-lg text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700"
                    >
                      View
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// import React from 'react'
// import { Link } from 'react-router-dom'
// import CourseSection from './CourseSection'

// export default function Courses() {

//   return (
//     <section className="pl-20 lg:pt-[40px] pb-12 lg:pb-[90px]">
//       <div className="container">
//         <div className="flex flex-wrap -mx-4">
//           <div className="w-full px-4">
//             <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
//               <h2
//                 className="
//             font-bold
//             text-3xl
//             sm:text-4xl
//             md:text-[40px]
//             text-dark
//             mb-4
//             "
//               >
//                 Our Courses
//               </h2>
//               <p className="text-base text-body-color">
//                 Explore our diverse range of courses designed to cater to the varying needs and interests of individuals aspiring to enhance their computer proficiency.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-wrap -mx-4">

//           <div className="w-full md:w-1/2 lg:w-1/3 px-4">

//             <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] border p-2 w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
//               <div className="min-h-[245px]">
//                 <img
//                   src="https://readymadeui.com/cardImg.webp"
//                   className="w-full rounded-lg"
//                 />
//               </div>
//               <div className="p-6 text-center">
//                 <h3 className="text-xl font-bold">Computer Basics</h3>
//                 <p className="mt-3 text-sm text-gray-500 leading-relaxed">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
//                   arcu, at fermentum dui. Maecenas
//                 </p>
//                 <Link to="courseSection">
//                   <button
//                     type="button"
//                     className="mt-6 px-5 py-2.5 w-full rounded-lg text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700"
//                   >
//                     View
//                   </button>
//                 </Link>

//               </div>
//             </div>




//           </div>

//           <div className="w-full md:w-1/2 lg:w-1/3 px-4">
//             <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] border p-2 w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
//               <div className="min-h-[245px]">
//                 <img
//                   src="https://readymadeui.com/cardImg.webp"
//                   className="w-full rounded-lg"
//                 />
//               </div>
//               <div className="p-6 text-center">
//                 <h3 className="text-xl font-bold">School Course</h3>
//                 <p className="mt-3 text-sm text-gray-500 leading-relaxed">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
//                   arcu, at fermentum dui. Maecenas
//                 </p>
//                 <Link to="courseSection">
//                   <button
//                     type="button"
//                     className="mt-6 px-5 py-2.5 w-full rounded-lg text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700"
//                   >
//                     View
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <div className="w-full md:w-1/2 lg:w-1/3 px-4">
//             <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] border p-2 w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
//               <div className="min-h-[245px]">
//                 <img
//                   src="https://readymadeui.com/cardImg.webp"
//                   className="w-full rounded-lg"
//                 />
//               </div>
//               <div className="p-6 text-center">
//                 <h3 className="text-xl font-bold">Tally</h3>
//                 <p className="mt-3 text-sm text-gray-500 leading-relaxed">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
//                   arcu, at fermentum dui. Maecenas
//                 </p>
//                 <Link to="courseSection">
//                   <button
//                     type="button"
//                     className="mt-6 px-5 py-2.5 w-full rounded-lg text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700"
//                   >
//                     View
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <div className="w-full md:w-1/2 lg:w-1/3 px-4">
//             <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] border p-2 w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
//               <div className="min-h-[245px]">
//                 <img
//                   src="https://readymadeui.com/cardImg.webp"
//                   className="w-full rounded-lg"
//                 />
//               </div>
//               <div className="p-6 text-center">
//                 <h3 className="text-xl font-bold">Programming</h3>
//                 <p className="mt-3 text-sm text-gray-500 leading-relaxed">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
//                   arcu, at fermentum dui. Maecenas
//                 </p>
//                 <Link to="courseSection">
//                   <button
//                     type="button"
//                     className="mt-6 px-5 py-2.5 w-full rounded-lg text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700"
//                   >
//                     View
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <div className="w-full md:w-1/2 lg:w-1/3 px-4">
//             <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] border p-2 w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
//               <div className="min-h-[245px]">
//                 <img
//                   src="https://readymadeui.com/cardImg.webp"
//                   className="w-full rounded-lg"
//                 />
//               </div>
//               <div className="p-6 text-center">
//                 <h3 className="text-xl font-bold">Photoshop Illustrations</h3>
//                 <p className="mt-3 text-sm text-gray-500 leading-relaxed">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
//                   arcu, at fermentum dui. Maecenas
//                 </p>
//                 <Link to="courseSection">
//                   <button
//                     type="button"
//                     className="mt-6 px-5 py-2.5 w-full rounded-lg text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700"
//                   >
//                     View
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <div className="w-full md:w-1/2 lg:w-1/3 px-4">
//             <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] border p-2 w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
//               <div className="min-h-[245px]">
//                 <img
//                   src="https://readymadeui.com/cardImg.webp"
//                   className="w-full rounded-lg"
//                 />
//               </div>
//               <div className="p-6 text-center">
//                 <h3 className="text-xl font-bold">Web Technology</h3>
//                 <p className="mt-3 text-sm text-gray-500 leading-relaxed">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
//                   arcu, at fermentum dui. Maecenas
//                 </p>
//                 <Link to="courseSection">
//                   <button
//                     type="button"
//                     className="mt-6 px-5 py-2.5 w-full rounded-lg text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700"
//                   >
//                     View
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>

//   )
// }

