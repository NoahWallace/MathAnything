"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MA = /** @class */ (function () {
    function MA() {
    }
    MA.add = function (a, b) {
        return a + b;
    };
    MA.nthrt = function (x, radical) {
        return Math.pow(x, (1 / radical));
    };
    ;
    MA.sum = function (arg) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var a = Array.isArray(arg) ? arg.reduce(MA.add, 0) : arg, b = Array.isArray(args) ? args.reduce(MA.add, 0) : 0, sum = MA.add(a, b);
        return Number(sum);
    };
    ;
    MA.isPrime = function (num) {
        if (num < 2) {
            return false;
        }
        for (var i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    };
    ;
    MA.gcd = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var d = Math.min.apply(Math, args);
        for (var n = args.length, i = 0; d > 1 && n > i; args[i] % d === 0 ? i++ : (d--, i = 0))
            ;
        return d;
        /*
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
         */
    };
    ;
    MA.numberToString = function (num) {
        var numStr = String(num);
        if (Math.abs(num) < 1.0) {
            var e = parseInt(num.toString()
                .split("e-")[1]);
            if (e) {
                var negative = num < 0;
                if (negative)
                    num *= -1;
                num *= Math.pow(10, e - 1);
                numStr = "0." + (new Array(e)).join("0") + num.toString()
                    .substring(2);
                if (negative)
                    numStr = "-" + numStr;
            }
        }
        else {
            var e = parseInt(num.toString()
                .split("+")[1]);
            if (e > 20) {
                e -= 20;
                num /= Math.pow(10, e);
                numStr = num.toString() + (new Array(e + 1)).join("0");
            }
        }
        return numStr;
    };
    ;
    return MA;
}());
exports.MA = MA;
