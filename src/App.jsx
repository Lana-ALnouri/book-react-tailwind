import './App.css'
import NavBar from './Component/Navbar/NavBar'
import Footer from './Component/Footer/Footer'
import { HashRouter, Routes} from 'react-router-dom'
import { Route } from 'react-router-dom'
import Details from './Component/Details/Details'
import HomePage from './Pages/HomePage'
import { ThemeContext } from './Component/contexts/theme'
import { useEffect, useState } from 'react'



function getInitialTheme (){
  const theme = localStorage.getItem('theme')
  return theme ? JSON.parse(theme) : 'light'
}
function App() {
  const [theme, setTheme] = useState(getInitialTheme())
  useEffect (()=>{
    localStorage.setItem('theme' , JSON.stringify(theme))
  }, [theme])
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <NavBar
          ChangeValue={() => {
            setTheme(theme === 'dark' ? 'light' : 'dark')
          }}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book/:id" element={<Details />} />
        </Routes>
        <Footer copyrights="© All copyrights are reserved. B-World 2022." />
      </ThemeContext.Provider>
    </>
  )
}

export default App
