$(
  function () { 
    $('#button1').on(
      'click', 
      function() {
        $('#spinner').css('visibility', 'visible');

        getName(
          function(fullName) {
            $('#spinner').css('visibility', 'hidden');
            $('.content').html('numele este ' + fullName);
          }
        )    
      }
    )
  }
)


$(function() {
  func2(function() {
    func3(function() {
      func4(function(){
        func5(function() {
          
        })
      })
    })
  })
})


// $(function() {
//   var res2 = func2()
//   var res3 = func3(res2)
//   var res4 = func4(res3)
//   var res5 = func5(res4)
// })
$(onLoad2)

function onLoad2() {
  $('#button2').on('click', getPosts)

  function getPosts() {
  
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/posts',
      method: 'GET'
    }).then(function(result) {
      var firstResult = result[0]
      console.log('firstResult', firstResult)
    }).then(function(result) {
      var secondResult = result[2]
      console.log('second result', secondResult)
    })
    
  }
}



function sum1(a, b) {
  console.log('sum1', a + b);
}

function sum2(a, b) {
  return a + b;
}

var suma1 = sum1(2, 3)
console.log('sum1', sum1)

var suma2 = sum2(2, 3)
console.log('sum2', sum2)


function functionCreator() {
  return function() {
    console.log('function')
  }
}








