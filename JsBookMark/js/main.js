document.getElementById('myForm').addEventListener('submit',saveBookMark);


function saveBookMark(e){
  var siteName=document.getElementById('siteName').value;
  var siteUrl=document.getElementById('siteUrl').value;
  var bookmark={
    name:siteName,
    url:siteUrl
  }
  if(localStorage.getItem('bookmarks')===null){
    var bookmarks=[];
    bookmarks.push(bookmark);
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));

}
else{
  var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));
  bookmarks.push('bookmark');
  localStorage.setItem('bookmarks',JSON.stringify(bookmarks));

}
  e.preventDefault();
}

function fetchBookmarks(){
var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));
var bookmarksResults=document.getElementById('bookmarksResults');
bookmarksResults.innerHTML='Hello';

console.log(bookmarks);
}
