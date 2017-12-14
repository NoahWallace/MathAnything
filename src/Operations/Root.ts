export class MA {
	public static add ( a, b ) {
		return a + b;
	}

	public static nthrt ( x, radical ) {
		return x ** ( 1 / radical );
	};

	public static sum ( arg: Array<number> | number, ...args: Array<number> ) {

		let a   = Array.isArray( arg ) ? arg.reduce( MA.add, 0 ) : arg,
			b   = Array.isArray( args ) ? args.reduce( MA.add, 0 ) : 0,
			sum = MA.add( a, b );

		return Number( sum );
	};

	public static isPrime ( num ) {
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

	public static gcd ( ...args ) {
		let d = Math.min.apply( Math, args );
		for ( let n = args.length, i = 0; d > 1 && n > i; args[ i ] % d === 0 ? i++ : (d--, i = 0) ) ;
		return d;
		/*
		https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
		 */
	};

	public static numberToString ( num ) {
		let numStr = String( num );

		if ( Math.abs( num ) < 1.0 ) {
			let e = parseInt( num.toString()
				.split( "e-" )[ 1 ] );
			if ( e ) {
				let negative = num < 0;
				if ( negative ) num *= -1;
				num *= Math.pow( 10, e - 1 );
				numStr = "0." + (new Array( e )).join( "0" ) + num.toString()
					.substring( 2 );
				if ( negative ) numStr = "-" + numStr;
			}
		}
		else {
			let e = parseInt( num.toString()
				.split( "+" )[ 1 ] );
			if ( e > 20 ) {
				e -= 20;
				num /= Math.pow( 10, e );
				numStr = num.toString() + (new Array( e + 1 )).join( "0" );
			}
		}

		return numStr;
	};
}

