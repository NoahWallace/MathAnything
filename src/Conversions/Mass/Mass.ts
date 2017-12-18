
import { MA } from "../../Operations/Root";
import { metric, uscs, TStandard } from "./units";


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
		if(oldBase !== newBase){
			console.log(value, oldUnit)
			console.log(value, newUnit)

			return this.baseConvert(newUnit,newUnit.baseUnit,oldUnit.value)
		}
		if(oldBase === newBase){

			if(oldUnit.baseName===newUnit.baseUnit){return value}
			else{

				return value * (oldUnit.fromBase.factor / newUnit.fromBase.factor)
			}
/*			 if(newBase === 'kilogram') {
			 	let pow = 0;
			 	if ( newUnit.fromBase.factor > oldUnit.fromBase.factor ) {

			 		pow = oldUnit.fromBase.factor - newUnit.fromBase.factor;
			 	}
			 	else if(newUnit.fromBase.factor === oldUnit.fromBase.factor){

			 		pow=0
				}
			 	else {

			 		pow = oldUnit.fromBase.factor - newUnit.fromBase.factor;
			 	}

			 	return value * Math.pow( 10, pow )

			 }
			 //TODO: finish here
			 if(newBase === 'ounce'){

			 	return value
			 }*/
		}
		else{

			if(oldBase === 'kilogram' && newBase === 'ounce'){
				let baseValue=this.baseConvert(oldUnit,"gram",value)
				return baseValue / 28.34952;
			}
			if(oldBase === 'ounce' && newBase === 'kilogram'){
				let baseValue=this.baseConvert(oldUnit,"ounce",value)
				return baseValue * 28.34952;
			}
		}
	}

	protected static baseConvert ( oldUnit, toUnitName, value ) {
		let newUnitCollection;

		if(metric.hasOwnProperty(toUnitName)){newUnitCollection=metric}
		if(uscs.hasOwnProperty(toUnitName)){newUnitCollection=uscs}
		if(!newUnitCollection){throw new Error(`Unit "${toUnitName}" is not defined in Schema`)}
		let newUnit = newUnitCollection[ toUnitName ];
		return this.getBaseConversion(oldUnit,newUnit,value)
	}


}

