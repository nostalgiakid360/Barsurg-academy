document.getElementById("myForm").addEventListener('submit',saveBookmark);
let message = document.getElementById('message');


function saveBookmark(e){
   
    let siteName = document.getElementById('siteName').value;
    let siteUrl = document.getElementById('siteUrl').value;
    
    if(!validateForm(siteName,siteUrl)){
         return false;
    }


   let bookmark = {
        name: siteName,
        url : siteUrl
    }

  if(localStorage.getItem('bookmarks') === null){
    //init array
    let bookmarks =[];
    //add array
    bookmarks.push(bookmark);
    //set to localStorage
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
   
  }else{
    //get bookmarks from localStorage
      let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    //  add bookmark to array
      bookmarks.push(bookmark);
      //Re-set back to localStorage
  localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
  
    }
    

    // reset form
    document.getElementById("myForm").reset();

    //   refresh bookmark
    fetchBookmarks();
    
    //Prevent form from submitting
   e.preventDefault();
  
}

//delete bookmark
function deleteBookmark(url){
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    for(let i = 0 ; i < bookmarks.length; i++){
        if(bookmarks[i].url == url){
            bookmarks.splice(i,1);
        }
    }
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    fetchBookmarks()
}

// fetch bookmarks
function fetchBookmarks(){

    //Get bookmarks from LocalStorage
     let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
          //Get output id
     let bookmarksResults = document.getElementById('bookmarksResults');
     
     //build output
    bookmarksResults.innerHTML='';
     for(let i = 0 ; i < bookmarks.length; i++){
        let name = bookmarks[i].name;
        let url = bookmarks[i].url;

        bookmarksResults.innerHTML += '<div class="card p-3 mb-3 border-purple shadow ">'+
                                      '<h3 class="d-flex justify-content-between justify-content-xs-between">' +name+
                                      '<div>'+
                                      '<a class = "btn btn-primary" target = "_blank" href="'+url+'">Visit</a>'+
                                      '<a onclick="deleteBookmark(\''+url+'\')" class="btn btn-warning" href="#">Delete</a>'+
                                      '</div>'+
                                      '</h3>' + 
                                      '</div>'
        
     }
}


function validateForm(siteName,siteUrl){
    if(!siteName || !siteUrl){
        alert("please fill in the form");
        return false;
    }
    
    let expression =/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    let regex = new RegExp(expression);

    if(!siteUrl.match(regex)){
        alert('Please use a valid URL');
        return false;
    }
    return true
}