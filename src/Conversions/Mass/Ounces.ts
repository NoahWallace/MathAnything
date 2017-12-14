
import {Mass} from './Mass'
import {metric, uscs} from './units'

export class Ounces extends Mass{
	constructor ( n: number, base ) {
		super();
		Object.assign(this,uscs[ base ]);
		this.value    = n;
		return this;

	}
}