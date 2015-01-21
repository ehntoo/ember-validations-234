import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:wut', 'WutController', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
  needs: ['ember-validations@validator:local/presence']
});

// Replace this with your real tests.
test('it exists', function() {
  var controller = this.subject();
  ok(controller);
});
