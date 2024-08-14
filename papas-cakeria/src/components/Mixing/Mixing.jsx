import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import Modal from '../Modal/Modal';
import './Mixing.css';

const Mixing = () => {
  const [activeModal, setActiveModal] = useState(false);
  const [bowl, setBowl] = useState(localStorage.getItem('bowl'));
  const [item, setItem] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [hasIngredients, setHasIngredients] = useState(false);

  const handleClick= (e) => {
    setActiveModal(true)
    setItem(e);
    let oldIngredients = [...ingredients];
    oldIngredients.push(e)
    setIngredients(oldIngredients)
    console.log(ingredients)

    setTimeout(() => {
      setActiveModal(false)
    }, 1000)
  }

  useEffect(() => {
    if (ingredients.includes("flour") && ingredients.includes("baking_powder") && ingredients.includes("sugar") && ingredients.includes("butter") && ingredients.includes("eggs") && ingredients.includes("milk") ) {
      setHasIngredients(true);
      console.log("yes")
    }
    console.log("no")
  }, [ingredients])

  return (
    <div className='Mixing'>
      <h1>Mixing Stage</h1>
      <div className='options'>
        <img src="baking-soda.png" alt="baking powder" id='baking_powder' className='icon' onClick={(e) => handleClick(e.target.id)}/>
        <img src="flour.png" alt="flour" id='flour' className='icon' onClick={(e) => handleClick(e.target.id)}/>
        <img src="butter.png" alt="butter" id='butter' className='icon' onClick={(e) => handleClick(e.target.id)}/>
        <img src="eggs.png" alt="eggs" id='eggs' className='icon' onClick={(e) => handleClick(e.target.id)}/>
        <img src="milk.png" alt="milk" id='milk' className='icon' onClick={(e) => handleClick(e.target.id)}/>
        <img src="sugar.png" alt="sugar" id='sugar' className='icon' onClick={(e) => handleClick(e.target.id)}/>
      </div>
      <div className='bowl' style={{ borderRadius: bowl.includes("circle") ? "100%" : "5%"}}></div>

      { activeModal && 
        <Modal show={activeModal} onClose={() => setActiveModal(false)}>
          <h3>Added {item}!</h3>
        </Modal>
      }
      { hasIngredients &&
        <Link to="/baking">
          <button>Move to Baking Stage</button>
        </Link>
      }
    </div>
  )
}

export default Mixing;