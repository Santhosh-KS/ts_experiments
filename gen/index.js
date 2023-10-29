function P(val) {
    return console.log(val);
}
function getRandomDouble() {
    return Math.random();
}
function map(ga, f) {
    return { run: function () { return f(ga.run()); } };
}
var uniform = { run: getRandomDouble };
function numberToString(val) {
    return "\"".concat(val, "\"");
}
var b = map(uniform, numberToString);
P(b.run());
// type Pipe = <A,B>(a:A, ab:(a:A)=>B) => B
// const pipe:Pipe =  <A,B>(a:A, ab:(a:A)=>B): B =>  ab(a); 
function pipe(input, ab) {
    return ab(input);
}
function flip(ab) {
    return function (b, a) { return ab(a, b); };
}
function closedRange(clr, a) {
    return a * (clr.upperBound - clr.lowerBound) + clr.lowerBound;
}
function curry(ab) {
    return function (a) { return function (b) { return ab(a, b); }; };
}
function double(gn, clr) {
    return map(gn, curry(closedRange)(clr));
}
function compose(f, g) {
    return function (a) { return g(f(a)); };
}
function floor(v) {
    return Math.floor(v);
}
function ceil(v) {
    return Math.ceil(v);
}
function bool(v) {
    return pipe(v, floor) % 2 === 0 ? true : false;
}
function id(a) { return a; }
function execute(gn) { return gn.run(); }
var randomDouble = compose(curry(double)(uniform), execute);
var randomInt = compose(randomDouble, floor);
var clr = { lowerBound: -10, upperBound: 20 };
P(randomDouble(clr));
P(randomInt(clr));
function array(gn, count) {
    var a = function (c) { return Array(count).fill(c).map(gn.run); };
    return map(gn, a);
}
var diceRollRange = { lowerBound: 1, upperBound: 7 };
var dr = curry(closedRange)(diceRollRange);
P(array(uniform, 2).run().map(compose(dr, floor)));
P(array(uniform, 2).run().map(compose(dr, floor)));
P(array(uniform, 2).run().map(compose(dr, floor)));
P(array(uniform, 2).run().map(compose(dr, floor)));
var char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var x = char.split('');
P(x);
function elements(n) {
    return x[n];
}
var passwordCharRange = { lowerBound: 0, upperBound: char.length };
var pcr = curry(closedRange)(passwordCharRange);
var a1 = array(uniform, 6).run().map(compose(pcr, floor)).map(elements).join("");
var a2 = array(uniform, 6).run().map(compose(pcr, floor)).map(elements).join("");
var a3 = array(uniform, 6).run().map(compose(pcr, floor)).map(elements).join("");
var password = [a1, a2, a3].join("-");
P(password);
