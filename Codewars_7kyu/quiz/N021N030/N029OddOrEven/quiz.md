# Odd or Even?

# Task:
Given a list of numbers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

# Example:
```javascript

odd_or_even([0])          ==  "even"
odd_or_even([0, 1, 4])    ==  "odd"
odd_or_even([0, -1, -5])  ==  "even"

```

```javascript

Test.describe('Fixed tests', _ => {
  Test.it('Edge tests', _ => {
    Test.assertEquals(oddOrEven([0]), 'even')
    Test.assertEquals(oddOrEven([1]), 'odd')
    Test.assertEquals(oddOrEven([]), 'even')
  });
  
  Test.it('Even tests', _ => {
    Test.assertEquals(oddOrEven([0, 1, 5]), 'even')
    Test.assertEquals(oddOrEven([0, 1, 3]), 'even')
    Test.assertEquals(oddOrEven([1023, 1, 2]), 'even')
  });
  
  Test.it('Negative Even tests', _ => {
    Test.assertEquals(oddOrEven([0, -1, -5]), 'even')
    Test.assertEquals(oddOrEven([0, -1, -3]), 'even')
    Test.assertEquals(oddOrEven([-1023, 1, -2]), 'even')
  });
  
  Test.it('Odd tests', _ => {
    Test.assertEquals(oddOrEven([0, 1, 2]), 'odd')
    Test.assertEquals(oddOrEven([0, 1, 4]), 'odd')
    Test.assertEquals(oddOrEven([1023, 1, 3]), 'odd')
  });
  
  Test.it('Negative Odd tests', _ => {
    Test.assertEquals(oddOrEven([0, -1, 2]), 'odd')
    Test.assertEquals(oddOrEven([0, 1, -4]), 'odd')
    Test.assertEquals(oddOrEven([-1023, -1, 3]), 'odd')
  });
});

```
