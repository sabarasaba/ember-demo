import Ember from 'ember';

export function formatCurrency(params, options) {
  let amount = params[0];

  if (options.to === 'pound') {
    amount /= 100;

    return `£${amount.toFixed(2)}`;
  } else {
    amount *= 100;
  }

  return amount;
}

export default Ember.Helper.helper(formatCurrency);
