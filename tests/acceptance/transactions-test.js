import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'demo2/tests/helpers/start-app';

module('Acceptance | transactions', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});


test('visiting / we\'re on the dashboard', function(assert) {
  visit('/');

  andThen(() => {
    assert.equal(find('.navbar-nav > li.active').text().trim(), 'Dashboard');
  });
});

test('Navbar should have links to dashboard and transactions', function(assert) {
  visit('/');

  andThen(() => {
    assert.equal(find('.navbar-nav > li:eq(0)').text().trim(), 'Dashboard');
    assert.equal(find('.navbar-nav > li:eq(1)').text().trim(), 'Transactions');
  });
});

test('visiting / and clicking transactions, will make it active', function(assert) {
  visit('/');

  click('.navbar-nav >li:eq(1)');

  andThen(() => {
    assert.equal(currentPath(), 'transactions');
    assert.equal(find('.navbar-nav > li.active').text().trim(), 'Transactions');
  });
});
