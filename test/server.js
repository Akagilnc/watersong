const Express = require('express');

const app = Express();

app.use(Express.static('./'));

app.listen(3000);