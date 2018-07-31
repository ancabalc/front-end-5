// $(document).ready(documentIncarcat)

$(documentIncarcat)

function documentIncarcat() {
  console.log('Dom loaded')
   
  var getShowsData = function (dynamicValue) {
    var options = {
      url: 'http://api.tvmaze.com/search/shows?q=' + dynamicValue,
      method: 'GET',
      success: manageData
    }
    
    $.ajax(options)
  }
  
  $('#invoke-ajax-test-call').on('click', function() {
    var query = $('[name="query"]').val()
    getShowsData(query)
  })
  
  function manageData (data, textStatus, jqXHR) {  
    $(".container").html(renderHtml(data))
  }
  
  function renderHtml (data) {
    var html = `<ul>`
    for (i = 0; i<data.length; i++) {
      var name = data[i].show.name
      var score = data[i].score
      var url = data[i].show.url
      
      html += `<li>` + name + ' | ' + score + ' | ' + '<a href="' + url +'" target="_blank">'+ url +'</a>' +`</li>` 
    }
    
    html += `</ul>`
    return html;
  }
}