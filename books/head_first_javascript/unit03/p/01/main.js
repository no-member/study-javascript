const whatShallIWear = function(temp) {
  if(temp < 60) {
    console.log("자켓을 입으세요.");
  } else if(temp < 70) {
    console.log("스웨터를 입으세요.");
  } else {
    console.log("티셔츠를 입으세요.");
  }
};

whatShallIWear(50);
whatShallIWear(80);
whatShallIWear(60);
