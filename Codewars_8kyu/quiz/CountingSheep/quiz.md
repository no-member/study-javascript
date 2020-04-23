# Counting sheep...

Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For countSheep,

```javascript
[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
```

The correct answer would be 17.

Hint: Don't forget to check for bad values like `null`/`undefined`

```javascript
var array1 = [true,  true,  true,  false,
              true,  true,  true,  true ,
              true,  false, true,  false,
              true,  false, false, true ,
              true,  true,  true,  true ,
              false, false, true,  true ];
              
Test.expect(countSheeps(array1) == 17, "There are 17 sheeps in total")
```

