const fs = require('fs');

function readSketchyFile() {
    fs.readFile('does_not_exist.txt', function (err, data) {
        try {
            if (err) {
                throw err;
            }
        } catch (err) {
            console.log('warning: minor issue occured, program continuing');
        }
    });
}

readSketchyFile();
