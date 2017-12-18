import 'mocha';
import { expect } from 'chai';

import { Gram,Kilogram,Megaton,Tonne,Gigaton,Microgram,Milligram,Nanogram,Picogram } from '../Conversions/Mass/Grams';
import { MA } from "../Operations/Root";



describe("Conversions",()=> {
	describe("Mass", () => {

		describe('Grams', () => {
			let Pico  = 1000000000000;
			let Nano  = 1000000000;
			let Micro = 1000000;
			let Milli = 1000;
			let Gr    = 1;
			let Kilo  = 0.001;
			let _Tonne  = 0.000001;
			let Mega    = 0.000000000001;
			let Giga    = 0.000000000000001;
			let oz      =0.03527396583786957;
			describe('Grams -- Simple',()=>{
				let test1 = Gram(1).toPicogram();
				let test2 = Gram(1).toNanogram();
				let test3 = Gram(1).toMicrogram();
				let test4 = Gram(1).toMilligram();
				let test5 = Gram(1).toGram();
				let test6 = Gram(1).toKilogram();
				let test7 = Gram(1).toTonne();
				let test8 = Gram(1).toMegaton();
				let test9 = Gram(1).toGigaton();
				let test10 = Gram(1).toOunce();

				it(`should equal ${Pico} --test1`,()=>{expect(test1.value).to.equal(Pico)})
				it(`should equal ${Nano} --test2`,()=>{expect(test2.value).to.equal(Nano)})
				it(`should equal ${Micro} --test3`,()=>{expect(test3.value).to.equal(Micro)})
				it(`should equal ${Milli} --test4`,()=>{expect(parseInt(test4.value)).to.equal(Milli)})
				it(`should equal ${Gr} --test5`,()=>{expect(test5.value).to.equal(Gr)})
				it(`should equal ${Kilo} --test6`,()=>{expect(test6.value).to.equal(Kilo)})
				it(`should equal ${_Tonne} --test7`,()=>{expect(test7.value).to.equal(_Tonne)})
				it(`should equal ${Mega} --test8`,()=>{expect(test8.value).to.equal(Mega)})
				it(`should equal ${Giga} --test9`,()=>{expect(test9.value).to.equal(Giga)})
				it(`should equal ${oz} --test10`,()=>{expect(test10.value).to.equal(oz)})

			})
			describe('Grams - Complex', () => {

				let test1 = Gram(1).toPicogram().toKilogram();
				let test2 = Gram(1).toNanogram().toKilogram();
				let test3 = Gram(1).toMicrogram().toKilogram();
				let test4 = Gram(1).toMilligram().toKilogram();
				let test5 = Gram(1).toGram().toKilogram();
				let test6 = Gram(1).toKilogram();
				let test7 = Gram(1).toTonne().toKilogram();
				let test8 = Gram(1).toMegaton().toKilogram();
				let test9 = Gram(1).toGigaton().toKilogram();

				it(`should equal ${Kilo} --test1`,()=>{expect(test1.value).to.equal(Kilo)})
				it(`should equal ${Kilo} --test2`,()=>{expect(test2.value).to.equal(Kilo)})
				it(`should equal ${Kilo} --test3`,()=>{expect(test3.value).to.equal(Kilo)})
				it(`should equal ${Kilo} --test4`,()=>{expect(test4.value).to.equal(Kilo)})
				it(`should equal ${Kilo} --test5`,()=>{expect(test5.value).to.equal(Kilo)})
				it(`should equal ${Kilo} --test6`,()=>{expect(test6.value).to.equal(Kilo)})
				it(`should equal ${Kilo} --test7`,()=>{expect(test7.value).to.equal(Kilo)})
				it(`should equal ${Kilo} --test8`,()=>{expect(test8.value).to.equal(Kilo)})
				it(`should equal ${Kilo} --test9`,()=>{expect(test9.value).to.equal(Kilo)})
			})
		})
	})
})