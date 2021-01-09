const makePhrases = function () {
  const words1 = ["24/7", "다계층", "관리자 관점", "B2B", "윈-윈"];
  const words2 = ["강화", "부가가치형", "지향", "중심", "제휴"];
  const words3 = ["프로세스", "솔루션", "전환점", "전략", "비전"];

  const rand1 = Math.floor(Math.random() * words1.length)
  const rand2 = Math.floor(Math.random() * words2.length)
  const rand3 = Math.floor(Math.random() * words3.length)

  const phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
  console.log(phrase);
}

makePhrases();
