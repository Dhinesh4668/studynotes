import React from 'react'
import img1 from '../../assets/home.png'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <nav className='flex flex-row  justify-evenly mt-44 '>
      <img src={img1} className='' alt='homeimg' />
      <div className='px-5'>
      <h1 className='text-lg font-bold justify-center pt-40 '> hello, <span className='text-red-600 font-mono font-bold text-lg'>IT</span> Gys</h1>
      <p className='text-gray-600'> this is IT department study notes web application</p>
      <Link className='font-light  text-sm   text-blue-400' to='/notes'>Go Notes Section</Link>
      <Link className='font-light text-sm  px-6 text-blue-400' to='/lab'>Go Lab Section</Link>
      </div>
    </nav>
  )
}

export default Home