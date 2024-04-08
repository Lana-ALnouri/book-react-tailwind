import axios from 'axios'
import React, { useEffect, useState } from 'react'
import plus from './../../assets/img/akar-icons_circle-plus.svg'
import minus from './../../assets/img/akar-icons_circle-minus.svg'
import one from './../../assets/img/1 (1).png'
import { useParams } from 'react-router-dom'
import { ThemeContext } from '../contexts/theme'
import { useContext } from 'react'

const Details = () => {
  const theme = useContext(ThemeContext)

    const [Data,setData] = useState([])
    const {id} = useParams();
    useEffect(() => {
      axios.get(`https://example-data.draftbit.com/books/${id}`)
            .then(res=> {console.log(res.data)
            setData(res.data)})
            .catch(error => console.log(error))
    }, [id]);
  return (
    <div   className= { `${theme} flex flex-wrap  md:flex md:flex-nowrap md:pr-16 md:pl-16 md:pt-24 md:pb-24`}>
        <img src={Data.image_url} alt="" className=' w-full md:w-2/5 h-screen			' />
        <div className=' w-full  ml-2 md:w-3/5 md:ml-16	font-bold  h-screen  '>
          <h1 className='text-center text-lg  	 md:text-4xl md:text-left '>{Data.title}</h1>
          <p className=' text-xs mt-2 ml-1 mb-8	'>{Data.authors}</p>
          <p className=' mt-8 mb-3'>About book :</p>
          <p className=' max-w-xs	 text-left text-xs m-auto	 md:max-w-2xl font-normal	md:text-sm mt-2 ml-1 leading-6 mb-8 	'>{Data.description}</p>
          <div className=' flex gap-3 mb-8 mt-4 ml-1'>
            <img className=' text-red-400'   src={minus} alt="" />
            <img className=' w-2 h-4 ' src={one} alt="" />
            <img src={plus} alt="" />
          </div>  
          <div className=' mb-9 '>
            <button className=' w-40 h-8 md:w-80 md:h-12 border-2 border-violet-500 text-white mr-6 bg-purple-500'> add a cart</button>
            <button className= ' w-40 h-8 md:w-80  border border-violet text-violet-500	 md:h-12  '>Favorite</button>
          </div>
          <div className=' w-full	 border border-violet-500'></div>
          <div className='  mt-9 	'>
            <div className=' flex mb-9'>
              <p className=' text-violet '>Pages Number :</p>
              <p className=' ml-5'>{Data.num_pages}</p>
            </div>
            <div className=' flex mb-9'>
              <p className='  text-[#C689C6]' >Rating Count :</p>
              <p className=' ml-5'> {Data.rating_count}</p>
            </div>
            <div className=' flex '>
              <p className='  text-[#C689C6]'>Reviews:</p>
              <p className=' ml-5'> {Data.review_count}</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Details


