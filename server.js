const express = require('express');
const server = express();
server.use(express.static('public'));

server.listen(8080, () => console.log('app listening on port 8080!'));
