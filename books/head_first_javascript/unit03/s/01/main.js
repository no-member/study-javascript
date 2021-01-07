const bark = function(name, weight) {
  if(weight > 20) {
    console.log(name + "는 월월 짖습니다.");
  } else {
    console.log(name + "는 멍멍 짖습니다.");
  }
};

bark("해피", 23)
bark("쫑", 13)
bark("워리", 53)
bark("메리", 17)
