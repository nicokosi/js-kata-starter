export function fizzbuzz(n: number): string {
  return n % 15 == 0 ? "FizzBuzz" :
    n % 3 == 0 ? "Fizz" :
      n % 5 == 0 ? "Buzz" :
        n.toString();
}
