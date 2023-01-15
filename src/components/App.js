import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {

  const [isActive,setisActive]=useState(true);

const changecolor=(()=>{
  setisActive(current => !current);
})
//code here 
  return (
    <div id="main">
      <p className={isActive ? 'redColor' : 'blueColor'} >Newton School</p>
      <button id='button' onClick={changecolor}>Change Style</button>
    </div>
  )
}


export default App;
