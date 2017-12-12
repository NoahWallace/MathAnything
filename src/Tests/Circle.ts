import 'mocha';
import { expect } from 'chai';

import { Circle } from '../Objects/2D'

describe("2D",()=>{
	describe("Circle Helpers",()=>{
		describe('getArea',()=>{
			let test1= Circle.getArea.fromDiameter(10);
			let test2= Circle.getArea.fromRadius(5);
			let test3= Circle.getArea.fromCircumference(200);
			it('should equal 78.53981633974483 ',()=>{expect(test1).to.equal(78.53981633974483)});
			it('should equal 78.53981633974483 ',()=>{expect(test2).to.equal(78.53981633974483)});
			it('should equal 3183.098861837907 ',()=>{expect(test3).to.equal(3183.098861837907)});
		})
		describe('getDiameter',()=>{
			let test1= Circle.getDiameter.fromArea(78.53981633974483);
			let test2= Circle.getDiameter.fromRadius(5);
			let test3= Circle.getDiameter.fromCircumference(31.41592653589793);
			it('should equal 10 ',()=>{expect(test1).to.equal(10)});
			it('should equal 10 ',()=>{expect(test2).to.equal(10)});
			it('should equal 10 ',()=>{expect(test3).to.equal(10)});
		})
		describe('getCircumference',()=>{
			let test1= Circle.getCircumference.fromArea(78.53981633974483);
			let test2= Circle.getCircumference.fromRadius(5);
			let test3= Circle.getCircumference.fromDiameter(10);

			it('should equal 31.41592653589793 ',()=>{expect(test1).to.equal(31.41592653589793)});
			it('should equal 31.41592653589793 ',()=>{expect(test2).to.equal(31.41592653589793)});
			it('should equal 31.41592653589793',()=>{expect(test3).to.equal(31.41592653589793)});
		})
		describe('getRadius',()=>{
			let test1= Circle.getRadius.fromArea(78.53981633974483);
			let test2= Circle.getRadius.fromCircumference(31.41592653589793);
			let test3= Circle.getRadius.fromDiameter(10);

			it('should equal 5 ',()=>{expect(test1).to.equal(5)});
			it('should equal 5 ',()=>{expect(test2).to.equal(5)});
			it('should equal 5',()=>{expect(test3).to.equal(5)});
		})
	})
	describe("Circles",()=>{
		describe("get property from property",()=>{
			let test1 = new Circle(10,'diam');
			let test2 = new Circle(5,'rad');
			let test3 = new Circle(31.41592653589793,'circ');
			let test4 = new Circle(78.53981633974483,'area');
			it('diam should have all Circle specs',()=>{
				expect(test1).to.haveOwnProperty("diameter").that.equals(10)
				expect(test1).to.haveOwnProperty("radius").that.equals(5)
				expect(test1).to.haveOwnProperty("area").that.equals(78.53981633974483)
				expect(test1).to.haveOwnProperty("circumference").that.equals(31.41592653589793 )
			});
			it('rad should have all Circle specs',()=>{
				expect(test2).to.haveOwnProperty("diameter").that.equals(10)
				expect(test2).to.haveOwnProperty("radius").that.equals(5)
				expect(test2).to.haveOwnProperty("area").that.equals(78.53981633974483)
				expect(test2).to.haveOwnProperty("circumference").that.equals(31.41592653589793 )
			});
			it('rad should have all Circle specs',()=>{
				expect(test3).to.haveOwnProperty("diameter").that.equals(10)
				expect(test3).to.haveOwnProperty("radius").that.equals(5)
				expect(test3).to.haveOwnProperty("area").that.equals(78.53981633974483)
				expect(test3).to.haveOwnProperty("circumference").that.equals(31.41592653589793 )
			});
			it('rad should have all Circle specs',()=>{
				expect(test4).to.haveOwnProperty("diameter").that.equals(10)
				expect(test4).to.haveOwnProperty("radius").that.equals(5)
				expect(test4).to.haveOwnProperty("area").that.equals(78.53981633974483)
				expect(test4).to.haveOwnProperty("circumference").that.equals(31.41592653589793 )
			});
		});
		describe("Create a New Circle and modify",()=>{
			let circ1 = new Circle(10,'diam');
			circ1.setDimensions.fromRadius(10);
			it('change dimentions should have all Circle specs',()=>{
				expect(circ1).to.haveOwnProperty("diameter").that.equals(20);
				expect(circ1).to.haveOwnProperty("radius").that.equals(10);
				expect(circ1).to.haveOwnProperty("area").that.equals(314.1592653589793);
				expect(circ1).to.haveOwnProperty("circumference").that.equals(62.83185307179586 )
			});
		})


	})
})