import React, { useContext } from 'react'
import BigBook from './../Component/BigBook/BigBook'
import BigBookContainer from './../Component/BigBookContainer/BigBookContainer'
import MapContainer from './../Component/MapContainer/MapContainer'
import book from './../assets/img/Schmitt_Nocognia_3D_500pcx 1.png'
import Map from './../Component/Map/Map'
import GetBooks from './../Component/GetBooks/GetBooks'
import { ThemeContext } from '../Component/contexts/theme'
import './home.css'

const HomePage = () => {
  const theme = useContext(ThemeContext)
  return (
    <div className={`${theme}`}>
      <BigBookContainer>
        <BigBook
          title="Author of august"
          Subtitle="Eric-Emanuel Schmitt"
          desc="Eric-Emmanuel Schmitt has been awarded more than 20 literary prizes and distinctions, and in 2001 he received the title of Chevalier des Arts et des Lettres. His books have been translated into over 40 languages."
          btn="View his boooks"
          book={book}
        />
      </BigBookContainer>
      <GetBooks />
      <MapContainer>
        <Map
          title1="Did you know us?"
          content="We are about books and our purpose is to show you the book who can chage your life or distract you from the real world în a better one. BWorld works with the must popular publishs just for your delight. If you are about books, you must to subscribe to our newsletter."
          Bbutton="Subscribe"
        />
      </MapContainer>
    </div>
  )
}

export default HomePage
