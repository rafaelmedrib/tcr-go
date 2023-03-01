"use strict";var expect;module.link("chai",{expect(v){expect=v}},0);var firstFunction;module.link("../src/firstFunction.js",{firstFunction(v){firstFunction=v}},1);



describe('First Function', function () {
    it('should return true', function () {
        expect(firstFunction()).to.eq(true);
    });
});
