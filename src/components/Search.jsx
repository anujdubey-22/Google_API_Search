import React, { useState } from 'react'
import { useResultContext } from '../Contexts/ResultContextProvider'
import {useDebounce} from 'use-debounce';
import { useEffect } from 'react';
import Links from './Links'

const Search = () => {
  const[text,setText]=useState('')
  const{setSearchTerm}=useResultContext();
  const[debounce]=useDebounce(text,300)
  
  useEffect(() => {
    if(debounce){
      setSearchTerm(debounce)
    }
  }, [debounce])
  
console.log(text)
  return (
    <div className='px-2 mt-3'>
      <input className='px-3 rounded-full hover:shadow-lg'
      value={text}
      type='text'
      onChange={(e)=>{
        setText(e.target.value)
      }}
      placeholder='enter URL here'
      
      />
      {text && (
          <button onClick={()=>{
            setText('')
          }} type='button' className='px-3' >
            X     
          </button>
      )}
    <Links />
    </div>
  )
}

export default Search