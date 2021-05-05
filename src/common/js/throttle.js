/**
 * 函数节流
 * @param {*} fn 
 * @param {*} delay 
 * @returns 
 *  
 */
export  const throttle = (fn,delay = 3000) => {
    let startTime = 0;
    return function (...agrs){
        let endTime  = Date.now();
        if(endTime - startTime > delay){
            startTime = endTime;
            fn.apply(this,agrs);
        }


    };

};
