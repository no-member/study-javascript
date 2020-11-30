const greet = require('./HelloWorld');

describe('HelloWorld', () => {
    describe('#greet', () => {
        context('발동시키면', () => {
            it('"hello world!"를 반환한다.', () => {
                expect(greet()).toBe("hello world!");
            });
        });

        context('typeof를 이용해 type 검사를 하면', () => {
            it('"function"을 반환한다.', () => {
                expect(typeof greet).toBe("function");
            });
        });
    });
});
