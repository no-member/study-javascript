const partial = function () {
    const originalPartialArgs = arguments;
    const func = originalPartialArgs[0];
    if (typeof func !== 'function') {
        throw new Error('첫 번째 인자가 함수가 아닙니다.');
    }

    return function () {
       const partialArgs = Array.prototype.slice.call(originalPartialArgs, 1);
       const restArgs = Array.prototype.slice.call(arguments);

       return func.apply(this, partialArgs.concat(restArgs));
    };
};

const add = function () {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }

    return result;
}

const addPartial = partial(add, 1, 2, 3, 4, 5);
console.log(addPartial(6, 7, 8, 9, 10));

const dog = {
    name: '강아지',
    greet: partial(function (prefix, suffix) {
        return prefix + this.name + suffix;
    }, '왈왈.')
};
console.log(dog.greet('입니다.'));
