const http = require("http");
const handler = require("serve-handler");

const port = Number(process.env.PORT) || 3000;

const server = http.createServer((request, response) => {
  return handler(request, response, {
    public: ".",
    cleanUrls: false,
  });
});

server.listen(port, "0.0.0.0", () => {
  console.log(`QazTU portal: http://0.0.0.0:${port}`);
});
