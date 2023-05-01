import { useState } from 'react';

const Overlay = () => {

    const [style, setStyle] = useState('overlayClosed');
  return (
    <>
    <div className={style}>
  <a class="closebtn" onClick={() => {setStyle('overlayClosed')}}>&times;</a>
  <div className="overlay-content">
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Clients</a>
    <a href="#">Contact</a>
  </div>
</div>

<span className="span-style" onClick={() => {setStyle('overlay')}}>&#9776; open</span>
</>
  )
}

export default Overlay;