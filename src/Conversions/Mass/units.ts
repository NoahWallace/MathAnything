export type TStandard = 'metric' | 'USCS' | 'common' | 'standard' | 'us';
/*
https://en.wikipedia.org/wiki/United_States_customary_units
 */
export const uscs = {
	grain:{
		baseUnit: "pound",
		unit    : "gr",
		unitName: "grain",
		standard: "USCS",
		fromBase: { factor: 1/7000 },
	},
	dram:{
		baseUnit: "grain",
		unit    : "dr",
		unitName: "dram",
		standard: "USCS",
		fromBase: { factor: 27.34375 },//27 11/32 of grain
	},
	ounce:{
		baseUnit: "ounce",
		unit    : "oz",
		unitName: "ounce",
		standard: "USCS",
		fromBase: { factor: 1 }, //16 dr
	},
	pound:{
		baseUnit: "ounce",
		unit    : "lb",
		unitName: "pound",
		standard: "USCS",
		fromBase: { factor:16 }, //16 ounces
	},
	hundredweight:{
		baseUnit: "kilogram",
		unit    : "cwt",
		unitName: "hundredweight",
		standard: "USCS",
		fromBase: { factor: 50.80235454}, //16 ounces
	},
	get cental(){
		let o= this.hundredweight;
		o.unitName="cental";
		return o
	},

	longhundredweight:{
		baseUnit: "kilogram",
		unit    : "long cwt",
		unitName: "longhundredweight",
		standard: "USCS",
		fromBase: { factor:45.359},
	},
	ton:{
		baseUnit: "hundredweight",
		unit    : "t",
		unitName: "ton",
		standard: "USCS",
		fromBase: { factor:20 },
	},
	longton:{
		baseUnit: "longhundredweight",
		unit    : "long ton",
		unitName: "longton",
		standard: "USCS",
		fromBase: { factor: 20} ,
	}
}

export const imperial= {} //  https://en.wikipedia.org/wiki/Imperial_units
/*
https://en.wikipedia.org/wiki/International_System_of_Units
 */
export const metric = {
	gigaton:{
		baseUnit: "kilogram",
		unit    : "Gt",
		unitName: "gigaton",
		standard: "metric",
		fromBase: { factor: 12, factorType:'power' },
	},
	megaton:{
		baseUnit: "kilogram",
		unit    : "Mt",
		unitName: "megaton",
		standard: "metric",
		fromBase: { factor: 9, factorType:'power' },
	},
	tonne:{
		baseUnit: "kilogram",
		unit    : "t",
		unitName: "tonne",
		standard: "metric",
		fromBase: { factor:  3, factorType:'power' },
	},
	get metricton(){return this.tonne},

	weightton:{},
	grosston:{},
	kilogram: {
		baseUnit: "kilogram",
		unit    : "kg",
		unitName: "kilogram",
		standard: "metric",
		fromBase: { factor:  0, factorType:'power' },
	},
	gram    : {
		baseUnit: "kilogram",
		unit    : "g",
		unitName: "gram",
		standard: "metric",
		fromBase: { factor:  -3, factorType:'power' },
	},
	milligram:{
		baseUnit: "kilogram",
		unit    : "mg",
		unitName: "milligram",
		standard: "metric",
		fromBase: { factor: -6, factorType:'power' },
	},
	microgram:{
		baseUnit: "kilogram",
		unit    : "μg",
		unitName: "microgram",
		standard: "metric",
		fromBase: { factor:  -9, factorType:'power' },
	},
	nanogram:{
		baseUnit: "kilogram",
		unit    : "ng",
		unitName: "nanogram",
		standard: "metric",
		fromBase: { factor:  -12, factorType:'power'},
	},
	picogram:{
		baseUnit: "kilogram",
		unit    : "ng",
		unitName: "picogram",
		standard: "metric",
		fromBase: { factor:  -15, factorType:'power' },
	},


};