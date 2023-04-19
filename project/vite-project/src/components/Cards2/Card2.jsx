import React from 'react'

const Card2 = (props) => {
  return (
    <div className='w-[48%] flex flex-col gap-[34px] lg:w-[100%] items-start'>
      <img src={props.image} alt="" />
      <div className='flex flex-col gap-[20px]'>
        <h1>{props.texth1}</h1>
        <p>{props.textp}</p>
      </div>
    </div>
  )
}

export default Card2