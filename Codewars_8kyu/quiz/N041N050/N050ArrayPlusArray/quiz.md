# Array plus array

I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.

```javascript
Test.describe("Basic tests",function(){
  Test.assertEquals(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
  Test.assertEquals(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
  Test.assertEquals(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
  Test.assertEquals(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);
})
```