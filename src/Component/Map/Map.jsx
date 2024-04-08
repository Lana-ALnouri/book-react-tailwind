import React from 'react'


const Map = ({title1,content,Bbutton}) => {
  return (
    <div className=' flex-wrap pb-28 pt-28 flex justify-between align-middle '>
        <div className=' ml-3 mb-8 mt-7 md:ml-16 max-w-md'>
            <h1 className=' m-auto text-left font-bold text-xl md:text-4xl md:font-bold ml-3  mb-8 '>{title1}</h1>
            <p className=' mr-2 text-left min-w-70 text-sm md:max-w-lg md:text-base	 ml-4 leading-6 mb-16 '>{content}</p>
            <input type="text" placeholder='your name' className=' w-2/3  text-violet-500 border-b-violet-500 md:w-full p-2 pr-19  border text-left ml-4 mb-9' ></input>
            <br />
            <input  type="email" placeholder='your e-mail' className=' w-2/3  text-violet-500 border-b-violet-500 md:w-full p-2  border ml-4 mb-9' ></input>
            <br />
            <button className=' w-2/3 ml-4 p-2 border md:w-full  bg-purple-500 text-white text-base'>{Bbutton}</button>
        </div>
        <div className=' w-1/2 mr-16 '>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106456.35619939462!2d36.20049339366939!3d33.5075913662272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e6dc413cc6a7%3A0x6b9f66ebd1e394f2!2sDamascus%2C%20Syria!5e0!3m2!1sen!2s!4v1705272617881!5m2!1sen!2s" className='w-screen h-screen md:w-full md:h-full	'  ></iframe>
        </div>
    </div>
  )
}

export default Map