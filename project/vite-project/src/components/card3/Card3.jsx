import React from 'react'

const Card3 = (props) => {
  return (
    <div className='flex flex-col gap-[28px] max-w-[100%] items-start'>
        <img src={props.image} alt="" />
        <p className='w-[90%]'>{props.textp}</p>
    </div>
  )
}

export default Card3