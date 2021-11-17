import React,{ useState,useEffect } from "react";
import { createBrowserHistory  } from "history";

export  const Index2 = () =>{
    const [count, setCount] = useState(1);
    const history = createBrowserHistory ();

    return (
        <div onClick={  () =>{ history.back()} }>{ "武汉" }</div>
        
    );

}