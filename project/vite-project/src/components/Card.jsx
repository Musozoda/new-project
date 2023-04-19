import React from 'react'

const Card = (props) => {
  return (
    <div className='flex flex-col gap-[28px] max-w-[50%]'>
        <img src={props.image} alt="" />
        <p>{props.text}</p>
    </div>
  )
}

export default Card