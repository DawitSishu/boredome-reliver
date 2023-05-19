import { Link } from "react-router-dom";
import axios from "axios"
import { useEffect, useState } from "react"


const BASE_URI = "https://v2.jokeapi.dev/joke"
function Jokes() {
    const [joke,setJoke] = useState('')
    const [twoJoke,setTwoJoke] = useState([])
    const [custom,setCustom] = useState(false)
    const [twopart,setTwoPart] = useState(false)
    const [dark,setDark] = useState(false);
    const [programming,setProgramming] = useState(false)

  const getRandomJoke = async(filter)=>{//string
    try {
      const response = await axios.get(`${BASE_URI}/${typeof(filter) == "string" ? filter : "Any"}?type=single`)
      if(response.data.joke){
        setJoke(response.data.joke)
      }else{
        getRandomJoke(filter)
      }
      
    } catch (error) {
      getRandomJoke(filter)
    }
  }
  const getTwoLinerJoke = async(filter) =>{
    try {
      const response = await axios.get(`${BASE_URI}/${typeof(filter) == "string" ? filter : "Any"}?type=Any?type=twopart`)
      if(response.data.setup, response.data.delivery){
        setTwoJoke([response.data.setup,response.data.delivery])
      }else{
      getTwoLinerJoke(filter)
      }
    } catch (error) {
      getTwoLinerJoke(filter)
    }
  }
  const handleFilters = (e) =>{
    e.preventDefault()
    if(!dark && !programming){
      setCustom(false)
      twopart ? getTwoLinerJoke() : getRandomJoke()
    }else if (dark && programming ){
      setCustom(true)
      twopart ? getTwoLinerJoke('Programming,Dark') : getRandomJoke('Programming,Dark')
    }else if(dark && !programming){
      setCustom(true)
      twopart ? getTwoLinerJoke('Dark') : getRandomJoke('Dark')
    }else if(!dark && programming){
      setCustom(true)
      twopart ? getTwoLinerJoke('Programming') : getRandomJoke('Programming')
    }
    
  }
  const toggleJokes = () =>{
    if(twopart){
      setTwoPart(false)
      getRandomJoke()
    }else{
      setTwoPart(true)
      getTwoLinerJoke()
    }
  }

  useEffect(()=>{
    getRandomJoke()
  },[])
    
  return (
    <div>
       {!twopart && <h1>
        {joke}
        </h1>}
        {twopart && <>
          <h2>
            {twoJoke[0]}
          </h2>
          <h2>
            {twoJoke[1]}
          </h2>
          </>
          }
          <div>
        <button onClick={custom ? handleFilters : twopart ? getTwoLinerJoke: getRandomJoke}>get Another One</button>
        <button  onClick ={toggleJokes}>get {twopart ? "One  liner" : "Two Liner" } Joke</button>
        </div>
        <div>
          <h3>select a catagory below the submit to filter</h3>
          <form onSubmit={handleFilters}>
            <label htmlFor="dark">Dark</label>
            <input type="checkbox" name="dark"  onClick={()=>setDark(!dark)}/>
            <label htmlFor="dark">programming</label>
            <input type="checkbox" name="dark"  onClick={()=>setProgramming(!programming)}/>
            <input type="submit" name="submit" />
          </form>
        </div>
        <Link to={"/"}>take me back </Link>
    </div>
  )
}

export default Jokes