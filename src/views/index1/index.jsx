import React,{ useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DatePicker } from "antd";

export  const Index1 = () => {
    const [count, setCount] = useState(1);
    const  navigate = useNavigate();
    
    useEffect(()=>{
        console.log("小兰");
        
    })

    return (
        <>
        <DatePicker/>
        <div onClick={ ()=> navigate("/index2")}>小兰</div>
        </>
        
    );

}