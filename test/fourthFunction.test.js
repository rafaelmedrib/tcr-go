import { expect } from "chai";

import { fourthFunction } from "../src/fourthFunction.js";

describe('Fourth Function', function () {
    it('should return the sum', function () {
        const nums = [ 1, 5, 10, 100 ];
        const expected = 116;

        expect(fourthFunction(...nums)).to.eq(expected);
    });
});
