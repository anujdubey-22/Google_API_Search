import React,{useState,createContext,useContext} from 'react'

const ResultContext=createContext()
const baseUrl='https://google-search3.p.rapidapi.com/api/v1'


const ResultContextProvider = ({children}) => {
    const [searchTerm,setSearchTerm]=useState('')
    const [Loadingg,setLoading]=useState(false)
    const [results,setResults]=useState([])


    const getResults=async(url)=>{
        setLoading(true)
console.log(url)

        const response=await fetch('https://google-search3.p.rapidapi.com/api/v1'+url,{
            method:'GET',
            headers:{
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'IN',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
            }

        })

        const data =await response.json();
        console.log(data,url)
        if(url.includes('/news')){
            console.log(data.entries,'entries')
            setResults(data.entries)
        } else if(url.includes('/image')){
            setResults(data.image_results)
        }else if(url.includes('/search')){
            setResults(data.results)
        }
        else if(url.includes('/videos')){
            setResults(data.results)
        }


        
        
        
        setLoading(false)

    }

    return (
        <ResultContext.Provider value={{getResults,results,searchTerm,setSearchTerm,Loadingg}} >
            {children}
        </ResultContext.Provider>
    )



}
export  {ResultContextProvider}
export const useResultContext=()=>useContext(ResultContext);