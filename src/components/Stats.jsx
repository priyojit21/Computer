import React from 'react'
import { useSpring,animated } from 'react-spring'

export default function Stats() {

  function Number({n}){
    const {number} = useSpring ({
        from: {number:0},
        number:n,
        delay:100,
        config : {mass:1,tension:5,friction:5},
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
  }

  return (
    <div className="bg-gray-900 py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:max-w-none">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Trusted by Students
        </h2>
        <p className="text-lg leading-8 text-gray-300">
          We can help you grow your audience and your business, no matter the
          size.
        </p>
      </div>
      <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col bg-white/5 p-8">
          <dt className="text-sm font-semibold leading-6 text-gray-300">
            Registered students
          </dt>
          <dd className="order-first text-3xl font-semibold tracking-tight text-white flex justify-center">
            <Number n={120}/>
            <p>+</p>
          </dd>
        </div>
        <div className="flex flex-col bg-white/5 p-8">
          <dt className="text-sm font-semibold leading-6 text-gray-300">
            Subject Matter Experts
          </dt>
          <dd className="order-first text-3xl font-semibold tracking-tight text-white">
          <Number n={7}/>
          </dd>
        </div>
        <div className="flex flex-col bg-white/5 p-8">
          <dt className="text-sm font-semibold leading-6 text-gray-300">
            Courses Offered
          </dt>
          <dd className="order-first text-3xl font-semibold tracking-tight text-white flex justify-center">
          <Number n={10}/>
          <p>+</p>
          </dd>
        </div>
        <div className="flex flex-col bg-white/5 p-8">
          <dt className="text-sm font-semibold leading-6 text-gray-300">
            Jobs Provided
          </dt>
          <dd className="order-first text-3xl font-semibold tracking-tight text-white flex justify-center">
          <Number n={20}/>
          <p>+</p>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</div>

  )
}
