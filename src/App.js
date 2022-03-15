import './App.css';
import {GiMagnifyingGlass} from 'react-icons/gi';
import {AiFillCamera} from 'react-icons/ai';
import {GoGraph} from 'react-icons/go';
import {CgProfile} from 'react-icons/cg';
import { useState } from 'react';
import Camera from 'react-snap-pic';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import BottlePage from './BottlePage';

export default function Router(){
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/:page" element={<App />}/>
      <Route path="/BottlePage" element={<BottlePage/>}/>
    </Routes>
  </BrowserRouter>
}

function App() {
  const [showCamera, setShowCamera] = useState(true)

  const [imageUrl, setImageUrl] = useState(null)

  const takePicture = (img) => {
    setImageUrl(img)
    setShowCamera(false)
  };


  return (
    <div className="App">
      <header className='Header'>
        <span className='Title'>KnowYourWaste</span>
      </header>

      <div className='Middle'>
        {showCamera && <Camera takePicture={takePicture} />}
        <img className='takenPhoto' src={imageUrl}></img>
        <div className='NextButton'><Link to={"/BottlePage"}><button className='NewButton'>Next</button></Link></div>
      </div>
      
      <div className='MenuButtons'>
        <GiMagnifyingGlass size="24"/>
        <AiFillCamera size="24"/>
        <GoGraph size="24"/>
        <CgProfile size="24"/>
      </div>
    </div>
  );
}
