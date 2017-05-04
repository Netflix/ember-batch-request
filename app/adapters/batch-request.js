import BatchRequestAdapter from 'ember-batch-request/adapters/batch-request';
import config from '../config/environment';

export default BatchRequestAdapter.extend({
  host: config.apiURL,
  namespace: config.apiNamespace || '',
  apiBatchUrl: config.apiBatchUrl || '/batch'
});
