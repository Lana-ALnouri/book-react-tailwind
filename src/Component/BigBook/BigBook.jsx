import React from 'react'



const BigBook = ({title,Subtitle,desc,btn,book}) => {
  return (
    <div className=' flex-wrap flex justify-between pt-5 pb-16'>
        <div className=' ml-3  md:ml-20 pt-7 mb-10'> 
            <p className=' w-28 p-2 text-xs text-center rounded	 border-2 md:w-32 md:text-sm  text-violet-500 md:p-2 mb-4 border-violet-500'>{title}</p>
            <h1 className=' m-auto text-left font-bold text-xl md:max-w-lg  leading-none md:text-5xl mb-4'>{Subtitle}</h1>
            <p className='  mr-2 text-left min-w-70 text-sm m-auto	md:text-center max-w-lg font-normal leading-8 md:text-base	mb-4 '>{desc}</p>
            <button className=' rounded  text-center cursor-pointer w-48 h-11 border-none  text-white font-bold  bg-purple-500'>{btn}</button>
        </div>
        <div>
            <img className=' ml-16 mb-3 mr-7 w-44 md:w-auto' src={book} alt="" />
        </div>
    </div>
  )
}

export default BigBook



