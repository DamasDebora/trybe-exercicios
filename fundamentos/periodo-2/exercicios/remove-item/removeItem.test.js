const removeItem = require('./removeItem')

describe('tests removeItem function', () => {
	it('should return an array removing the rigth item', () => {
		expect(removeItem([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
		expect(removeItem([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
		expect(removeItem([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
	})
})