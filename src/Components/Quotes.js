import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const BASE_URI ="https://api.quotable.io"
function Quotes() {
    const [quote,setQuote] = useState('')
    const [author, setAuthor] = useState('')

    const getOneQuote = async () =>{
        const response =  await axios.get(`${BASE_URI}/random`)
        setQuote(response.data.content)
        setAuthor(response.data.author)   
    }

  useEffect(()=>{
    getOneQuote()
  },[])


  return (
    <div>
        <h1>
        "{quote}"
        </h1>
        <h3>
            -Written by : {author}
        </h3>
        <button onClick={getOneQuote}>Get another One</button>
        <Link to={"/"}>take me back </Link>
    </div>
  )
}

export default Quotes