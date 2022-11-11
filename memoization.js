function fibbonacci(n) {
  if(n <= 2)
    return 1;
  else
    return fibbonacci(n - 1) + fibbonacci(n - 2);
}

const fn = fibbonacci(5);
console.log(fn);