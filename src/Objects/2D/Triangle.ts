import { Angle } from "../../Conversions"

export type ITriangleTypes = "Equilateral" | "Right" | "Isoceles" | "Scalene" | "Acute" | "Obtuse"

export class Triangle {
	constructor ( a?: number, b?: number, c?: number ) {}

	sides
	type
	angles
	getType    = {
		bySides: ( sideA: number, sideB: number, sideC?: number ) => {},
		byAngle: ( angleA, angleB, sideA ) => {},

	}
	getHypotenuse = (legA,legB) => {
		return Math.sqrt(Math.pow( legA, 2 ) + Math.pow( legB, 2 ) )
	}

	getCFromAB = ( a: number, b: number, angle: number = 90 ) => {
		let radians=Angle.toRadians( angle ),
			legs=Math.pow( a, 2 ) + Math.pow( b, 2 );
		
		return Math.sqrt(  legs - ((2 * a * b) * Math.cos( radians )) )
	}


}

let a = new Triangle()
console.log( a.getCFromAB( 3, 3) )