import React from 'react'
import { NavLink } from 'react-router-dom'


const Nav = () => {
  return (
    <div className=' items-center m-5 flex flex-row justify-evenly backdrop-blur-md backdrop-brightness-150 '>
        <NavLink to='/' className='text-lg font-bold uppercase'>IT department</NavLink>
        <div className='flex flex-nowrap justify-around gap-5  items-stretch' style={{flex: 0.3}}>
            <NavLink to='/'>
                Home
            </NavLink>
            <NavLink to="/notes">
                Notes
            </NavLink>
            <NavLink to="/lab">
                Lab
            </NavLink>
        </div>
    </div>
  )
}

export default Nav