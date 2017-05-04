/* jshint node: true */
'use strict';

const writeFile = require('broccoli-file-creator');
const { version } = require('./package.json');

module.exports = {
  name: 'ember-batch-request',
  
  included() {
    this._super.included.apply(this, ...arguments);
    this._ensureThisImport();
    
    this.import('vendor/ember-batch-request/register-version.js');
  },
  
  treeForVendor() {
    const content = `Ember.libraries.register('Ember CLI Batch Request', '${version}');`;
    
    return writeFile('ember-batch-request/register-version.js', content);
  },
  
  _ensureThisImport() {
    if (!this.import) {
      this._findHost = function findHostShim() {
        let current = this;
        let app;
        
        do {
          app = current.app || app;
        } while (current.parent.parent && (current = current.parent));
        
        return app;
      };
      
      this.import = function importShim(asset, options) {
        const app = this._findHost();
        
        app.import(asset, options);
      };
    }
  }
};