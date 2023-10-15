// type  Implicit typing
var ts = "hello";
console.log("Implicit", ts);
// type annotation
var Calculates = function (num1, num2) {
    return num1 + num2;
};
console.log("type annotation", Calculates(1, 13));
var getTotal = function (num) {
    return num.reduce(function (acc, item) {
        return acc + item;
    });
};
console.log(getTotal([2, 3, 4]));
var user = {
    firstName: "john",
    lastName: "Doe",
    age: 30,
    role: "manager",
};
console.log("type alias", user);
var person = {
    firstName: "john",
    lastName: "Doe",
    age: 30,
    role: "manager",
};
console.log("interfaces", person);
// array
var arr = [1, 2, 3];
console.log("array", arr);
// array push item
var arr2 = ["1", "2", "3"];
console.log(arr2.push("5"));
// type tupple
var tupple = [32, false, "john"];
console.log("tupple", tupple);
