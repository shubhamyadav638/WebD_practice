import React from 'react'
import { useState } from 'react'

function App() {
  const [theme, setTheme]= useState('light')
  const toggleTheme = ()=>{
    setTheme(prevState => (prevState === 'light'? "dark":'light'))
  }

  const lightTheme = {
    backgroundColor:'pink',
    color:'white',
    padding: '30px',
    height:'100vh'
  }

  const darkTheme = {
    backgroundColor:'black',
    color:'white',
    padding: '30px',
    height:'100vh'
  }
  return (
    <>
      <center>
        <div style={theme === "light"? lightTheme:darkTheme}>
          <h1>
            {theme.toUpperCase() + "theme".toUpperCase()} </h1>
            <button onClick={toggleTheme}>btn{theme==='light'? 'dark':'light'}</button>
        </div>
      </center>
    </>
  )
}

export default App
