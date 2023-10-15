// type  Implicit typing
let ts: string = "hello";
console.log("Implicit", ts);

// type annotation
const Calculates = (num1: number, num2: number) => {
  return num1 + num2;
};

console.log("type annotation", Calculates(1, 13));

const getTotal = (num: Array<number>) => {
  return num.reduce((acc, item) => {
    return acc + item;
  });
};

console.log(getTotal([2, 3, 4]));

// type alias
type User = {
  firstName: string;
  lastName: string;
  age: number;
  role: string;
};

const user: User = {
  firstName: "john",
  lastName: "Doe",
  age: 30,
  role: "manager",
};

console.log("type alias", user);

//  interfaces
interface Person {
  firstName: string;
  lastName: string;
  age: number;
  role: string;
}

const person: Person = {
  firstName: "john",
  lastName: "Doe",
  age: 30,
  role: "manager",
};

console.log("interfaces", person);

// array
const arr: Array<number> = [1, 2, 3];
console.log("array", arr);

// array push item
const arr2: Array<string> = ["1", "2", "3"];
console.log(arr2.push("5"));

// type tupple
const Tupple: [string, boolean, number] = ["32", false, 32];

console.log("tupple", Tupple);
