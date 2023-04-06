import { describe, expect, it } from "vitest";
import { validateStringNotEmpty, validateNumber } from './validation';

describe('validateStringNotEmpty()', () => {
    it('should throw an error if empty string is passed', () => {
        const input = '';
        const resultFn = () => {
            validateStringNotEmpty(input);
        }

        expect(resultFn).toThrow(/must not be empty/)
    })
})
describe('validateNumber()', () => {
    it('should throw an error if invalid number is passed', () => {
        const input = {};
        const resultFn = () => {
            validateNumber(input);
        }
    
        expect(resultFn).toThrow(/Invalid number input/)
    })
});