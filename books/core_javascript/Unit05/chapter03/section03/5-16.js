const debounce = function (eventName, func, wait) {
    let timeoutId = null;
    return function (event) {
        const self = this;
        console.log(eventName, 'event 발생');
        clearTimeout(timeoutId);
        timeoutId = setTimeout(func.bind(self, event), wait);
    };
};

const moveHandler = function (e) {
    console.log('mouse event 처리');
};

const wheelHandler = function (e) {
    console.log('wheel event 처리');
};

document.body.addEventListener('mousemove', debounce('move', moveHandler, 500));
document.body.addEventListener('mousewheel', debounce('wheel', wheelHandler, 700));
