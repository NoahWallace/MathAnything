export interface _m extends Math {
	add: ( a: number, b: number ) => number;
	sum: ( arg: Array<number> | number, ...args: Array<number> ) => number;
	nthrt: ( x: number, radical: number ) => number;
	isPrime: ( x: number ) => boolean;
	gcd: ( ...args ) => number;
	cbrt: ( x: number ) => number;
}

export const _m: _m = Object.create( Math );
_m.add              = ( a, b ) => a + b;
_m.nthrt            = ( x, radical ) => x ** ( 1 / radical );

_m.sum = ( arg: Array<number> | number, ...args: Array<number> ) => {

	let a   = Array.isArray( arg ) ? arg.reduce( _m.add, 0 ) : arg,
		b   = Array.isArray( args ) ? args.reduce( _m.add, 0 ) : 0,
		sum = _m.add( a, b );

	return Number( sum );
};

_m.isPrime = ( num ) => {
	if ( num < 2 ) {
		return false;
	}

	for ( let i = 2; i < num; i++ ) {
		if ( num % i === 0 ) {
			return false;
		}
	}

	return true;
};
_m.gcd     = ( ...args ) => {
	let d = Math.min.apply( Math, args );
	for ( let n = args.length, i = 0; d > 1 && n > i; args[ i ] % d === 0 ? i++ : (d--, i = 0) ) ;
	return d;
	/*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
	 */
};