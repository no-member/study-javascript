let count = 0;
const callBackFunc = function() {
    console.log(count);
    if(++count > 4) {
        clearInterval(timer);
    }
};

const timer = setInterval(callBackFunc, 300);
