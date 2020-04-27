# Basic Mathematical Operations

Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

### Examples

```java
basicOp('+', 4, 7)         // Output: 11
basicOp('-', 15, 18)       // Output: -3
basicOp('*', 5, 5)         // Output: 25
basicOp('/', 49, 7)        // Output: 7
```



```javascript
import org.junit.Test;
import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;
import org.junit.runners.JUnit4;

public class SolutionTest
{
  BasicOperations basicOps = new BasicOperations();
  
  @Test
  public void testBasics()
  {
    System.out.println("Basic Tests");
    assertThat(basicOps.basicMath("+", 4, 7), is(11));
    assertThat(basicOps.basicMath("-", 15, 18), is(-3));
    assertThat(basicOps.basicMath("*", 5, 5), is(25));
    assertThat(basicOps.basicMath("/", 49, 7), is(7));
  }
}
```

