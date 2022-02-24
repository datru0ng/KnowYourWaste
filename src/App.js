import './App.css';
import {GiMagnifyingGlass} from 'react-icons/gi';
import {AiFillCamera} from 'react-icons/ai';
import {GoGraph} from 'react-icons/go';
import {CgProfile} from 'react-icons/cg';
import {useState} from "react";
import Camera from 'react-snap-pic'

function App() {
  //const [showCamera, setShowCamera] = useState(false)

  let takePicture = (img) => {
    console.log(img)
    //setShowCamera(false)
  }

  return (
    <div className="App">
      <header className='Header'>
        <span className='Title'>KnowYourWaste</span>
      </header>

      <div className='Middle'>
        <Camera takePicture={takePicture}/>
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

export default App;
