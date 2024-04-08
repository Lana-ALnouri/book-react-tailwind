import axios from 'axios'
import React, { useEffect, useState  } from 'react'
import star from './../../assets/img/bi_star-fill.svg'
import miniBook from './../../assets/img/book-open-01.svg'
import { Link } from 'react-router-dom';
// import { ThemeContext } from '../contexts/theme'
// import { useContext } from 'react';

const GetBooks = () => {
    const [Data,setData] = useState([])

    useEffect(() => {
      axios.get('https://example-data.draftbit.com/books?_limit=8')
            .then(res=> {console.log(res.data)
            setData(res.data)})
            .catch(error => console.log(error))
    }, []);
    const showDetails =(id)=>{
      axios.get(`https://example-data.draftbit.com/books/${id}`)
      .then(res=> {console.log (res.data)})
      .catch (error => console.log(error))
    }
  return (
    <div className=  'ml-16 mr-16' >
      <h1 className=' mb-12 text-4xl  ml-2 font-semibold '>selected for you</h1>
          <div className=' flex justify-around align-middle flex-wrap '>  
          {Data?.map(({id, image_url,authors, num_pages,rating ,btn }) => {
      return (
        <div key={id} className=' mb-12'>
          <img className=' w-72 h-96' src={image_url} alt="" />
          <p className=' text-s font-bold mt-2'>{authors}</p>
          <div className=' flex justify-evenly gap-36 mt-2 mb-3'>
            <div className=' flex justify-start  '>
              <img className=' mr-2 w-4' src={miniBook} alt="" /> 
              <p className=' text-sm '>{num_pages}    pages</p>
            </div>
            <div className=' flex justify-end'>
              <img className=' mr-2 w-4' src={star} alt="" />
              <p className=' text-sm'>{rating}</p>
            </div>
          </div>
          <Link to={`/book/${id}`}>
          <button className=' border bg-purple-400 w-72  h-10 text-white ' key={id} onClick={()=>showDetails(id)  } >{btn} Show Details</button>
          </Link>
        </div>
      );
    })}
  </div>
  </div>
);
};

export default GetBooks
