import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainMenu from './components/MainMenu/MainMenu';
import Mixing from './components/Mixing/Mixing';
import Baking from './components/Baking/Baking';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainMenu />}></Route>
          <Route path='/mixing' element={<Mixing />}></Route>
          <Route path='/baking' element={<Baking />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App;