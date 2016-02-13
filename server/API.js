Router.route("/api/events/create", function() {
  console.log("getting the request")
  this.response.setHeader('Access-Control-Allow-Origin', '*');
  if (this.request.method === "OPTIONS") {
    this.response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    this.response.setHeader('Access-Control-Allow-Methods', 'POST, PUT, GET, DELETE, OPTIONS');
    this.response.end('Set OPTIONS.');
  } else {
    // If we've already passed through the OPTIONS request, we go ahead and call
    // our actual HTTP method.
    handleRequest(this, this.request.method);
  }

}, { where: 'server' });

function handleRequest(context, method) {
  console.log("handling the request")
  if (method === "POST") {
    Event.insert(context.request.body);
    sendResponse(context, 200);
  }
}

function sendResponse(context, statusCode) {
  console.log("sending response");
  context.response.setHeader('Content-Type', 'application/json');
  context.response.statusCode = statusCode;
  context.response.end(JSON.stringify("OK"));
}