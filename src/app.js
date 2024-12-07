const express = require("express");
const app = express()

let port = 8080;
let url = "https://xnyxirz.zapto.org";

app.get("/", (req, res) => {
    res.redirect(url);
});

app.listen(port, () => {
    console.log("[APP] - Running in the port: " + port);
})