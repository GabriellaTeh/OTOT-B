function createServer() {
    require('dotenv').config();

    const bodyParser = require('body-parser');
    const express = require('express');
    const app = express();
    //const {use} = require('./routes/contacts');

    app.use(express.urlencoded({ extended: true}))
    app.use(express.json());

    const contactsRouter = require('./routes/contacts');

    app.use('/api/contacts', contactsRouter);
    return app
}

function startServer(app) {
    const mongoose = require('mongoose');
    mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});
    const db = mongoose.connection;
    db.on ('error', (error) => console.error(error));
    db.once('open', () => console.log('Connected to Database'));
    const PORT = process.env.PORT || 8080
    app.listen(PORT, () => console.log('Server started'));
}

module.exports = {
    createServer,
    startServer
}
