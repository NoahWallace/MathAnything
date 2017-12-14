export const uscs = {
	ounce:{
		baseUnit: "ounce",
		unit    : "oz",
		unitName: "ounce",
		standard: "USCS",
		fromBase: { factor: 1 },
	},
	pound:{
		baseUnit: "ounce",
		unit    : "lb",
		unitName: "pound",
		standard: "USCS",
		fromBase: { factor:16 },
	},
	shortTon:{
		baseUnit: "ounce",
		unit    : "t",
		unitName: "shortTon",
		standard: "USCS",
		fromBase: { factor: 16*2000 },
	},
	longTon:{
		baseUnit: "ounce",
		unit    : "t",
		unitName: "longTon",
		standard: "USCS",
		fromBase: { factor: 16*2000 },
	}
}



export const metric = {
	gigaton:{
		baseUnit: "gram",
		unit    : "Gt",
		unitName: "gigaton",
		standard: "metric",
		fromBase: { factor: 15 },
	},
	megaton:{
		baseUnit: "gram",
		unit    : "Mt",
		unitName: "megaton",
		standard: "metric",
		fromBase: { factor: 12 },
	},
	ton:{
		baseUnit: "gram",
		unit    : "t",
		unitName: "ton",
		standard: "metric",
		fromBase: { factor: 6 },
	},
	kilogram: {
		baseUnit: "gram",
		unit    : "kg",
		unitName: "kilogram",
		standard: "metric",
		fromBase: { factor: 3 },
	},
	gram    : {
		baseUnit: "gram",
		unit    : "g",
		unitName: "gram",
		standard: "metric",
		fromBase: { factor: 0 },
	},
	milligram:{
		baseUnit: "gram",
		unit    : "mg",
		unitName: "milligram",
		standard: "metric",
		fromBase: { factor: -3 },
	},
	microgram:{
		baseUnit: "gram",
		unit    : "μg",
		unitName: "microgram",
		standard: "metric",
		fromBase: { factor: -6 },
	},
	nanogram:{
		baseUnit: "gram",
		unit    : "ng",
		unitName: "nanogram",
		standard: "metric",
		fromBase: { factor: -9 },
	},
	picogram:{
		baseUnit: "gram",
		unit    : "ng",
		unitName: "picogram",
		standard: "metric",
		fromBase: { factor: -12 },
	},


};