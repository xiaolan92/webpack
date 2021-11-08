import React ,{ useState,useEffect } from "react";


 export const Demo  = () =>{
    const [count,setCount] = useState(1);
    useEffect( () =>{
        console.log('effect');
    })
    return (
        <div>
            <span>{ count }</span>
            <div onClick={ ()=>{ setCount(count + 1) } }>点击</div>
        </div>
    );
}