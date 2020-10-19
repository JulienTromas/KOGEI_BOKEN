const express = require ("express");

const app = express();

// server static files
app.use(express.static("./"));

// app.get("/", (_,res)=> {
//     res.send("Hello World");
// })

app.listen(4000, () => {
    console.log("Listening @ 4000");
})
