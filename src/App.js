import React,{useState,useEffect} from 'react'
import {FaSearch} from 'react-icons/fa'
import Photos from './Components/Photos'
const MainUrl = 'https://api.unsplash.com/photos/'
const SearchUrl = 'https://api.unsplash.com/search/photos/'
const clientid = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`

function App() {
  const [loading, setLoading] = useState(false);
  const [photos,setPhotos] = useState([]);
  const [page,setpage] = useState(0);
  const [query, setquery] = useState('')
  const fetchImages = async() =>{
    setLoading(true)
    let url;
    const urlpage = `&page=${page}`
    const urlQuery = `&query=${query}`


    if(query){
      url = `${SearchUrl}${clientid}${urlpage}${urlQuery}`
    }
    else{
      url = `${MainUrl}${clientid}${urlpage}`
    }
    try{
      const response = await fetch(url);
      const data = await response.json();
      setPhotos((oldphotos)=>{
        if(query && page === 1){
          return data.results
        }
        else if(query){
          return [...oldphotos, ...data.results]
        }
        else{
          return [...oldphotos,...data]
        }
      });
      setLoading(false)
    }catch(error){
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchImages();  
  },[page])
    useEffect(()=>{
    const event = window.addEventListener('scroll',() =>
    {
      if( !loading && window.innerHeight + window.scrollY >= document.body.scrollHeight -2)
      {
        setpage((oldpage)=>{
          return oldpage +1;
        })
      }
    })
    return () => window.removeEventListener('scroll',event);
  },[])
  const handleSubmit = (e) =>{
    e.preventDefault();
    setpage(1)
  }
  return (
    <main>
      <section className='search'>
        <form className='search-form'>
          <input type="text" placeholder="Search" className='form-input' value={query} onChange={(e)=>{
            setquery(e.target.value)
          }} />
          <button type='submit' className='submit-btn' onClick={handleSubmit}>
            <FaSearch/>
          </button>
        </form>
      </section>
      <section className="photos">
        <div className="photos-center">
          {photos.map((image,index)=>{
            return <Photos key={image.id} {...image}/>
          })}
        </div>
        {loading && <h2 className='loading'>Loading...</h2>}
      </section>
    </main>
  );
}

export default App;
