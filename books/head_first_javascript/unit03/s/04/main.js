const calculateArea = function(r) {
  let area;
  if(r <= 0) {
    return 0;
  } else {
    area = Math.PI * r * r;
    return area;
  }
};

const radius = 5.2;
const theArea = calculateArea(radius);
console.log("면적 : " + theArea);

