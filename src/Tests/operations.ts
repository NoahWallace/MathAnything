import 'mocha';
import { expect } from 'chai';

import { _m } from '../Operations/Root'

describe('Operations',()=>{
	//Original Objects : Check to make sure there are no overwrites
	describe('Should Match Original Object',()=>{
		it('sqrrt', ()=> expect( _m.sqrt ( 9 )).to.equal( Math.sqrt(9)));
		it('cbrt',  ()=> expect( _m.cbrt ( 9 )).to.equal( Math.cbrt(9)));
		it('abs',   ()=> expect( _m.abs ( 9 )).to.equal( Math.abs(9)));
		it('acos',  ()=> expect( _m.acos (0.5 )).to.equal( Math.acos(0.5)));
		it('asin',  ()=> expect( _m.asin (0.5 )).to.equal( Math.asin(0.5)));
		it('atan',  ()=> expect( _m.atan (9 )).to.equal( Math.atan(9)));
		it('atan2', ()=> expect( _m.atan2 (9,8)).to.equal( Math.atan2(9,8)));
		it('ciel',  ()=> expect( _m.ceil (9.01 )).to.equal( Math.ceil(9.01)));
		it('cos',   ()=> expect( _m.cos (9.01 )).to.equal( Math.cos(9.01)));
		it('exp',   ()=> expect( _m.exp (9.01 )).to.equal( Math.exp(9.01)));
		it('floor', ()=> expect( _m.floor (9.01 )).to.equal( Math.floor(9.01)));
		it('log',   ()=> expect( _m.log ( 9.01 )).to.equal( Math.log(9.01)));
		it('max',   ()=> expect( _m.max (1,2,3,4,5 )).to.equal( Math.max(1,2,3,4,5)));
		it('max',   ()=> expect( _m.max (1,2,3,4,5 )).to.equal( Math.max(1,2,3,4,5)));
		it('pow',   ()=> expect( _m.pow (2,4 )).to.equal( Math.pow(2,4)));
		it('random',()=> expect( _m.random ( )).to.be.greaterThan( 0 ).and.lessThan(1));
		it('round', ()=> expect( _m.round (9.1232123 )).to.be.equal( Math.round(9.1232123)));
		it('sin',   ()=> expect( _m.sin (9.1232123 )).to.be.equal( Math.sin(9.1232123)));
		it('tan',   ()=> expect( _m.tan (9.1232123 )).to.be.equal( Math.tan(9.1232123)));
	})
	describe('sum',()=>{
		const test1=_m.sum(1,2)
		const test2=_m.sum([1,2],4,5,6)
		const test3=_m.sum(1,2,3,4)
		const test4=_m.sum("A",2,3,4)
		const test5=_m.sum([1,2],[3,4,5])
		const test6=_m.sum([1,2,-3,5,-4])
		it('should return 3',()=> expect(test1).to.equal(3))
		it('should return 18',()=> expect(test2).to.equal(18))
		it('should return 10',()=> expect(test3).to.equal(10))
		it('should return NaN',()=> expect(isNaN(test4)).to.equal(true))
		it('should return NaN',()=> expect(isNaN(test5)).to.equal(true))
		it('should return -1',()=> expect(test6).to.equal(1))
	})
	describe('add',()=>{
		const test1=_m.sum(1,2)
		const test2=_m.sum(4,5)
		const test3=_m.sum(-4,3)
		const test4=_m.sum(1230,0)
		const test5=_m.sum(-321,322)
		it('should return 3',()=> expect(test1).to.equal(3))
		it('should return 9',()=> expect(test2).to.equal(9))
		it('should return -1',()=> expect(test3).to.equal(-1))
		it('should return 1230',()=> expect(test4).to.equal(1230))
		it('should return 1',()=> expect(test5).to.equal(1))

	})
	describe('nthrt',()=>{
		const test1=_m.nthrt(9,3)
		const test2=_m.nthrt(1024,4)
		const test3=_m.nthrt(2048,6)
		const test4=_m.nthrt(11020,12)
		const test5=_m.nthrt(321,12)
		it('should return 2.0800838231',()=> expect(Number(test1.toFixed(10))).to.equal(2.0800838231))
		it('should return 5.6568542495',()=> expect(Number(test2.toFixed(10))).to.equal(5.6568542495))
		it('should return 3.5635948726',()=> expect(Number(test3.toFixed(10))).to.equal(3.5635948726))
		it('should return 2.1719432134',()=> expect(Number(test4.toFixed(10))).to.equal(2.1719432134))
		it('should return 1.6176159458',()=> expect(Number(test5.toFixed(10))).to.equal(1.6176159458))

	})
	describe('isPrime',()=>{
		const test1=_m.isPrime(2)
		const test2=_m.isPrime(3)
		const test3=_m.isPrime(5)
		const test4=_m.isPrime(10)
		const test5=_m.isPrime(12)
		it('should return true',()=> expect(test1).to.be.true )
		it('should return true',()=> expect(test2).to.be.true )
		it('should return true',()=> expect(test3).to.be.true )
		it('should return false',()=> expect(test4).to.be.false )
		it('should return false',()=> expect(test5).to.be.false )

	})
	describe('gcd',()=>{
		const test1=_m.gcd(20, 30, 15, 70, 40)
		const test2=_m.gcd(3,6,9,12)
		const test3=_m.gcd(8,16,32,64,128,256)
		const test4=_m.gcd(7,21,28,32)
		const test5=_m.gcd(12,24,36,38)
		it('should return 5',()=> expect(test1).to.equal(5))
		it('should return 3',()=> expect(test2).to.equal(3))
		it('should return 8',()=> expect(test3).to.equal(8))
		it('should return 1',()=> expect(test4).to.equal(1))
		it('should return 2',()=> expect(test5).to.equal(2))

	})

})