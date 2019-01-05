const express = require('express');

const client = require("cloud-config-client");
const app = express()
const port = 3000


app.get('/message', (req, res) => res.send(config.message));



client.load({
    name : "a-bootiful-client"
}).then((config) => {
    console.log(config);
    global.config = config._properties;
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
});
 