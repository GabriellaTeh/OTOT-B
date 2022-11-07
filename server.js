require('dotenv').config();

const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { use } = require('./routes/contacts');

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});
const db = mongoose.connection;
db.on ('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.urlencoded({ extended: true}))
app.use(express.json());

const contactsRouter = require('./routes/contacts');

app.use('/api/contacts', contactsRouter);

app.listen(8080, () => console.log('Server started'));