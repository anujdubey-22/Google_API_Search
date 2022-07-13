import React from 'react'
import {NavLink} from 'react-router-dom';
const Links = () => {
  return (
    <div className='flex  items-center mt-4 '>
        <div className='p-3 m-2 px-10 border-2 border-indigo-600 border-b-4 border-indigo-500'>
            <NavLink to='/search'  >
            Search all
        </NavLink>
        </div>
        <div className='p-3 m-2 px-10 border-2 border-indigo-600 border-b-4 border-indigo-500'>
            <NavLink to='/image'  >
            image
        </NavLink>
        </div>
        <div className='p-3 m-2 px-10 border-2 border-indigo-600 border-b-4 border-indigo-500'>
            <NavLink to='/news'  >
            news 
        </NavLink>
        </div>
        <div className='p-3 m-2 px-10 border-2 border-indigo-600 border-b-4 border-indigo-500'>
            <NavLink to='/videos'  >
            videos
        </NavLink>
        </div>
    </div>
  )
}

export default Links