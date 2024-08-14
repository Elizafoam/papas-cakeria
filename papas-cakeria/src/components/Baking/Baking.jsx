import './Baking.css';
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Baking = () => {
  let [time, setTime] = useState(0);
  const navigate = useNavigate();

  const updateTime = () => {
    setTime(time+1)
  }
  let interval = setInterval(updateTime, 1000);

  if (time == 10) {
    clearInterval(interval)
    navigate("/decorating")
  }

  return (
    <div className='Baking'>
      <h1>Baking</h1>  
      <div>Bake the cake for 10 secs</div>
      <div className='timer'>⏰ {time} secs</div>
      <div>-</div>
      <img src="baking.png" alt="cake oven" />

    </div>
  )
}

export default Baking;