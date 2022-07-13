import React , {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import ReactPlayer from 'react-player'
import { useResultContext } from '../Contexts/ResultContextProvider'
import Loading from './Loading'
import Search from './Search'

const Result = () => {
  const {results,getResults,searchTerm,loading}=useResultContext();
  const location =useLocation();

  useEffect(() => {
    if(location.pathname==='/videos'){
      getResults(`/video/q=${searchTerm} videos`)
    } else if(location.pathname==='/news'){
      getResults(`/news/q=${searchTerm}`)
    } 
    else {
      getResults(`${location.pathname}/q=${searchTerm}`)
    }
    
    console.log(results)
  }, [searchTerm,location.pathname])
  
  

  if(loading){
    return <Loading />;
  }

  console.log(location.pathname)
  
  switch (location.pathname) {
    case '/search':
      return (<div>
        {results?.map( (result,index)=>{
      return <div key={index} className='p-10 py-5'>
        <p>{result.title}</p>
          <a href={result.link} target='_blank' rel='noreferrer' className='hover:text-blue-900' > {result.link} </a>
        <p className='px-1 py-2'>
        {result?.description?.lenght>100? result.description.substring(0,100):result.description}
        </p>
      </div>
  })}
      </div>)

    case '/news':
      return (
        <div>
          {results?.map((entry,index)=>{
            return (<div key={index} className='p-5 text-center '>
                  {entry?.links[0]?.href &&  <a href={entry?.links[0]?.href} target='_blank' rel='noreferrer' className='text-blue-500'>
                      <p>{entry?.title}</p>;
                    </a>}
                  { entry?.source?.href && <a href={entry?.source?.href}>
                      <p>{entry?.source?.href}</p>
                      </a>}
                    </div>)
          })}
            </div> )

    case '/image':
      return (
        <div>
          {results?.map(({image,link},index)=>{
            return <div key={index}>
             <a href={link?.href} target='_blank' loading='lazy' className='p-5' >
             <img src={image?.src} alt={link?.title} className='grid grid-cols-2 place-content-center' ></img>
             <p className='hover:text-blue-900'>{link?.title}</p>
             </a>
            </div>
          })}
        </div>
      );

    case '/videos':
      return (
        <div>
          {results?.map((video,index)=>{
            return <div key={index} className='p-2'> 
            
                <ReactPlayer url={video?.link} controls width="350px" height="200px" />
            </div>
          })}

        </div>
      );
    default:
      return 'ERROR';
  }


}

export default Result