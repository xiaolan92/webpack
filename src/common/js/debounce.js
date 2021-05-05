/**
 * 函数防抖
 * @param {*} fn 
 * @param {*} delay 
 * @returns 
 */
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