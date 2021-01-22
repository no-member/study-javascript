let products = ["추추 초콜릿", "아이스 민트", "케이크 배터", "버블검"];
let hasBubbleGum = [false, false, false, true];

for(let i = 0; i < hasBubbleGum.length; i++) {
  if(hasBubbleGum[i]) {
    console.log(`${products[i]}에 풍섬껌이 들어 있어요.`);
  }
}

