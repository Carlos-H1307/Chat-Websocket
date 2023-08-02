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
  origin: 'http://localhost:5173'
}));

app.use("/", Routes);

app.listen(process.env.HTTP_PORT, () => {
  console.log("Rodando na porta " + process.env.HTTP_PORT );
});

