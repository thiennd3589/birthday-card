const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.post("/send", (req, res) => {
    const info = req.body;
    console.log(info)
    res.send();
});

app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});
