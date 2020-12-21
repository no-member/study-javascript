const fs = require('fs');
const path = require('path');

// readFile은 인코딩 정보가 없는 경우 가공되지 않는 바이너리 데이터인 버퍼를 반환
fs.readFile(path.join(__dirname, 'hello.txt'), function (err, data) {
  if (err) {
    return console.error('Error reading file');
  }
  console.log('File content:');
  console.log(data);
})

fs.readFile(path.join(__dirname, 'hello.txt'), {encoding: 'utf8'}, function (err, data) {
  if (err) {
    return console.error('Error reading file');
  }
  console.log('File content with encoding:');
  console.log(data);
})
