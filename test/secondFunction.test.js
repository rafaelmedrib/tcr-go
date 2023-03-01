import { expect } from "chai";

import { secondFunction } from "../src/secondFunction.js";

describe('Second Function', function () {
    it('should return false', function () {
        expect(secondFunction()).to.eq(false);
    });
});

