import './Decorating.css';
import Modal from '../Modal/Modal';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Decorating = () => {
  const [recipe, setRecipe] = useState(JSON.parse(localStorage.getItem('recipe')));
  console.log(recipe)
  const [activeModal, setActiveModal] = useState(false);
  const [decorations, setDecorations] = useState([]);
  const [hasAllDecorations, setHasAllDecorations] = useState(false);
  const [item, setItem] = useState("");
  console.log("Decoration",recipe)

  const handleClick= (e) => {
    setActiveModal(true);
    setItem(e);

    let newDecorations = [...decorations];
    if (decorations.includes(e)) newDecorations.splice(decorations.indexOf(e));
    else newDecorations.push(e);
    console.log(e);
    setDecorations(newDecorations);

    setTimeout(() => {
      setActiveModal(false)
    }, 1000)
  }

  const addFrosting = () => {
    const cake = document.getElementById("cake");
    if (recipe.pickedFrosting == "vanilla") cake.style.backgroundColor = "tan"
    else if (recipe.pickedFrosting == "chocolate") cake.style.backgroundColor = "saddlebrown"
    else cake.style.backgroundColor = "pink"

    
  }


  return (
    <div className='Decorating'>
      <h1>Decorating</h1>  
      <div className='options'>
        <img src="cherries.png" alt="cherries" id='cherries' className='icon' onClick={(e) => handleClick(e.target.id)}/>
        <img src="whipped_cream.png" alt="whipped cream" id='whipped_cream' className='icon' onClick={(e) => handleClick(e.target.id)}/>
        <img src="strawberry1.png" alt="strawberry" id='strawberry' className='icon' onClick={(e) => handleClick(e.target.id)}/>
        <img src="sprinkles.png" alt="sprinkles" id='sprinkles' className='icon' onClick={(e) => handleClick(e.target.id)}/>
        <img src="cookies.png" alt="cookies" id='cookies' className='icon' onClick={(e) => handleClick(e.target.id)}/>
      </div>
      <button onClick={addFrosting}>Add Frosting</button>
      <div className='current'>
        <div>
          { decorations.includes("cherries") &&
            <img src="cherries.png" alt="cherries" id='cherries' className='added-icon' onClick={(e) => handleClick(e.target.id)}/>
          }
          { decorations.includes("whipped_cream") &&
          <img src="whipped-cream.png" alt="whipped cream" id='whipped_cream' className='added-icon' onClick={(e) => handleClick(e.target.id)}/>
          }
          { decorations.includes("strawberry") &&
          <img src="strawberry1.png" alt="strawberry" id='strawberry' className='added-icon' onClick={(e) => handleClick(e.target.id)}/>
          }
          { decorations.includes("sprinkles") &&
          <img src="sprinkles.png" alt="sprinkles" id='sprinkles' className='added-icon' onClick={(e) => handleClick(e.target.id)}/>
          }
          { decorations.includes("cookies") &&
          <img src="cookies.png" alt="cookie" id='cookies' className='added-icon' onClick={(e) => handleClick(e.target.id)}/>
          }
        </div>
        <div className='cake' id='cake'></div>
        <div className='plate'></div>
      </div>
      { activeModal && 
        <Modal show={activeModal} onClose={() => setActiveModal(false)}>
          <h3>Added {item}!</h3>
        </Modal>
      }
      
      { decorations.includes(recipe.pickedTopping) && decorations.includes(recipe.pickedDecor) && 
        <Link to="/selection">
            <button>Finish Order</button>
        </Link>
      }
    </div>
  )
}

export default Decorating;