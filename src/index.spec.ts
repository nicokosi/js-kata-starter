import { fizzbuzz } from ".";

describe("FizzBuzz", function () {
  it("should pass", function () {
    expect(fizzbuzz(1)).toEqual("1");
    expect(fizzbuzz(2)).toEqual("2");
    expect(fizzbuzz(3)).toEqual("Fizz");
    expect(fizzbuzz(4)).toEqual("4");
    expect(fizzbuzz(5)).toEqual("Buzz");
    expect(fizzbuzz(6)).toEqual("Fizz");
    expect(fizzbuzz(7)).toEqual("7");
    expect(fizzbuzz(8)).toEqual("8");
    expect(fizzbuzz(9)).toEqual("Fizz");
    expect(fizzbuzz(10)).toEqual("Buzz");
    expect(fizzbuzz(11)).toEqual("11");
    expect(fizzbuzz(12)).toEqual("Fizz");
    expect(fizzbuzz(13)).toEqual("13");
    expect(fizzbuzz(14)).toEqual("14");
    expect(fizzbuzz(15)).toEqual("FizzBuzz");
    expect(fizzbuzz(16)).toEqual("16");
    expect(fizzbuzz(17)).toEqual("17");
    expect(fizzbuzz(18)).toEqual("Fizz");
    expect(fizzbuzz(19)).toEqual("19");
    expect(fizzbuzz(20)).toEqual("Buzz");
  });
});
