function swapCase(str) {
    return str.split('').map(function(char) { //split is used to split the string into array of characters
      if (char === char.toUpperCase()) {
        return char.toLowerCase(); //This checks if a character is in uppercase it should change to a lowercase
      } else if (char === char.toLowerCase()) {
        return char.toUpperCase(); //This changes characters that are in lowercase to uppercase
      } else {
        return char;
      }
    }).join(''); //This joins back the character after splitting
  }
  console.log(swapCase("The Quick Brown Fox"));