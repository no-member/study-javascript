const partial3 = function() {
    const originalPartialArgs = arguments;
    const func = originalPartialArgs[0];
    if (typeof func !== 'function') {
        throw new Error('첫 번째 인수가 함수가 아닙니다.');
    }

    return function() {
        const partialArgs = Array.prototype.slice.call(originalPartialArgs, 1);
        const restArgs = Array.prototype.slice.call(arguments);
        for (let i = 0; i < partialArgs.length; i++) {
           if (partialArgs[i] === Symbol.for('EMPTY_SPACE')) {
               partialArgs[i] = restArgs.shift();
           }
        }

        return func.apply(this, partialArgs.concat(restArgs));
    }
}

const _ = Symbol.for('EMPTY_SPACE');

const add = function () {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }

    return result;
};

const addPartial = partial3(add, 1, 2, _, 4, 5, _, _, 8, 9);
console.log(addPartial(3, 6, 7, 10));
