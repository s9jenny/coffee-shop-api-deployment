module.exports.handler = async () => {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "✅ Coffee Shop API deployed successfully!",
      }),
    };
  };
  