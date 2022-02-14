
// 函数防抖
export const debounce = (fn, delay = 3000) => {
  let timer = null;
  return function (...agrs) {

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      fn.apply(this, agrs);

    }, delay);

  };


};

// 函数节流
export  const throttle = (fn, delay = 3000) => {
  let startTime = 0;
  return function (...agrs){
    let endTime  = Date.now();
    if (endTime - startTime > delay){
      startTime = endTime;
      fn.apply(this, agrs);
    }


  };

};