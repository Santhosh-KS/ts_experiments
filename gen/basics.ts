let a = 10;
function p<A>(val:A):void {
  console.log(val);
}

function identity<A>(value:A):A {
  return value;
}

function pipe<A,B>(input:A, ab:(val:A)=>B): B {
  return ab(input); 
}

function compose<A,B,C>(f:(a:A)=>B, g:(b:B)=>C): (a:A)=>C {
  return (a:A)=>g(f(a));
}

function increment(num:number) {
  return num + 1;
}

function stringify<A>(a:A): string {
  return `${a}`;
}

p(pipe(a, increment));

const s = compose(increment, stringify);

p(pipe(a, s));

export {}
