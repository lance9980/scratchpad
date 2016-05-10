
$("document").ready(function() {


function myReplace(str, before, after) {
  var strArr = str.split(" ");
  //console.log(strArr);
  for (var i=0; i<strArr.length; i++) {
    if (strArr[i] === before) {
      if (strArr[i].charAt(0) === strArr[i].charAt(0).toUpperCase()) {      
        var nStr = after.charAt(0).toUpperCase().concat(after.slice(1,after.length));
        strArr[i] = nStr;
      } else {
        strArr[i] = after;
      }
     } 
   }
  console.log(strArr.join(" "));
    
  //return str;
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");


});

