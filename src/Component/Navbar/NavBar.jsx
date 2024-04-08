import React, { useContext, useState } from 'react'
import Logo from './../../assets/img/Logo.svg'
import moon from './../../assets/img/moon-01 (2).svg'
import sun from './../../assets/img/sun.svg'
import menubtn from './../../assets/img/Menu.svg'
import closebtn from './../../assets/img/fi-bs-cross (2).svg'
import clickpill from './../../assets/img/Group 53.svg'
import clickpilldark from './../../assets/img/Group 55.svg'
import Logodark from './../../assets/img/B-World.svg'
import { ThemeContext } from '../contexts/theme'
import './navbar.css'

const NavBar = ({ ChangeValue }) => {
  const theme = useContext(ThemeContext)
  const [secmenu, setsecmenu] = useState(false)

  const handleShowNavBar = () => {
    setsecmenu(!secmenu)
  }

  let Links = [
    { name: 'Home', link: '/' },
    { name: 'News' },
    { name: 'Promotion of the mount' },
    { name: 'Plublishs' },
    { name: 'Subscribe to the newsletter' },
  ]


  return (
    <div
      className={`NavBar ${theme} flex-wrap pt-6 pb-6   flex justify-between align-middle p-6  gap-4`}
    >
      {theme === 'light' ? (
        <img
          className=" ml-2  w-16 md:w-28  md:ml-16 cursor-pointer"
          src={Logo}
          alt=""
        />
      ) : (
        <img
          className=" ml-2   w-20 md:w-28 h-6   md:ml-16 cursor-pointer"
          src={Logodark}
          alt=""
        />
      )}
      <div>
        <ul className=" hidden md:flex flex-col md:flex-row justify-center mr-20 gap-9 ">
          {Links.map((link) => (
            <li key={link.name} className="  mt-2   ">
              <a
                href={link.link}
                className=" text-base hover:text-gray-400 duration-500 md:text-sm	dark:text-white "
              >
                {link.name}
              </a>
            </li>
          ))}
          <div className=" flex justify-start ml-36    ">
            <button className="  cursor-pointer" onClick={ChangeValue}>
              {theme === 'dark' ? (
                <img className=" 	" src={sun} alt="" />
              ) : (
                <img className=" 	" src={moon} alt="" />
              )}
            </button>
            <p className="  ml-2">
              {' '}
              {theme === 'dark' ? 'Dark mode' : 'Light mode'}
            </p>
          </div>
        </ul>
        <button
          className=" flex "
          onClick={() => {
            setsecmenu(!secmenu)
          }}
        >
          <img className=" mt-1 mr-2 md:hidden" src={menubtn} alt="" />
        </button>
        <div className="md:hidden  ">
          <ul
            style={{ display: secmenu ? 'block' : 'none' }}
            className={
              theme === 'dark'
                ? 'navLight secmenu fixed right-0 top-0 h-screen flex flex-col w-64 bg-black'
                : 'navDark secmenu fixed right-0 top-0 h-screen flex flex-col w-64 bg-white '
            }
          > 
            <button className=" mb-14 mt-8 ml-5 " onClick={handleShowNavBar}>
              <img src={closebtn} alt="" />
            </button>
            <div>
              {Links.map((link) => (
                <li key={link.name} className="  mb-8 ml-5 ">
                  <a
                    href={link.link}
                    className=" text-base cursor-pointer	 hover:text-gray-400 duration-500 md:text-sm	dark:text-white dark:bg-black "
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <span className=" w-64 border-t-2 border-violet-400"></span>
              <div className=" flex justify-between align-middle ml-2 mr-2 mt-18n">
                <p className=" ml-2">
                  {' '}
                  {theme === 'dark' ? 'Dark mode' : 'Light mode'}
                </p>
                <button className="  cursor-pointer" onClick={ChangeValue}>
                  {theme === 'dark' ? (
                    <img src={clickpill} alt="" />
                  ) : (
                    <img src={clickpilldark} alt="" />
                  )}
                </button>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default NavBar
