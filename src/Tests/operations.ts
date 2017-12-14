import 'mocha';
import { expect } from 'chai';

import { MA } from '../Operations/Root'

describe('Operations',()=>{
	//Original Objects : Check to make sure there are no overwrites

	describe('sum',()=>{
		const test1=MA.sum(1,2)
		const test2=MA.sum([ 1, 2],4,5,6)
		const test3=MA.sum(1,2,3,4)
		const test4=MA.sum("A",2,3,4)
		const test5=MA.sum([ 1, 2],[ 3, 4, 5])
		const test6=MA.sum([ 1, 2, -3, 5, -4])
		it('should return 3',()=> expect(test1).to.equal(3))
		it('should return 18',()=> expect(test2).to.equal(18))
		it('should return 10',()=> expect(test3).to.equal(10))
		it('should return NaN',()=> expect(isNaN(test4)).to.equal(true))
		it('should return NaN',()=> expect(isNaN(test5)).to.equal(true))
		it('should return -1',()=> expect(test6).to.equal(1))
	})
	describe('add',()=>{
		const test1=MA.sum(1,2)
		const test2=MA.sum(4,5)
		const test3=MA.sum(-4,3)
		const test4=MA.sum(1230,0)
		const test5=MA.sum(-321,322)
		it('should return 3',()=> expect(test1).to.equal(3))
		it('should return 9',()=> expect(test2).to.equal(9))
		it('should return -1',()=> expect(test3).to.equal(-1))
		it('should return 1230',()=> expect(test4).to.equal(1230))
		it('should return 1',()=> expect(test5).to.equal(1))

	})
	describe('nthrt',()=>{
		const test1=MA.nthrt(9,3)
		const test2=MA.nthrt(1024,4)
		const test3=MA.nthrt(2048,6)
		const test4=MA.nthrt(11020,12)
		const test5=MA.nthrt(321,12)
		it('should return 2.0800838231',()=> expect(Number(test1.toFixed(10))).to.equal(2.0800838231))
		it('should return 5.6568542495',()=> expect(Number(test2.toFixed(10))).to.equal(5.6568542495))
		it('should return 3.5635948726',()=> expect(Number(test3.toFixed(10))).to.equal(3.5635948726))
		it('should return 2.1719432134',()=> expect(Number(test4.toFixed(10))).to.equal(2.1719432134))
		it('should return 1.6176159458',()=> expect(Number(test5.toFixed(10))).to.equal(1.6176159458))

	})
	describe('isPrime',()=>{
		const test1=MA.isPrime(2)
		const test2=MA.isPrime(3)
		const test3=MA.isPrime(5)
		const test4=MA.isPrime(10)
		const test5=MA.isPrime(12)
		it('should return true',()=> expect(test1).to.be.true )
		it('should return true',()=> expect(test2).to.be.true )
		it('should return true',()=> expect(test3).to.be.true )
		it('should return false',()=> expect(test4).to.be.false )
		it('should return false',()=> expect(test5).to.be.false )

	})
	describe('gcd',()=>{
		const test1=MA.gcd(20, 30, 15, 70, 40)
		const test2=MA.gcd(3,6,9,12)
		const test3=MA.gcd(8,16,32,64,128,256)
		const test4=MA.gcd(7,21,28,32)
		const test5=MA.gcd(12,24,36,38)
		it('should return 5',()=> expect(test1).to.equal(5))
		it('should return 3',()=> expect(test2).to.equal(3))
		it('should return 8',()=> expect(test3).to.equal(8))
		it('should return 1',()=> expect(test4).to.equal(1))
		it('should return 2',()=> expect(test5).to.equal(2))

	})

})