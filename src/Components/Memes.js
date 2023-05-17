import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const BASE_URI = " https://meme-api.com/gimme"
function Memes() {
    const [img,setImg] = useState('')
    const[disabled,setDisabled] = useState(false)
   
    const getMeme = async() =>{
        try { const response = await axios.get(BASE_URI)
        // console.log(response.data)
        setImg(response.data.preview[2])}
        catch(err){
            getMeme()
        }
        setTimeout(() => {
            setDisabled(false)
        }, 6000);
    }

    useEffect(()=>{
        getMeme()
    },[])
  return (

    <div>
        <img src={img}  />
        <br />
        <button onClick={()=>{
            getMeme();
            setDisabled(true);
            }} 
            disabled={disabled}>
                Get Another One
        </button>
        <Link to={"/"}>take me back </Link>
    </div>
  )
}

export default Memes