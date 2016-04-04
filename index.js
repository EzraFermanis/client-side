var xhr = require('xhr')
var example = require('./views/cats.hbs')
var $ = require('jquery')

getInfo()

$(document).ready(function() {
  $('#submit').click(function() {
    getInfo()
  })
  $('#getCat').click(function() {
    getInfo($(''))
  })

})


function getInfo(id){
  if (id) {

  }

  xhr.get('http://localhost:3000/v1/cats', function(err, data) {

    if (err) console.log(err) // do something

    console.log(data.body)
    console.log('test1')
    document.body.innerHTML = example(JSON.parse(data.body));
  })
}
