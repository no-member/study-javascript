const arr = [ 3, 1.5, 9, 2, 5.2 ];

// 전부 별도로 선언하는 방법
// arr.sum = function () {
//   return this.reduce((a, x) => a + x);
// }
// arr.avg = function () {
//   return this.sum() / this.length;
// }
// Object.defineProperty(arr, 'sum', {enumerable: false});
// Object.defineProperty(arr, 'avg', { enumerable: false});

// defineProperty와 동시에 property를 설정하는 방법
// Object.defineProperty(arr, 'sum', {
//   value: function () {
//     return this.reduce((a, x) => a + x);
//   },
//   enumerable: false
// });
// Object.defineProperty(arr, 'avg', {
//   value: function () {
//     return this.sum() / this.length;
//   },
//   enumerable: false
// });

Object.defineProperty(arr, {
  sum: {
    value: function() {
      return this.reduce((a, x) => a + x);
    },
    enumerable: false
  },
  avg: {
    value: function() {
      return this.sum() / this.length;
    },
    enumerable: false
  }
});

