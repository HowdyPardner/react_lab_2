
// 3. Create a sidebar with hide functionality (Medium)
// 1. make a Sidebar component x
// 2. make a SidebarButton component 
// 3. import SidebarButton into Sidebar
// 4. Make 4 SidebarButton in Sidebar
// 5. import Sidebar intoApp.js and make 1 Sidebar
// 6. add a button to App.js that will hide the sidebar
// 7. app a piece of state called hideSidebar, setHideSidebar
// 8. when button is clicked, flip the state and conditionally render (display / not display) the sidebar 


import React from 'react'
import SidebarButton from '../SidebarButton'
import './index.css'
const Sidebar = ({createHideButton, hideSidebar}) => {

    return (
        <div className="sidebar-grid-container">
            {createHideButton()}
            <div className={`sidebar-container ${hideSidebar ? 'hidden' : ""}`}>
                {console.log("hideSidebar in Sidebar Component",hideSidebar)}
                Sidebar Component
                <SidebarButton />
                <SidebarButton />
                <SidebarButton /> 
                <SidebarButton />
               
            </div>
        </div>

    )
}

export default Sidebar
