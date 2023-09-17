import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  const [hideSidebar, setHideSidebar] = useState(false)


  let handleClick = () =>{
    setHideSidebar(!hideSidebar)
    console.log(hideSidebar)
  }

  let createHideButton = () => {
    return (<button onClick={handleClick}>Hide/Show the Sidebar</button>)
  }


  return (
    <>
    <div className="grid-container">
      <Navbar />
      <Sidebar  createHideButton={createHideButton} setHideSidebar={setHideSidebar} hideSidebar={hideSidebar}/>
      <Form/>
    </div>
   
    </>
  )
}

export default App
