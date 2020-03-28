const generarteUniqueId = require('../../src/utils/generateUniqueId')

describe('Generate Unique Id', () => {
  it('should generate an unique ID', () => {
    const id = generarteUniqueId();
    expect(id).toHaveLength(8);
  })
})