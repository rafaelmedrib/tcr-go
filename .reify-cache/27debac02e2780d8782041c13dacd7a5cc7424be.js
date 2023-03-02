"use strict";var expect;module.link("chai",{expect(v){expect=v}},0);var secondFunction;module.link("../src/secondFunction.js",{secondFunction(v){secondFunction=v}},1);



describe('Second Function', function () {
    it('should return false', function () {
        expect(secondFunction()).to.eq(false);
    });
});

