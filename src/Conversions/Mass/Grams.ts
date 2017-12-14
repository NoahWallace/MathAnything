
import {Mass} from './Mass'
import {metric} from './units'
import {Ounces} from './Ounces'

export class Grams extends Mass {

	constructor ( n: number, base ) {
		super();
		Object.assign(this,metric[ base ]);
		this.value    = n;
		return this;

	}
	toOunce = () => {
		this.value   = Grams.baseConvert( this.unitName, "ounce",this.value );
		return new Ounces(this.value,"ounce")

	}
	toGram     = () => {
		this.value   = Grams.baseConvert( this.unitName, "gram",this.value );
		Object.assign( this, metric.gram );
		return this;

	};
	toKilogram = () => {
		this.value  = Grams.baseConvert( this.unitName, "kilogram",this.value );
		Object.assign( this, metric.kilogram );
		return this;

	};
	toTon = () => {
		this.value   = Grams.baseConvert( this.unitName, "ton",this.value );
		Object.assign( this, metric.ton );
		return this;

	};





}

let Kilogram = ( b: number ) => {
	return new Grams( b, "kilogram" );
};
let Gram     = ( b: number ) => {
	return new Grams( b, "gram" );
};
/*console.log( Kilogram( 1 ).toGram().value ); //1000
console.log( Kilogram( 1 ).toGram().unitName ); //Gram
console.log( Kilogram( 1 ).toGram().unit ); // g
console.log( Kilogram( 1 ).toGram().unitName,Kilogram( 1 ).toGram().baseUnit ); // Gram
console.log( Kilogram( 1 ).unitName,Kilogram( 1 ).baseUnit ); // Gram
console.log( Kilogram( 1 ).toGram().toDisplay() ); //1000 g
console.log( Kilogram( 1 ).toGram().toDisplay( "long" ) ); //1000 Gram
console.log( Gram( 1 ).toKilogram().value ); // 0.001
console.log( Gram( 200 ).toOunce().value ); // 7.054793167573913*/

