function P<T>(value:T) { console.log(value) }

function uniformRandomNumberGenerator() {
  return Math.random()
}

function stringify<T>(value:T) { return `"${value}"`}

type TGen<T> = {
  run:()=>T
}

class Gen<A> implements TGen<A> {
  private _run:()=>A
 
  constructor(f:()=>A) {
    this._run = f
  }
  
  run() {
    return this._run()
  }

  map<B>(ab:(a:A)=>B):Gen<B> {
    return new Gen<B>(()=>ab(this.run()))
  }
}

function identity<T>(value:T) { return value }

let a:Gen<number> = new Gen(uniformRandomNumberGenerator)

P(typeof a)
P(a.run())
P(a.map(stringify).run())
P(typeof a.map(stringify).run)
P(a.map(stringify).map(identity))
P(a.map(stringify).run())

export {}
