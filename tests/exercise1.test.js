
import add2numbers from '../dist/exercise1'

describe("exercise 1", () => {
  let a = 1;
  let b = 3;

    test('returns 4', () => {
        expect(add2numbers(a,b)).toBe(4);
    })
})