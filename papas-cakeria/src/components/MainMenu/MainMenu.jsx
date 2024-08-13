import './MainMenu.css';
import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <div className='MainMenu'>
      <h1>Papas Cakeria</h1>
      <div className='cakes'>
        <img src="cake2.png" alt="cake image" className='cake' />
        <img src="cake.png" alt="cake image" className='cake' />
        <img src="cake2.png" alt="cake image" className='cake' />
      </div>
      <Link to="/mixing">
        <button>Play</button>
      </Link>
      
      
    </div>
  )
}

export default MainMenu;