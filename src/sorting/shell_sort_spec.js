include('util');
import shellSort from "./shell_sort";

var scrambledNumbers = [5,1,2,3,4];
describe('#shellSort', () => {
  it ('should sort numbers', () => {
    expect(shellSort(scrambledNumbers)).toEqual([1,2,3,4,5])
  })

  it('should sort 100 numbers', () => {
    expect(util.ascendingVerifier(
      shellSort(
        util.expand(20).map(n => (Math.random() * 100) | 0)
      )
    )).toBe(true)
  })

  it('should sort objects based on key', () => {
    // copy out of the other one
  })
})
