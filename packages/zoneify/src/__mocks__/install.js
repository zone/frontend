exports.addDependency = jest.fn().mockName('addDependency')

exports.addFile = jest.fn().mockName('addFile')

exports.addPackageJsonChange = jest
  .fn(reducer => reducer)
  .mockName('addPackageJsonChange')
