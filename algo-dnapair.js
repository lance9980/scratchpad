function pairElement(str) {
  var resArr = [];
  
  function findPair(char) {
    switch (char) {
      case 'A':
        resArr.push(['A','T']);
        break;
      case 'T':
        resArr.push(['T','A']);
        break;
      case 'C':
        resArr.push(['C','G']);
        break;
      case 'G':
        resArr.push(['G','C']);
        break;
      default: break;
    }    
  }
  
  var sArr = str.split("");
  
  for (var i=0; i<sArr.length; i++) {
    findPair(sArr[i]);
  }
  
  console.log(resArr);
    
  //return str;
}

pairElement("GCG");