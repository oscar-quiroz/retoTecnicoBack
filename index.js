const express = require("express");
const cors = require("cors");
const port = 3500;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/images", require("./routes/images.routes"));

app.listen(port, () => {
    console.log("Servidor corriendo en puerto:" + port);
});