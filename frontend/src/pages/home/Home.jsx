import React from 'react'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import Feed from '../../components/feed/Feed'
import './home.css'

export default function () {
  return (
    <>
    <Topbar />
    <div className='containerHome'>
       
        <Sidebar />
        <Feed />
        <Rightbar />
        

    </div>
    </>
    
    
  )
}
