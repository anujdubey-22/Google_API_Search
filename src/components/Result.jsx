import React , {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import ReactPlayer from 'react-player'
import { useResultContext } from '../Contexts/ResultContextProvider'
import Loading from './Loading'
import Search from './Search'

const Result = () => {
  const {results,getResults,searchTerm,Loadingg}=useResultContext();
  const location =useLocation();

  useEffect(() => {
    if(location.pathname==='/videos'){
      getResults(`/search/q=${searchTerm} videos`)
    } else if(location.pathname==='/news'){
      getResults(`/news/q=${searchTerm}`)
    } 
    else {
      getResults(`${location.pathname}/q=${searchTerm}`)
    }
    
    console.log(results)
    return()=>{

    }
  }, [searchTerm,location.pathname])
  
  

  if(Loadingg){
    return <Loading />;
  }

  console.log(location.pathname)
  
  switch (location.pathname) {
    case '/search':
      return (<div>
        {results?.map( (result,index)=>{
      return <div key={index} className='p-10 py-5'>
        <p>{result?.title}</p>
          <a href={result?.link} target='_blank' rel='noreferrer' className='hover:text-blue-900' > {result.link} </a>
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
                  {entry?.links &&  <a href={entry?.links} target='_blank' rel='noreferrer' className='text-blue-500'>
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
            return <div key={index} className=' p-10 py-5'> 
            <p className='text-teal-900'> {video?.link.includes('youtube') ? video.title:''}  </p>
            <a href={video?.link.includes('youtube') ? video.link:''} className='text-slate-500 hover:text-blue-600 px-1 py-2' target='_blank' rel='noreferrer'> {video?.link.includes('youtube') ? video.link:''} 👈🏻 Click Here</a>
            <p className='px-1 py-2 text-yellow-900'>  
            {video?.link.includes('youtube') ? video.description:''}
            </p>
                {/* <ReactPlayer url={video?.link.includes('youtube') ? video.link:''} controls width="350px" height="200px" />*/ }
                {/* <video autoPlay controls width="400" height="300">
                  <source src={video?.link.includes('youtube') ? video.link:''} />
                  <source src={video?.link.includes('video.html') ? video.link:''} />
                  
                  Video tag is not supported in this browser.
          </video> */}
            </div>
          })}

        </div>
      );
    default:
      return 'ERROR';
  }


}

export default Result