function firstWord(str) {
  // Trim leading spaces
  str = str.trim();
  
  // Check if the string is empty
  if (str === '') {
    return '';
  }
  
  // Find the index of the first space
  const spaceIndex = str.indexOf(' ');
  
  // If no space is found, return the entire string
  if (spaceIndex === -1) {
    return str;
  }
  
  // Return the substring from the start to the first space
  return str.substring(0, spaceIndex);
}

// Do not change the code below

const str = prompt("Enter String:");
alert(firstWord(str));
