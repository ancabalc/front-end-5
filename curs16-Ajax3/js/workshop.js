$(onHtmlLoaded)

function onHtmlLoaded() {
  var apiUrl = "https://jsonplaceholder.typicode.com/posts/";
  
  // GET POSTS LIST
  getPosts();
  
  // DELETE POST ON CLICK
  $("#deletePost").on("click", deletePost); // deletePost() WRONG - will invoke the function before click, on script loaded
  
  // DELETE HTTP REQUEST
  function deletePost() {
    // GET INPUT VALUE ONLY AFTER CLICK (parse of DOM to get the element)
    var id = $("[name=delete]").val();
    $.ajax({
      url: apiUrl + id,
      method: "DELETE",
      success: function() {
        alert("Post with id " + id + " deleted");
      }
    })
  }
  
  function getPosts() {
    var listContainer = $("#listPosts");
    $.ajax({
      url: apiUrl,
      success: function(response) {
//         console.log("RESPONSE ", response); 
        for(var i = 0; i < response.length; i++) {
//           console.log(response[i].title);
          var title = "<h3>" + response[i].title + "</h3>";
          listContainer.append(title);
        }
      }
    });
  }

}