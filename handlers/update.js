const db = require('../lib/dynamo');

module.exports.handler = async (event) => {
  try {
    const id = event.pathParameters.id;
    const { name, price } = JSON.parse(event.body);

    await db.update({
      TableName: process.env.TABLE_NAME,
      Key: { id },
      UpdateExpression: "set #name = :name, #price = :price",
      ExpressionAttributeNames: {
        "#name": "name",
        "#price": "price"
      },
      ExpressionAttributeValues: {
        ":name": name,
        ":price": price
      },
    }).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Item updated successfully" }),
    };
  } catch (error) {
    console.error("Update Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal server error" }),
    };
  }
};