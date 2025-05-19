const db = require('../lib/dynamo');

module.exports.handler = async (event) => {
  try {
    const id = event.pathParameters.id;

    const result = await db.get({
      TableName: process.env.TABLE_NAME,
      Key: { id },
    }).promise();

    return {
      statusCode: 200,
      body: JSON.stringify(result.Item),
    };
  } catch (error) {
    console.error("Read Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal server error" }),
    };
  }
};