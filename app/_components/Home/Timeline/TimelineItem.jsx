import React from 'react'
  
  export default function TimelineItem({ date, title, description, position , index}) {
    const isEven = index % 2 === 0;
  
    return (
      <div className={`mb-8 flex items-center w-full ${isEven ? 'justify-start' : 'justify-end'} lg:even:flex-row-reverse`}>
        <div className={`w-full lg:w-5/12 ${isEven ? 'lg:pl-8' : 'lg:pr-8'}`}>
          <div className="p-4 bg-white rounded shadow relative">
            {/* Arrow */}
            <div className={`hidden lg:block absolute top-1/2 -mt-2 w-4 h-4 rotate-45 bg-white 
              ${isEven ? '-left-2' : '-right-2'}`}></div>
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-sm text-gray-700">{date}</p>
            <p className="mt-2 text-sm">{description}</p>
          </div>
        </div>
      </div>
    )
  }
  