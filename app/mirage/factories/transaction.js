import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name: i => `Load from ${faker.name.firstName()}`,
  amount: i => faker.random.number({min: 1000, max: 1500})
});
