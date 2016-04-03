var xhr = require('xhr')
var example = require('./views/example.hbs')

xhr.get('https://api.wheretheiss.at/v1/satellites/25544', function(err, data) {
  if (err) console.log(err) // do something

  console.log(data.body.name)
  document.body.innerHTML = example(data.body);
})
