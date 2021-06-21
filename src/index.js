const express = require("express");
const nodemailer = require("nodemailer");
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.post("/send", (req, res) => {
    const info = req.body;
    console.log(info);

    var transporter = nodemailer.createTransport({
        service: "outlook",
        auth: {
            user: "thiendongte@outlook.com",
            pass: "thien123456789",
        },
    });

    var mailOptions = {
        from: "thiendongte@outlook.com",
        to: "nguyenducthien467@gmail.com",
        subject: "Sending Email using Node.js",
        text: `${JSON.stringify(info)}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });
    res.send();
});

app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});
