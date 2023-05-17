import './App.css';
import Insults from './Components/Insults';
import Jokes from './Components/Jokes';
import Memes from './Components/Memes';
import Quotes from './Components/Quotes'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="insults" element={<Insults />} />
      <Route path="jokes" element={<Jokes />} />
      <Route path="memes" element={<Memes />} />
      <Route path="quotes" element={<Quotes />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
