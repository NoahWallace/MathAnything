import { _m } from "../Operations/Root";

export const weight = {

	Gigatonne: {
		toMegatonne: ( g ) => g * 1000,
		toTonne    : ( g ) => g * 1000000000,
		toKilogram : ( g ) => g * 1000000000000,
		toGram     : ( g ) => g * 1000000000000000,
		toMilligram: ( g ) => g * 1000000000000000000,
		toMicrogram: ( g ) => g * 1000000000000000000000,
		toNanogram : ( g ) => g * 1000000000000000000000000,
		toPicogram : ( g ) => g * 1000000000000000000000000000,

	},
	Megatonne: {
		toGigatonne: ( g ) => g / 1000,
		toTonne    : ( g ) => g * 1000000000,
		toKilogram : ( g ) => g * 1000000000000,
		toGram     : ( g ) => g * 1000000000000000,
		toMilligram: ( g ) => g * 1000000000000000000,
		toMicrogram: ( g ) => g * 1000000000000000000000,
		toNanogram : ( g ) => g * 1000000000000000000000000,
		toPicogram : ( g ) => g * 1000000000000000000000000000,

	},
	Tonne    : {
		toGigatonne: ( g ) => g / 1000000000000,
		toMegatonne: ( g ) => g / 1000000000,
		toKilogram : ( g ) => g * 1000,
		toGram     : ( g ) => g * 1000000,
		toMilligram: ( g ) => g * 1000000000,
		toMicrogram: ( g ) => g * 1000000000000,
		toNanogram : ( g ) => g * 1000000000000000,
		toPicogram : ( g ) => g * 1000000000000000000,

	},
	Kilogram : {
		toGigatonne: ( g ) => g / 1000000000000,
		toMegatonne: ( g ) => g / 1000000000,
		toTonne    : ( g ) => g / 1000,
		toGram     : ( g ) => g * 1000,
		toMilligram: ( g ) => g * 1000000,
		toMicrogram: ( g ) => g * 1000000000,
		toNanogram : ( g ) => g * 1000000000000,
		toPicogram : ( g ) => g * 1000000000000000,

	},
	Gram     : {
		toGigatonne: ( g ) => g / 1000000000000000,
		toMegatonne: ( g ) => g / 1000000000000,
		toTonne    : ( g ) => g / 1000000,
		toKilogram : ( g ) => g / 1000,
		toMilligram: ( g ) => g * 1000,
		toMicrogram: ( g ) => g * 1000000,
		toNanogram : ( g ) => g * 1000000000,
		toPicogram : ( g ) => g * 1000000000000,

	},
	Milligram: {
		toGigatonne: ( g ) => g / 1000000000000000000,
		toMegatonne: ( g ) => g / 1000000000000000,
		toTonne    : ( g ) => g / 1000000000,
		toKilogram : ( g ) => g / 1000000,
		toGram     : ( g ) => g / 1000,
		toMicrogram: ( g ) => g * 1000,
		toNanogram : ( g ) => g * 1000000,
		toPicogram : ( g ) => g * 1000000000,

	},
	Microgram: {
		toGigatonne: ( g ) => g / 1000000000000000000000,
		toMegatonne: ( g ) => g / 1000000000000000000,
		toTonne    : ( g ) => g / 1000000000000,
		toKilogram : ( g ) => g / 1000000000,
		toGram     : ( g ) => g / 1000000,
		toMilligram: ( g ) => g / 1000,
		toNanogram : ( g ) => g * 1000,
		toPicogram : ( g ) => g * 1000000,

	},
	Nanogram : {
		toGigatonne: ( g ) => g / 1000000000000000000000000,
		toMegatonne: ( g ) => g / 1000000000000000000000,
		toTonne    : ( g ) => g / 1000000000000000,
		toKilogram : ( g ) => g / 1000000000000,
		toGram     : ( g ) => g / 1000000000,
		toMilligram: ( g ) => g / 1000000,
		toMicrogram: ( g ) => g / 1000,
		toPicogram : ( g ) => g * 1000,

	},
	Picogram : {
		toGigatonne: ( g ) => g / 1000000000000000000000000000,
		toMegatonne: ( g ) => g / 1000000000000000000000000,
		toTonne    : ( g ) => g / 1000000000000000000,
		toKilogram : ( g ) => g / 1000000000000000,
		toGram     : ( g ) => g / 1000000000000,
		toMilligram: ( g ) => g / 1000000000,
		toMicrogram: ( g ) => g / 1000000,
		toNanogram : ( g ) => g / 1000,

	},
};

console.log( _m.numberToString( weight.Gigatonne.toPicogram( 1 ) ) );