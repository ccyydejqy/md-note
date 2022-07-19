// https://github.com/jaywcjlove/mocker-api/blob/HEAD/README-zh.md#%E4%BD%BF%E7%94%A8
const basicFe = require('./basicFe');
const standardizedComponents = require('./standardizedComponents');

const proxy = {
  ...basicFe,
  ...standardizedComponents,
};
module.exports = proxy;