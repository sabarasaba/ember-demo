import { formatCurrency } from '../../../helpers/format-currency';
import { module, test } from 'qunit';

module('Unit | Helper | format currency');

// Replace this with your real tests.
test('it converts from pence to pounds correctly', function(assert) {
  var result = formatCurrency([4200], {
    to: 'pound'
  });

  assert.equal(result, '£42.00');
});

test('it converts from pence to pounds correctly', function(assert) {
  var result = formatCurrency([42.00], {
    to: 'pence'
  });

  assert.equal(result, '4200');
});
