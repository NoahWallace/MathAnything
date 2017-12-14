
import {Mass} from './Mass'
import {Grams} from './Grams'
import {metric, uscs} from './units'

export class Ounces extends Mass{

	constructor ( n: number, base ) {
		super();
		Object.assign(this,uscs[ base ]);
		this.value    = n;
		return this;

	}
	toGram = () => {
		this.value   = Ounces.baseConvert( this.unitName, "gram",this.value );
		return new Grams(this.value,"gram")
	}
}
let Ounce=(o : number)=> {
	return new Ounces(o, "ounce")
};

/*console.log(Ounce(3).toGram().value)*/
