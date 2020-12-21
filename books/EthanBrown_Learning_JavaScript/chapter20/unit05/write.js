const fs = require('fs');
const path = require('path');

fs.writeFile('hello.txt', 'hello from Node!', function (err) {
  if (err) {
    return console.error('Error writing to file');
  }
});

// 아래의 방법으로는 윈도우 컴퓨터의 경우는 정상적으로 동작하지 않으므로 path 모듈을 사용하도록 하자
// fs.writeFile(__dirname + '/always_with_write_js.txt',
//     `I'm always with write.js!`, function (error) {
//         if (error) {
//             return console.error('Error writing to file.');
//         }
//     });

fs.writeFile(path.join(__dirname, 'always_with_write_js.txt')
  , 'hello from Node!'
  , function (err) {
    if (err) {
      return console.error('Error writing to file');
    }
  });