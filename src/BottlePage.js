import './BottlePage.css';
import {GiMagnifyingGlass} from 'react-icons/gi';
import {AiFillCamera} from 'react-icons/ai';
import {GoGraph} from 'react-icons/go';
import {CgProfile} from 'react-icons/cg';

const BottlePage = () => {
    return (
      <div className="App">
        <header className='Header'>
            <span className='Title'>KnowYourWaste</span>
        </header>
  
        <div className='Middle'>
            <div className='Card'>
                <div className='Image'/>
                <span className='text'>Item: Water Bottle</span>
                <span className='text'>Number of different wastes: 2</span>
            </div>
        </div>
  
        <div className='MenuButtons'>
          <GiMagnifyingGlass size="24"/>
          <AiFillCamera size="24"/>
          <GoGraph size="24"/>
          <CgProfile size="24"/>
        </div>
      </div>
    );
  };
  export default BottlePage;