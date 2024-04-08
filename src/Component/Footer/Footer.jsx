import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/theme'

const Footer = ({ copyrights }) => {
  const theme = useContext(ThemeContext)

  return (
    <div className= {`${theme} border-t-2 border-violet-400  `}   >
      <p className=" text-center p-4 font-medium text-sm  ">{copyrights}</p>
    </div>
  )
}

export default Footer
