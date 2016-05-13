function fearNotLetter(str) {
  var cFirst = str.charCodeAt(0);
  var cLast = str.charCodeAt(str.length-1);
  var cLength = cLast - cFirst;
  
  for (var i=1; i<cLength; i++) {
    if (str.charCodeAt(i) !== cFirst+i) {
      var mStr = String.fromCharCode(cFirst+i);
      console.log(mStr);
      return;
    }
  }
  console.log('none missing');
    
}

fearNotLetter("abcdeg");