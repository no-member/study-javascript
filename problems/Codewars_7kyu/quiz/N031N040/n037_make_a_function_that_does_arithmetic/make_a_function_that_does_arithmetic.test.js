const chai = require('chai');
const expect = chai.expect;
const arithmetic = require('./make_a_function_that_does_arithmetic');

describe('MakeAFunctionThatDoesArithmetic', () => {
    context('With (1, 2, "add")', () => {
        it('Return 3', () => {
            expect(arithmetic(1, 2, 'add')).to.equal(3);
        });
    });

    context('With (8, 2, "subtract")', () => {
        it('Return 6', () => {
            expect(arithmetic(8, 2, "subtract")).to.equal(6);
        });
    });

    context('With (5, 2, "multiply")', () => {
        it('Return 10', () => {
            expect(arithmetic(5, 2, "multiply")).to.equal(10);
        });
    });

    context('With (8, 2, "divide")', () => {
        it('Return 4', () => {
            expect(arithmetic(8, 2, "divide")).to.equal(4);
        });
    });
});
