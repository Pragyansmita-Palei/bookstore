const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const connectDb = require("./config/db");
//rest object
const app = express();
//dotenv configuration
dotenv.config();
//db connection
connectDb();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).send("<h1>welcome to bookstore </h1>");
});
app.use("/api/V1/book",require("./routes/bookRoute"));
app.use("/api/V1/user",require("./routes/userRoute"));


//port
const PORT = process.env.PORT || 5000;

//listen  
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
