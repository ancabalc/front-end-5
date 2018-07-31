// $(document).ready(documentIncarcat)

$(onHtmlLoaded)

function onHtmlLoaded() {
  
  var loadPosts = function () {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts",
  //     method: "GET",
      success: function(data) {
        console.log("Posts =  ", data);
      }
    });
  }
  
  var loadPost = function (id) {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts/" + id,
  //     method: "GET",
      success: function(data) {
        console.log("Post =  ", data);
      }
    });
  }
  
  // REQUEST TO CREATE A POST
  var createPost = function() {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts",
      method: "POST",
      data: {
        title: "Post by Anca",
        body: "Bla by ANCA",
        userId: 1
      },
      success: function(data) {
        console.log("Create post", data); 
        console.log("Create post with id", data.id); 
      }
    });    
  }
  
  // REQUEST TO UPDATE A POST
  var editPost = function(id) {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts/" + id,
      method: "PUT",
      data: {
        title: "Edit post",
        body: "Edit post body",
        userId: 1
      },
      success: function(data) {
        console.log("Update post", data);  
      }
    });      
  }
  
  // REQUEST TO DELETE A POST
  var deletePost = function(id) {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts/" + id,
      method: "DELETE",
      success: function() {
        console.log("POST WAS DELETED");
      }
    });
  }
  
  var getPostsFetch = function() {
    fetch(
     "https://jsonplaceholder.typicode.com/posts", {
      method: 'GET'
    }).then(function(response){
      return response.json();
    }).then(function(jsonResp) {
      console.log(jsonResp);
    });
  }
  
  getPostsFetch();
  
//   loadPosts();
//   loadPost(3);
//   loadPost(10);
//   loadPost(50);
  
//   createPost();
  
//   editPost(1);
//   editPost(10);
   
//   deletePost(4);
}