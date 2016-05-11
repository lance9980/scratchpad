function translatePigLatin(aStr) {
  var vowels = ['a','e','i','o','u'];
  
  var firstV = aStr.indexOf(vowels[0]);
  for (var i=1; i<vowels.length; i++) {
    var curV = aStr.indexOf(vowels[i]);
    if (firstV === -1 && curV >= 0) {      
      firstV = curV;
    }
    if (curV !== -1 && curV < firstV) {
      firstV = curV;
    }
  }
  
  var newStr = "";
  if (firstV === 0) {
    newStr = aStr + "way";
  } else {
    newStr = aStr.substr(firstV, aStr.length) + aStr.substring(0,firstV) + "ay";
  }
  
  console.log(newStr);
}

translatePigLatin("algorithm");
