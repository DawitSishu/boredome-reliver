import React from 'react'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <ul>
        <li>
            <Link to={"insults"}>insult me</Link>
        </li>
        <li>
            <Link to={"quotes"}>show me quotes</Link>
        </li>
        <li>
            <Link to={"memes"}>show me memes</Link>
        </li>
        <li>
            <Link to={"jokes"}>tell me a joke</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home