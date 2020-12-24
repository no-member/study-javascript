const obj = {
  foo: 'bar'
};

console.log(
  Object.getOwnPropertyDescriptor(obj, 'foo')
);

Object.defineProperty(obj, 'foo', {writable: false});

obj.foo = 3;
console.log(obj);
console.log();

Object.defineProperty(obj, 'color', {
  get: function() { return this._color; },
  set: function(value) { this._color = value }
});

console.log(obj);
console.log(obj._color);

obj._color = 'red';
console.log(obj._color);

