const db = require('../lib/dynamo');

module.exports.handler = async (event) => {
  try {
    const id = event.pathParameters.id;

    await db.delete({
      TableName: process.env.TABLE_NAME,
      Key: { id },
    }).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Item deleted successfully" }),
    };
  } catch (error) {
    console.error("Delete Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal server error" }),
    };
  }
};