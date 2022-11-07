const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');

const upload = multer();
const app = express();
app.use(cors());
app.use(express.json());

const foodRouter = require('./Routers/foodRouter');

app.use('/food', upload.none(), foodRouter);

const port = process.env.PORT || 8000;

mongoose
  .connect(
    'mongodb+srv://admin:admin@nutritionsystem.rdmpf.mongodb.net/final?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log('connecting to DB ...');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(error => {
    console.log(error + '');
  });
