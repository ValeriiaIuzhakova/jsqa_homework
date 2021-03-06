import { sumScores } from "../src/homework/homework7";
import { describe, it, expect } from "@jest/globals";


describe('scores', () => {
    it('returns sum of homework scores', () => {

        const scores = {
            Anna: 10,
            Olga: 1,
            Ivan: 5,
        };

        expect(sumScores(scores)).toBe(16);
    });

    it('returns sum of homework scores with negative numbers', () => {

        const scores = {
            Anna: 10,
            Olga: -1,
            Ivan: -5,
        };

        expect(sumScores(scores)).toBe(4);
    });

    it('returns 0 when scores are empty', () => {

        const scores = {};

        expect(sumScores(scores)).toBe(0);
    });

    it('returns NaN when some scores are not numeric', () => {

        const scores = {
            Anna: 10,
            Olga: "one",
            Ivan: 5,
        };

        expect(sumScores(scores)).toBe(NaN);
    });

    it('returns NaN when some scores are empty', () => {

        const scores = {
            Anna: 10,
            Olga: " ",
            Ivan: 5,
        };

        expect(sumScores(scores)).toBe(NaN);
    });

});
