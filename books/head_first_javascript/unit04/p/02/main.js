let i = 0;
const hasBubbleGum = [false, false, false, true];
const products = ["추추 초콜릿", "아이스 민트", "케이크 베터", "버블검"];

while (i < hasBubbleGum.length) {
  if(hasBubbleGum[i]) {
    console.log(`${products[i]}에 풍선껌이 들어 있어요.`); 
  }
  i = i + 1;
}
