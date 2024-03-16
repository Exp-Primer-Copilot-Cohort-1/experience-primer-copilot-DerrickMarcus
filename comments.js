// Create web server

var http = require('http');

var server = http.createServer(function (req, res) {
  res.end('Hello World');
}
); 
server.listen(3000, function () {
  console.log('Server is listening on port 3000');
}
);
// Path: server.js
// Compare this snippet from member.test.js:
// const { skillsMember } = require('./member');
//
// test('skillsMember should return an array of skills', () => {
//   // Arrange

//   // Act
//   const result = skillsMember();
