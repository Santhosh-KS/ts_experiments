function P<A>(val:A):void {
  return console.log(val);
}

function getRandomDouble():number {
  return Math.random();
}

type Gen<A> = {
  run: ()=>A;
}

type ClosedRange = {
  lowerBound:number,
  upperBound:number
}

function map<A, B>(ga:Gen<A>, f:(a:A)=>B): Gen<B> {
  return { run: ()=>f(ga.run()) }
}

let uniform:Gen<number> = { run: getRandomDouble }

function numberToString(val:number):string {
  return `"${val}"`
}

let b = map(uniform, numberToString)

P(b.run())

// type Pipe = <A,B>(a:A, ab:(a:A)=>B) => B
// const pipe:Pipe =  <A,B>(a:A, ab:(a:A)=>B): B =>  ab(a); 

function pipe<A,B>(input:A, ab:(val:A)=>B): B {
  return ab(input); 
}

function flip<A,B,C>(ab:(a:A,b:B)=>C): (b:B,a:A)=> C {
  return (b:B,a:A)=>ab(a,b)
}

function closedRange(clr:ClosedRange, a:number) {
  return a * (clr.upperBound - clr.lowerBound) + clr.lowerBound
}

function curry<A,B,C>(ab:(a:A,b:B)=>C): (a:A)=>(b:B)=>C {
  return (a:A)=>(b:B)=>ab(a,b)
}

function double(gn:Gen<number>, clr:ClosedRange) {
  return map(gn, curry(closedRange)(clr))
}

function compose<A,B,C>(f:(a:A)=>B, g:(b:B)=>C): (a:A)=>C {
  return (a:A)=>g(f(a));
}

function floor(v:number) {
  return Math.floor(v)
}

function ceil(v:number) {
  return Math.ceil(v)
}

function bool(v:number) {
  return pipe(v,floor) % 2 === 0 ? true : false
}

function id<A>(a:A) { return a}

function execute<A>(gn:Gen<A>) { return gn.run() }

const randomDouble = compose(curry(double)(uniform), execute)
const randomInt = compose(randomDouble, floor) 

const clr:ClosedRange = { lowerBound: -10, upperBound:20}
P(randomDouble(clr))
P(randomInt(clr))

function array<A>(gn:Gen<A>, count:number) : Gen<A[]> {
  let a = (c:A) => Array(count).fill(c).map(gn.run);
  return map(gn, a);
}

let diceRollRange:ClosedRange = { lowerBound: 1, upperBound: 7};
let dr = curry(closedRange)(diceRollRange);

P(array(uniform, 2).run().map(compose(dr,floor)));
P(array(uniform, 2).run().map(compose(dr,floor)));
P(array(uniform, 2).run().map(compose(dr,floor)));
P(array(uniform, 2).run().map(compose(dr,floor)));

let char:string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
const x = char.split('')
P(x)


function elements(n:number): string {
  return x[n]
}

let passwordCharRange:ClosedRange = { lowerBound: 0, upperBound: char.length};
let pcr = curry(closedRange)(passwordCharRange);
const a1 = array(uniform, 6).run().map(compose(pcr,floor)).map(elements).join("");
const a2 = array(uniform, 6).run().map(compose(pcr,floor)).map(elements).join("");
const a3 = array(uniform, 6).run().map(compose(pcr,floor)).map(elements).join("");
const password = [a1, a2, a3].join("-")
P(password)

