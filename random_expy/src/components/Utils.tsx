function identity<T>(value:T):T { return value}

function pipe<A,B>(a:A, f:(a:A)=>B): B { return f(a) }

function compose<A,B,C>(ab:(a:A)=>B, bc:(b:B)=>C): (a:A)=>C {
  return (a:A)=>(bc(ab(a)))
}

function stringify<T>(value:T) { return JSON.stringify(value)}

function curry<A,B,C>(ab:(a:A, b:B)=>C): (a:A)=>(b:B)=>C {
  return (a:A)=>(b:B)=>ab(a,b) 
}
 
export { pipe, compose, stringify, identity, curry}
