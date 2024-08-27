import React from 'react'
import { useLocation } from 'react-router-dom';
export default function CourseSection() {
  // uselocation hook to access these props
  const location = useLocation();
  const { title, description,image } = location.state || {};

  return (
    <div className="font-sans p-8 tracking-wide max-lg:max-w-2xl mx-auto">
  <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
    <div className="space-y-4 text-center lg:sticky top-8">
      <div className="bg-gray-100 mt-8 flex items-center sm:h-[380px] rounded-lg">
        <img
          // src="https://readymadeui.com/images/product14.webp"
          src={image}
          alt="Product"
          className="w-full max-h-full object-contain object-top"
        />
      </div>
      
    </div>
    <div className="max-w-xl">
      
      <div className="mt-8">
        <div className="mt-8">
          <h3 className="text-2xl font-bold text-gray-800">
            {title} Course Description
          </h3>
          <p className="text-sm text-gray-600 mt-4">
            Step up your footwear game with our premium men's shoes. Designed
            for comfort and crafted with a contemporary aesthetic, these
            versatile shoes are a must-have addition to your wardrobe. The
            supple and breathable materials ensure all-day comfort, making them
            perfect for everyday wear.
          </p>
        </div>
        <ul className="space-y-3 list-disc mt-6 pl-4 text-sm text-gray-600">
          <li>
            A pair of gray shoes is a wardrobe essential due to its versatility.
          </li>
          <li>
            Available in a wide range of sizes, from extra small to extra large,
            and even in tall and petite sizes.
          </li>
          <li>
            Easy to maintain, they can be machine-washed and dried on low heat.
          </li>
          <li>
            Personalize them with your own designs, patterns, or embellishments
            to make them uniquely yours.
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

  )
}
