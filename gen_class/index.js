"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function P(value) { console.log(value); }
function uniformRandomNumberGenerator() {
    return Math.random();
}
function stringify(value) { return "\"".concat(value, "\""); }
var Gen = /** @class */ (function () {
    function Gen(f) {
        this._run = f;
    }
    Gen.prototype.run = function () {
        return this._run();
    };
    Gen.prototype.map = function (ab) {
        var _this = this;
        return new Gen(function () { return ab(_this.run()); });
    };
    return Gen;
}());
function identity(value) { return value; }
var a = new Gen(uniformRandomNumberGenerator);
P(typeof a);
P(a.run());
P(a.map(stringify).run());
P(typeof a.map(stringify).run);
P(a.map(stringify).map(identity));
P(a.map(stringify).run());
