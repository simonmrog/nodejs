const dotenv = require('dotenv');
const server = require('./server');

dotenv.config();

const port = process.env.PORT || 5500;

server.listen(port, console.log(`Server running on port ${port}`));
