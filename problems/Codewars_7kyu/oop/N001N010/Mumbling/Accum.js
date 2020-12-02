const accum = function(str) {
  // let answer = '';
  // let charList = [...str];
  // for (let i = 0; i < str.length; i++) {
  //     for(let j = 0; j < i + 1 ; j++) {
  //         if (j === 0) {
  //             answer += charList[i].toUpperCase();
  //             continue;
  //         }
  //         answer += charList[i].toLowerCase();
  //     }
  //     if (i !== str.length -1) {
  //         answer += '-';
  //     }
  // }
  // console.log(Array(3).join("h"));
  // return answer;

  const letters = [...str];
  const result = [];
  for (let i = 0; i < letters.length; i++) {
    result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
  }
  return result.join('-');
};

module.exports = accum;
