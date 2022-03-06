import './BottlePage.css';
import {GiMagnifyingGlass} from 'react-icons/gi';
import {AiFillCamera} from 'react-icons/ai';
import {GoGraph} from 'react-icons/go';
import {CgProfile} from 'react-icons/cg';
import {Link} from "react-router-dom";

const BottlePage = () => {
    return (
      <div className="App">
        <header className='Header'>
            <span className='Title'>KnowYourWaste</span>
        </header>
  
        <div className='Middle'>
            <div className='Card'>
                <div className='Image'/>
                <span className='Text'>Item: Water Bottle</span>
                <span className='Text'>Number of different wastes: 2</span>
                <div className='Description'>
                    <span>Waste</span>
                    <span>To where:</span>
                </div>
                <div className='Location'>
                    <div className='Block1'>
                        <span>Bottle Cap</span>
                        <span>Trash</span>
                    </div>
                    <div className='Block2'>
                        <span>Plastic Bottle</span>
                        <span>Recycle</span>
                    </div>
                </div>
            </div>
            <Link to="/">
                <button className='BackToHome'>Done</button>
            </Link>
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