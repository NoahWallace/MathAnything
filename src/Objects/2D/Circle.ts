export type IValueType = 'rad' | 'circ' | 'area' | 'diam';




export class Circle {
	radius;
	circumference;
	diameter;
	area;
	constructor(v?:number,type?:IValueType){


		if(v && type){
			switch(type){
				case 'rad':
					return this.setDimensions.fromRadius(v);
				case 'circ':
					return this.setDimensions.fromCircumference(v);
				case 'area':
					return this.setDimensions.fromArea(v);
				case 'diam':
					return this.setDimensions.fromDiameter(v);

			}
		}
		return this;
	}


	setDimensions = {
		fromArea:(a:number)=>{
			this.area=a;
			this.radius=Circle.getRadius.fromArea(a);
			this.diameter=Circle.getDiameter.fromArea(a);
			this.circumference=Circle.getCircumference.fromArea(a);
			return this;
		},
		fromCircumference:(c:number)=>{
			this.circumference=c;
			this.radius=Circle.getRadius.fromCircumference(c);
			this.diameter=Circle.getDiameter.fromCircumference(c);
			this.area=Circle.getArea.fromCircumference(c);
			return this
		},
		fromDiameter:(d:number)=>{
			this.diameter=d;
			this.radius=Circle.getRadius.fromDiameter(d);
			this.area=Circle.getArea.fromDiameter(d);
			this.circumference=Circle.getCircumference.fromDiameter(d);
			return this;
		},
		fromRadius:(r:number)=>{
			this.radius=r;
			this.circumference=Circle.getCircumference.fromRadius(r);
			this.diameter=Circle.getDiameter.fromRadius(r);
			this.area=Circle.getArea.fromRadius(r);
			return this;
		},
	}
	public static getDiameter = {
		fromArea         : ( a: number ): number => Circle.getRadius.fromArea( a ) * 2,
		fromCircumference: ( c: number ): number => c / Math.PI,
		fromRadius       : ( r: number ): number => r * 2,
	};

	public static getRadius = {
		fromArea         : ( a: number ): number => Math.sqrt( (a / Math.PI) ),
		fromCircumference: ( c: number ): number => (c / Math.PI) / 2,
		fromDiameter     : ( d: number ): number => d / 2,
	};

	public static getArea = {
		fromCircumference: ( c: number ): number => Math.pow( c, 2 ) / (4 * Math.PI),
		fromDiameter     : ( d: number ): number => Math.PI * Math.pow( (d / 2), 2 ),
		fromRadius       : ( r: number ): number => Math.PI * Math.pow( r, 2 ),
	};

	public static getCircumference = {
		fromArea    : ( a: number ): number => (Circle.getRadius.fromArea( a ) * 2) * Math.PI,
		fromDiameter: ( d: number ): number => d * Math.PI,
		fromRadius  : ( r: number ): number => r * 2 * Math.PI,
	};
}


