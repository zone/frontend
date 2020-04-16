const resolveSerial = require('./resolveSerial');

const delay = duration => new Promise(resolve => setTimeout(resolve, duration));
const multipleBy2 = value => value * 2;

describe('resolveSerial', () => {
  const values = [2, 1];
  const responseOrder = [];
  const promises = values.map((value, index) => () => {
    responseOrder.push(`${index}-start`);

    return delay(value * 50).then(() => {
      responseOrder.push(`${index}-end`);

      return multipleBy2(value);
    });
  });

  it('executes the next promise once the current has resolved', async () => {
    const returnedValues = await resolveSerial(promises);

    expect(returnedValues).toEqual([4, 2]);
    expect(responseOrder).toEqual(['0-start', '0-end', '1-start', '1-end']);
  });
});
