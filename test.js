
var cryptometh = require('./lib');

var client = new cryptometh.Client({
  host: 'localhost',
  port: 15715,
  user: 'yourusername',
  pass: 'youpassword'
});

client.cmd('getbalance', '*', 6, function(err, balance){
  if (err) return console.log(err);
  console.log('Balance:', balance);
});

