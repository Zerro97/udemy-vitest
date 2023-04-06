import { it, describe, expect } from 'vitest';

import { validateNotEmpty } from './validation';

it('should throw error if empty text is given', () => {
    const input = '';
    const resultFn = () => {
        validateNotEmpty(input);
    }

    expect(resultFn).toThrow()
})

it('should throw error if text with only spaces is given', () => {
    const input = '    ';
    const resultFn = () => {
        validateNotEmpty(input);
    }

    expect(resultFn).toThrow()
})

it('should throw error with given erro message', () => {
    const input = '';
    const resultFn = () => {
        validateNotEmpty(input, 'invalid');
    }

    expect(resultFn).toThrow(/invalid/)
})