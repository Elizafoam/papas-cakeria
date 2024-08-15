import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import MainMenu from './components/MainMenu/MainMenu';
import Selection from './components/Selection/Selection';
import Mixing from './components/Mixing/Mixing';
import Baking from './components/Baking/Baking';
import Recipe from "./components/Recipe/Recipe";
import Decorating from "./components/Decorating/Decorating";
import Complete from "./components/Complete/Complete"
import './App.css';

const App = () => {
  const [recipe, setRecipe] = useState(["", "", "", ""]);
  console.log(recipe)

  useEffect(() => {
    let shapes = ["square", "circle"];
    let frosting = ["chocolate", "strawberry", "vanilla"];
    let topping = ["strawberry", "cherries", "whipped_cream"];
    let bottomDecor = ["cookies"];

    let pickedShape = shapes[Math.floor(Math.random() * shapes.length)];
    let pickedFrosting = frosting[Math.floor(Math.random() * frosting.length)];
    let pickedTopping = topping[Math.floor(Math.random() * topping.length)];
    let pickedDecor = bottomDecor[Math.floor(Math.random() * bottomDecor.length)];
    let newRecipe = {pickedShape, pickedFrosting, pickedTopping, pickedDecor};
    console.log("App", newRecipe)
    setRecipe(newRecipe)
    console.log("nR", recipe)
    localStorage.setItem("recipe", JSON.stringify(newRecipe))
  }, [])

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainMenu />}></Route>
          <Route path='/selection' element={<Selection />} ></Route>
          <Route path='/mixing' element={<Mixing />}></Route>
          <Route path='/baking' element={<Baking />}></Route>
          <Route path='/decorating' element={<Decorating />}></Route>
          <Route path='/done' element={<Complete />}></Route>
        </Routes>
        <Recipe gRecipe={recipe}/>
      </BrowserRouter>
    </div>
  )

}

export default App;