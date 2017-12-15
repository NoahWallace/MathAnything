import { Mass } from "./Mass";
import { metric } from "./units";
import { Ounces } from "./Ounces";
import { MA } from "../../Operations/Root";

export class Grams extends Mass {

	constructor ( n: number, base ) {
		super();
		Object.assign( this, metric[ base ] );
		this.value = n;
		return this;

	}

	toOunce    = () => {
		this.value = Grams.baseConvert( this.unitName, "ounce", this.value );
		return new Ounces( this.value, "ounce" );

	};
	toPicogram      = () => {
		this.value = Grams.baseConvert( this.unitName, "picogram", this.value );
		Object.assign( this, metric.ton );
		return this;

	};
	toMicrogram      = () => {
		this.value = Grams.baseConvert( this.unitName, "microgram", this.value );
		Object.assign( this, metric.ton );
		return this;

	};
	toMilligram      = () => {
		this.value = Grams.baseConvert( this.unitName, "milligram", this.value );
		Object.assign( this, metric.ton );
		return this;

	};
	toGram     = () => {
		this.value = Grams.baseConvert( this.unitName, "gram", this.value );
		Object.assign( this, metric.gram );
		return this;

	};
	toKilogram = () => {
		this.value = Grams.baseConvert( this.unitName, "kilogram", this.value );
		Object.assign( this, metric.kilogram );
		return this;

	};
	toTon      = () => {
		this.value = Grams.baseConvert( this.unitName, "ton", this.value );
		Object.assign( this, metric.ton );
		return this;

	};
	toMegaton      = () => {
		this.value = Grams.baseConvert( this.unitName, "megaton", this.value );
		Object.assign( this, metric.ton );
		return this;

	};
	toGigaton      = () => {
		this.value = Grams.baseConvert( this.unitName, "gigaton", this.value );
		Object.assign( this, metric.ton );
		return this;

	};

}

export const Gigaton   = ( b: number ) => new Grams( b, "gigaton" );
export const Megaton   = ( b: number ) => new Grams( b, "megaton" );
export const Ton       = ( b: number ) => new Grams( b, "ton" );
export const Kilogram  = ( b: number ) => new Grams( b, "kilogram" );
export const Gram      = ( b: number ) => new Grams( b, "gram" );
export const Milligram = ( b: number ) => new Grams( b, "milligram" );
export const Microgram = ( b: number ) => new Grams( b, "microgram" );
export const Nanogram  = ( b: number ) => new Grams( b, "nanogram" );
export const Picogram  = ( b: number ) => new Grams( b, "picogram" );

/*console.log( Kilogram( 1 ).toGram().value ); //1000
console.log( Kilogram( 1 ).toGram().unitName ); //Gram
console.log( Kilogram( 1 ).toGram().unit ); // g
console.log( Kilogram( 1 ).toGram().unitName,Kilogram( 1 ).toGram().baseUnit ); // Gram
console.log( Kilogram( 1 ).unitName,Kilogram( 1 ).baseUnit ); // Gram
console.log( Kilogram( 1 ).toGram().toDisplay() ); //1000 g
console.log( Kilogram( 1 ).toGram().toDisplay( "long" ) ); //1000 Gram
console.log( Gram( 1 ).toKilogram().value ); // 0.001
console.log( Gram( 200 ).toOunce().value ); // 7.054793167573913
console.log( MA.numberToString(Gram( 4000 ).toMegaton().value ));*/

