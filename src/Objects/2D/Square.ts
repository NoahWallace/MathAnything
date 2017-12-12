export class Square {
	constructor ( h?: number, w?: number ) {
		return this.setDimensions( h, w );
	}

	height;
	width;
	area;
	perimeter;
	diagonal;
	getArea       = ( h: number, w: number ) => h * w;
	getDiagonal   = ( h: number, w: number ) => Math.sqrt( Math.pow( h, 2 ) * Math.pow( w, 2 ) );
	getPerimeter  = ( h: number, w: number ) => (h * 2) | w * 2;
	setDimensions = ( h: number, w: number ) => {

		if ( h && !w ) {
			w = h;
		}
		if ( h === null && w ) {
			h = w;
		}
		if ( h && w ) {
			this.height    = h;
			this.width     = w;
			this.area      = this.getArea( h, w );
			this.diagonal  = this.getDiagonal( h, w );
			this.perimeter = this.getPerimeter( h, w );
		}
		return this;
	};

}