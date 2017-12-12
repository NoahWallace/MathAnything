export class Angle{
	public static toRadians=(angle:number)=>angle * Math.PI / 180;
}

export const Angle = new AngleConversion();