import { Meteor } from 'meteor/meteor';
import { assert } from 'chai';

if (Meteor.isServer) {
  describe('Placeholder Test Suite', function () {
    it('compares that 1 equals 1', function () {
      assert.strictEqual(1, 1, 'It was expected that 1 === 1');
    });
  });
}
