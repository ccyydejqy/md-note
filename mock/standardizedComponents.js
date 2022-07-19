const { awaitTime } = require("./utils/utils");
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const standardizedComponents = {
  "GET /standardizedComponents/commonTable": async (req, res) => {
    await awaitTime(1000);
    const { current = 1, pageSize = 30 } = req.body;
    const dataSource = [];
    for (let i = (current - 1) * pageSize; i < current * pageSize; i++) {
      const obj = {
        idx: `${i}`,
        name: `name_${i}`,
        fix: `fix_${i}`
      };
      dataSource.push(obj);
    }
    return res.json({
      errno: "0",
      errmsg: "success",
      data: {
        list: dataSource,
        total: 30,
      },
    });
  },
  "GET /standardizedComponents/commonList": async (req, res) => {
    await awaitTime(1000);
    const { current = 1, pageSize = 5 } = req.body;
    const dataSource = [];
    for (let i = (current - 1) * pageSize; i < current * pageSize; i++) {
      const obj = {
        idx: `${i}`,
        name: `name_${i}`,
      };
      dataSource.push(obj);
    }
    return res.json({
      errno: "0",
      errmsg: "success",
      data: {
        list: dataSource,
        total: 30,
      },
    });
  },
};
module.exports = standardizedComponents;
