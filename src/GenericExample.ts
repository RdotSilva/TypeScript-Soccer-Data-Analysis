// Bad example creating new classes for each data type
class HoldNumber {
  data: number;
}

class HoldString {
  data: string;
}

const holdNumber = new HoldNumber();
holdNumber.data = 123;

const holdString = new HoldString();
holdString.data = "test";

// Good example using Generics. Do this instead of the above
class HoldAnything<T> {
  data: T;

  add(a: T): T {
    return a;
  }
}

const holdAnythingNumber = new HoldAnything<number>();
holdAnythingNumber.data = 1;
holdAnythingNumber.add(10);

const holdAnythingString = new HoldAnything<string>();
holdAnythingString.data = "test";
