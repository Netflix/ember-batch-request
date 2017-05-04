import DS from 'ember-data';

const { Store } = DS;

export default Store.extend({

  batchCreate(arrayOfObjects, options) {
    return this.adapterFor('batch-request').batchCreate(arrayOfObjects, options);
  },
  
  batchUpdate(arrayOfObjects, options) {
    return this.adapterFor('batch-request').batchUpdate(arrayOfObjects, options);
  },
  
  batchDelete(arrayOfObjects) {
    return this.adapterFor('batch-request').batchDelete(arrayOfObjects);
  }
});
