import React, { useState, useEffect } from "react";
import './Recipe.css';

const Recipe = ({gRecipe}) => {
  const [recipe, setRecipe] = useState(JSON.parse(localStorage.getItem('recipe')));
  console.log("recp", gRecipe)

  return (
    <div className='Recipe'>
      <div>*</div>
      <h1>Order</h1>
      <hr />
      <div>basic ingredients</div>
      <hr />
      <div className='ingredients'>
        <img src="flour.png" alt="flour" className='ingredient'/>
        <img src="butter.png" alt="butter" className='ingredient'/>
        <img src="milk.png" alt="milk" className='ingredient'/>
        <img src="baking-soda.png" alt="baking powder" className='ingredient'/>
        <img src="eggs.png" alt="eggs" className='ingredient'/>
        <img src="sugar.png" alt="sugar" className='ingredient'/>
      </div>
      <hr />
      <div className='stuff'>
        <div>
            <div>shape</div>
            <img src={gRecipe.pickedShape == "circle" ? "circlebowl.png": "squarebowl.png"} alt="bowl type" className='ingredient'/>
        </div>
        <div>
            <div>frosting</div>
            <img src={`${gRecipe.pickedFrosting}.png`} alt="frosting type" className='ingredient' />
        </div>
      </div>
      <hr />
      <div>decorations</div>
      <hr />
      <div className='ingredients'>
        <img src={gRecipe.pickedTopping == "strawberry" ?`${gRecipe.pickedTopping}1.png`:`${gRecipe.pickedTopping}.png`} alt="cherry" className='ingredient'/>
        <img src={`${gRecipe.pickedDecor}.png`} alt="sprinkles" className='ingredient'/>
      </div>
    </div>
  )
}

export default Recipe;