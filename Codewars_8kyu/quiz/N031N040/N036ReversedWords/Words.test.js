const reverse = require('./Words');

test('reverse("hello world!")은 "world! hello"를 반환함', () => {
    expect(reverse('hello world!')).toBe('world! hello');
});

test('reverse("hi world!")은 "world! hi"를 반환함', () => {
    expect(reverse('hi world!')).toBe('world! hi');
});

test('reverse("foobar")은 "foobar"를 반환함', () => {
    expect(reverse('foobar')).toBe('foobar');
});

test('reverse("")은 ""를 반환함', () => {
    expect(reverse('')).toBe('');
});

test('reverse()은 ""를 반환함', () => {
    expect(reverse()).toBe('');
});
