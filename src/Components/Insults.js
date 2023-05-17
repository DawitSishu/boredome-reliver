import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


const BASE_URI = "https://insults.tr00st.co.uk" 
function Insults() {
    const [badPerson,setBadPerson] = useState('')
    const [insult,setInsult] = useState('')
    const [isCustom,setIscustom] = useState(false)

    const getInsults = async () =>{
        try {
               const response =  await axios.get(`${BASE_URI}/phrases/simple/?target=dave`)
              setInsult(response.data)
        } catch (error) {
            console.log(error);// 
        }
    }
    useEffect(()=>{
        getInsults();
    },[])

    const customInsult = async () =>{
        setIscustom(true)
        try {
            const response =  await axios.get(`${BASE_URI}/phrases/simple/?target=${badPerson}`)
        setInsult(response.data)
     } catch (error) {
         console.log(error);
     }
    }
const getAnotherInsult = () =>{
    if(isCustom) {
        customInsult()
    }else{
        getInsults()
    }
}


  return (
    <div>
      <h1>
      {insult}
      </h1>  
      <button onClick={getAnotherInsult}>Get Another One</button>
      <h3>who do you want to insult tell me a name: </h3>
      <input type="text"  value={badPerson} onChange={(e)=>setBadPerson(e.target.value)}/>
      <button onClick={customInsult}>insult {badPerson}</button>
      <Link to={"/"}>take me back </Link>
    </div>
  )
}

export default Insults