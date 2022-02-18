import './App.css';
import {GiMagnifyingGlass} from 'react-icons/gi';
import {AiFillCamera} from 'react-icons/ai';
import {GoGraph} from 'react-icons/go';
import {CgProfile} from 'react-icons/cg';

function App() {
  return (
    <div className="App">
      <header className='Header'>
        <span className='Title'>KnowYourWaste</span>
      </header>
      <div className='Middle'>
        <button className='Camera'>
          <AiFillCamera size="35"/>
        </button>
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
