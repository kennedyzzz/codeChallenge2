function isAPrime(num) { // isAPrime takes a number num and returns true if the number is prime and false otherwise.
    if (num < 2) return false;
    for (let i = 2; i < num; i++) { //for loop to check if the number is divisible by any number between 2 and num
      if (num % i === 0) return false; //This makes sure that if the number's remainder is 0 it is not a prime number
    }
    return true;
  }
  
  function filterP(arr) { // filterP takes an array of numbers arr and returns a new array containing only the prime numbers from the original array.
    return arr.filter(isAPrime); //this filters elements that are true
  }
  console.log(filterP([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
  