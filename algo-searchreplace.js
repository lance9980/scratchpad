
$("document").ready(function() {

function myReplace(str, before, after) {
  var strArr = str.split(" ");
  console.log(strArr);
  for (var i=0; i<strArr.length; i++) {
    if (strArr[i] === before) {
       strArr[i] = after; 
    }  
  }
  console.log(strArr);
    
  //return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");


});

