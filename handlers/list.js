const db = require('../lib/dynamo');

module.exports.handler = async () => {
  try {
    const result = await db.scan({ TableName: process.env.TABLE_NAME }).promise();
    return {
      statusCode: 200,
      body: JSON.stringify(result.Items),
    };
  } catch (error) {
    console.error("List Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal server error" }),
    };
  }
};