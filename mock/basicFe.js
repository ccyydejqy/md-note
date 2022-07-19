const { random } = require('lodash');

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const basicFe = {
  'POST /commonTable': (req, res) => {
    setTimeout(() => {
      const { cur_page = 1, page_count = 10 } = req.body;
      const dataSource = [];
      for (let i = (cur_page - 1) * page_count; i < cur_page * page_count; i++) {
        const obj = {
          name: `${i}`,
          id: `${i}`,
          owner: `${i}`,
          status: `${i}`,
          productLine: `${i}`,
          role: `${i}`,
          content: `${i}`,
        };
        dataSource.push(obj);
      }
      if (getRandomInt(100) > 0) {
        if (getRandomInt(100) > 0) {
          return res.json({
            errno: '0',
            errmsg: 'success',
            data: dataSource,
            total: 40,
          });
        }
        return res.json({
          errno: '0',
          errmsg: 'success',
          data: [],
        });
      }

      return res.status(403).json({
        status: 'error',
        code: 403,
      });
    }, 300);
  },
};
module.exports = basicFe;