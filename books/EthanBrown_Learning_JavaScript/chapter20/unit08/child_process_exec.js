const exec = require('child_process').exec;

exec('ls', function(err, stdout, stderr) {
  if(err) {
    return console.error('Error executing "dir"');
  }

  stdout = stdout.toString();
  console.log(stdout);

  stderr = stderr.toString();
  console.log(stderr);

  if(stderr !== '') {
    console.error('error:');
    console.error(stderr);
  }
});
