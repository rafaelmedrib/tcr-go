import { expect } from "chai";

import { firstFunction } from "../src/firstFunction.js";

describe('First Function', function () {
    it('should return true', function () {
        expect(firstFunction()).to.eq(true);
    });
});
