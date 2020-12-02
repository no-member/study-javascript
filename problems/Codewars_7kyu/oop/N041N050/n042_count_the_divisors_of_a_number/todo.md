# Count the divisors of a number

## 문제
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples
```javascript
divisors(4)  = 3  // 1, 2, 4
divisors(5)  = 2  // 1, 5
divisors(12) = 6  // 1, 2, 3, 4, 6, 12
divisors(30) = 8  // 1, 2, 3, 5, 6, 10, 15, 30
```

## 해결 방법
* [X] [1, 2, 3, .... , 자기자신]과 같은 형태의 배열을 얻는다.
    * [X] for을 이용해서 넣도록 하자.(펼침 연산자는 알고 있지만 의도적으로 사용 안함)
* [X] for문을 이용해서 주어진 숫자를 배열에 있는 숫자로 일일이 나누고 
      나머지가 0인 경우 다른 배열에 추가를 한다.
* [X] OOP를 이용해서 문제를 해결하도록 로직 수정
* [X] 새로 만든 배열을 반환하는 get 함수를 작성한다.
    * [X] ES2019에서 새롭게 추가된 #를 사용해서 새로 만든 배열을 private로 선언하자

## 자유

