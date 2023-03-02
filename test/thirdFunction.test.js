import { expect } from "chai";

import { thirdFunction } from "../src/thirdFunction.js";

describe('Third Function', function () {
    it('should return "TEST"', function () {
        expect(thirdFunction()).to.eq('TEST');
    });
});
