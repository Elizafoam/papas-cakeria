import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import './Selection.css';

const Selection = () => {
  const [recipe, setRecipe] = useState(JSON.parse(localStorage.getItem('recipe')));
    const [bowl, setBowl] = useState("");
    const [batter, setBatter] = useState("");
    const [frosting, setFrosting] = useState("")
    console.log("Selection",recipe)

    useEffect(() => {
      setRecipe(JSON.parse(localStorage.getItem('recipe')))
      console.log(recipe)
      if (batter == "pink") setFrosting("strawberry")
      else if (batter == "saddlebrown") setFrosting("chocolate")
      else setFrosting("vanilla")
      console.log(frosting)
      
      localStorage.setItem('bowl', bowl);
      localStorage.setItem('batter', batter);
      console.log(localStorage.getItem('bowl'), localStorage.getItem('batter'))
    }, [bowl, batter])
    
  return (
    <div className='Selection'>
      <h1>Selection</h1>
      <h2>Bowl Type</h2>
      <div className='options'>
        <img src="circlebowl.png" alt="whisk icon" className='icon' id='circle' onClick={(e) => setBowl(e.target.id)} style={{backgroundColor: bowl.includes("circle") ? "pink" : "white"}}/>
        <img src="squarebowl.png" alt="mixing bowl" className='icon' id='square' onClick={(e) => setBowl(e.target.id)} style={{backgroundColor: bowl.includes("square") ? "pink" : "white"}}/>
      </div>
      <h2>Frosting Flavor</h2>
      <div className='options'>
        <img src="chocolate.png" alt="whisk icon" className='icon' id='saddlebrown' onClick={(e) => setBatter(e.target.id)} style={{backgroundColor: batter.includes("saddlebrown") ? "pink" : "white"}}/>
        <img src="vanilla.png" alt="mixing bowl" className='icon' id='tan' onClick={(e) => setBatter(e.target.id)} style={{backgroundColor: batter.includes("tan") ? "pink" : "white"}}/>
        <img src="strawberry.png" alt="mixing bowl" className='icon' id='pink' onClick={(e) => setBatter(e.target.id)} style={{backgroundColor: batter.includes("pink") ? "pink" : "white"}}/>
      </div> 
      <div className='bowl' style={{ borderRadius: bowl.includes("circle") ? "100%" : "5%", backgroundColor: batter}}></div>
      { frosting == recipe.pickedFrosting  && bowl == recipe.pickedShape && 
        <Link to="/mixing">
            <button>Move to Mixing Stage</button>
        </Link>
      }
    </div>
  )
}

export default Selection;