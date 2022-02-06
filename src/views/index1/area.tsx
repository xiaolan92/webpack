import React, { FC, useState, useEffect, useCallback, useMemo, createContext,useRef} from "react";
import { useNavigate } from "react-router-dom";
import { Child } from "./child";
import { Context} from "./context"


export const Index1:FC = () => {
    let [count, setCount] = useState<string>();
    const ref = useRef(null)
    

    const add = () => {
        console.log(111)
        setCount(count = "1");
    }
    const reduce = useCallback(() => {
       console.log(ref.current)
    }, [count])

    useState(() => {
        console.log(count)
    })
    return (
        <>
            <div onClick={add}>文字</div>
            <Context.Provider value={count}>
                {/* <Child value={count}  childOnclick={reduce} ref={ref } /> */}
            </Context.Provider>
        </>
    );
}