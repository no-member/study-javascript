console.log('!!0', !!0);
console.log('!!1', !!1);
console.log("!!'string'", !!'string');
console.log("!!''", !!'');
console.log("!!true", !!true);
console.log("!!false", !!false);
console.log("!!null", !!null);
console.log("!!undefined", !!undefined);
console.log("!!{}", !!{}); // 주의 빈 객체는 true를 반환한다.
console.log("!![]", !![]); // 주의 빈 배열은 true를 반환한다.
console.log("!![1, 2, 3]", !![1, 2, 3]);
