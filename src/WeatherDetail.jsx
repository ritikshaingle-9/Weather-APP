import React from 'react'

const WeatherDetail = ({detail, value}) => {
  return (
    <p className='flex justify-between border-b-1 pb-2 border-dashed border-gray-400 mt-1'>
        <span>{detail}</span>
        <span>{value}</span>
    </p>
  )
}

export default WeatherDetail