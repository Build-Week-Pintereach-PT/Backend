const chalk = require('chalk');

const server = require('./api/server');

const port = process.env.PORT || 4321;

server.listen(port, () => {
  console.log(`Server is running on port ${chalk.yellowBright(port)}...`);
});
