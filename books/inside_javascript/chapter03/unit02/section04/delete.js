const foo = {
    name: 'foo',
    nickname: 'babo'
};

console.log(foo.nickname);
delete foo.nickname;
console.log(foo.nickname);

// delete foo; // delete 연산자는 프로퍼티만을 삭제
console.log(foo.name);
