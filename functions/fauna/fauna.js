exports.handler = async (event, context) => {
  try {
    const subject = event.queryStringParameters.name || 'tout le monde !'
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Bonjour ${subject}` }),
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
