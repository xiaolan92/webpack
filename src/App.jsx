import React from "react";
import { useNavigate } from "react-router-dom";
 
const App = () =>{
  const navigate = useNavigate();
  

  return (
    <div onClick={ ()=>{ navigate("/index2") } }>导航</div>
  );

}

export default App;