import { Link } from 'react-router-dom';
import './Mixing.css';
import { useState } from 'react';

const Mixing = () => {
    const [bowl, setBowl] = useState("");
    const [batter, setBatter] = useState("");
    
  return (
    <div className='Mixing'>
      <h1>Batter</h1>
      <div className='options'>
        <img src="circlebowl.png" alt="whisk icon" className='icon' id='circle' onClick={(e) => setBowl(e.target.id)} style={{backgroundColor: bowl.includes("circle") ? "pink" : "white"}}/>
        <img src="squarebowl.png" alt="mixing bowl" className='icon' id='square' onClick={(e) => setBowl(e.target.id)} style={{backgroundColor: bowl.includes("square") ? "pink" : "white"}}/>
      </div>
      <div className='options'>
        <img src="chocolate.png" alt="whisk icon" className='icon' id='chocolate' onClick={(e) => setBatter(e.target.id)} style={{backgroundColor: batter.includes("chocolate") ? "pink" : "white"}}/>
        <img src="vanilla.png" alt="mixing bowl" className='icon' id='vanilla' onClick={(e) => setBatter(e.target.id)} style={{backgroundColor: batter.includes("vanilla") ? "pink" : "white"}}/>
        <img src="strawberry.png" alt="mixing bowl" className='icon' id='strawberry' onClick={(e) => setBatter(e.target.id)} style={{backgroundColor: batter.includes("strawberry") ? "pink" : "white"}}/>
      </div> 
      { batter && bowl && 
        <Link to="/baking">
            <button>Baking Cake</button>
        </Link>
      }
    </div>
  )
}

export default Mixing;