const assert = require('assert');

describe('String operations', () => {
  it('should concatenate strings', () => {
    const str = 'Hello, ' + 'world!';
    assert.strictEqual(str, 'Hello, world!');
  });
});
