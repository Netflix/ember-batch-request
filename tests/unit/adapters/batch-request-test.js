import DS from 'ember-data';
import Ember from 'ember';
import { test, moduleFor } from 'ember-qunit';
import BatchRequestAdapter from 'ember-batch-request/adapters/batch-request';

const { Model, attr } = DS;

const {
  getOwner,
  run
} = Ember;

moduleFor('adapter:batch-request', 'Unit | Adapters | batch request', {
  needs: [
    'service:ajax',
    'service:store'
  ],
  
  subject() {
    const fauxAdapter = BatchRequestAdapter.extend({});
    const myModel = Model.extend({
      name: attr('string')
    });
    
    this.register('test-container:faux-adapter', fauxAdapter);
    this.register('model:faux-model', myModel);
    
    return getOwner(this).lookup('test-container:faux-adapter');
  }
});

test('changes the state to inflight', function (assert) {
  const subject = this.subject();
  let item = null;
  run.next(()=>{
    item = subject.get('store').createRecord( 'faux-model', {id:1, name: "Blah ${i}"});
    subject._changeRootStateToInflight(item);
    assert.equal(item.get('currentState.stateName'), 'root.loaded.created.inFlight', 'Model status was set to inflight');
    item.transitionTo('uncommitted');
  });
});

test('cleans up inflight models', function (assert) {
  const subject = this.subject();
  let item = null;
  run.next(()=>{
    item = subject.get('store').createRecord( 'faux-model', {id:1, name: "Blah ${i}"});
    subject._changeRootStateToInflight(item);
    subject._cleanUpInflightModels([item]);
    assert.equal(item.get('isDeleted') , true, 'Inflight models were cleaned up');
  });
});