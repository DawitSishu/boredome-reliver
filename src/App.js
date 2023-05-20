// import './App.css';
import Insults from './Components/Insults/Insults';
import Jokes from './Components/Jokes/Jokes';
import Memes from './Components/Memes/Memes';
import Quotes from './Components/Quotes/Quotes'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Button3D from './Components/landingPage/Button3D';

function App() {
  return (
 <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Button3D />} />
      <Route  path="/home" element={<Home />} />
      <Route path="/insults" element={<Insults />} />
      <Route path="/jokes" element={<Jokes />} />
      <Route path="/memes" element={<Memes />} />
      <Route path="/quotes" element={<Quotes />} />
    </Routes>
  </BrowserRouter>

 
  );
}

export default App;
