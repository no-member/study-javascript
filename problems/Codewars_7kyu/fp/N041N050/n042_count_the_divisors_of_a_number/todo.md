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

* [X] 기존에 작성했던 로직을 fp로 변화시키기
* [X] [1, 2, 3, .... , 자기자신]과 같은 형태의 배열을 얻는다.
    * [X] 펼침 연산자를 이용해서 구하도록 하자.
* [X] filter를 사용해서 나머지가 0이 되는 값을 골라내자

## 자유

