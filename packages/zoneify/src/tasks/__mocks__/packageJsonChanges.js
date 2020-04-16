exports.add = jest.fn(reducer => reducer).mockName('packageJsonChange.add');

exports.run = jest.fn().mockName('packageJsonChange.run');
