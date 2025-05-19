const db = require('../lib/dynamo');

module.exports.handler = async (event) => {
  const { name, price } = JSON.parse(event.body);

  const item = {
    id: Date.now().toString(),
    name,
    price,
    createdAt: new Date().toISOString(),
  };

  await db.put({
    TableName: process.env.TABLE_NAME,
    Item: item,
  }).promise();

  return {
    statusCode: 201,
    body: JSON.stringify(item),
  };
};