import React from 'react'

function TopButtons() {

    const cities = [
        {
            id:1,
            title: 'Boston'
        },
        {
            id:2,
            title: 'Newyork'
        },
        {
            id:3,
            title: 'Seattle'
        },
        {
            id:4,
            title: 'Dallas'
        },
        {
            id:5,
            title: 'Miami'
        },
    ]
  return (
    <div className='flex items-center justify-center my-6'>
        {cities.map((city) => (
            <button className='text-white text-lg font-medium'>{city.title}</button>
        ))}
    </div>
  )
}

export default TopButtons