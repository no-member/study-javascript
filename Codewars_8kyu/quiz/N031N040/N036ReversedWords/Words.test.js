const reverse = require('./Words');

test('reverse("hello world!")은 "world! hello"를 반환함',() =>{
    expect(reverse('hello world!')).toBe('world! hello');
});