
import { MA } from "../../Operations/Root";
import { metric, uscs } from "./units";

export class Mass {
	value;
	unit;
	unitName;
	baseUnit;
	toDisplay  ( type?: string ) {
		let val = type === "long" ? this.unitName : this.unit;
		return `${MA.numberToString( this.value )} ${val}`;
	};
	private static getBaseConversion(oldUnit,newUnit,value){
		let oldBase=oldUnit.baseUnit;
		let newBase=newUnit.baseUnit;
		if(oldBase === newBase){
			if(newBase === 'gram') {
				let pow = 0;
				if ( newUnit.fromBase.factor <= oldUnit.fromBase.factor ) {
					pow = newUnit.fromBase.factor + oldUnit.fromBase.factor;
				}
				else {
					pow = oldUnit.fromBase.factor - newUnit.fromBase.factor;
				}
				return value * Math.pow( 10, pow )

			}
			//TODO: finish here
			if(newBase === 'ounce'){

			}
		}
		else{
			if(oldBase === 'gram' && newBase === 'ounce'){
				let baseValue=this.baseConvert(oldUnit.unitName,"gram",value)
				return baseValue / 28.34952;
			}
			if(oldUnit === 'ounce' && newUnit === 'gram'){
				let baseValue=this.baseConvert(oldUnit.unitName,"gram",value)
				return baseValue * 28.34952;
			}
		}
	}

	protected static baseConvert ( fromUnitName, toUnitName, value ) {
		let oldUnit = metric[ fromUnitName ] || uscs[ fromUnitName ];
		let newUnit = metric[ toUnitName ]|| uscs[ toUnitName ];
		return this.getBaseConversion(oldUnit,newUnit,value)
	}


}

