const fetch = require("node-fetch");

exports.handler = async function(event, context) {
  const code = event.queryStringParameters.code;
  const redirect_uri = "https://ba12automotive.netlify.app/admin/";

  const response = await fetch("https://ba12admin.uk.auth0.com/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      grant_type: "authorization_code",
      client_id: "xruGFyjlRFGEEsuKkUFKQowuZQyrJrXs",
      client_secret: "xIbwtCAcQn_N5-RXyZetc4j8d1QrNJNYflOQ0BNAhEFfDF2FM3D6g5v8DZ0BNTZ2",
      code,
      redirect_uri
    })
  });

  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
};