module.exports = {
  normalizeEntityName: function () {},

  afterInstall: function () {
    return this.addBowerPackageToProject('ember-batch-request');
  }
};
