const express           = require("express");
const app               = express();
const cors              = require('cors');
const Routes            = require('./routes/routes');
const cookieParser      = require('cookie-parser')
require('dotenv').config();

app.use(cookieParser());
app.use(express.json());
app.use(cors({
  credentials:true,
  origin: process.env.CLIENT_URL
}));

app.use("/", Routes);

app.listen(process.env.HTTP_PORT, () => {
  console.log("Rodando na porta " + process.env.HTTP_PORT );
});

