const mongoose = require('mongoose');

const dbConnect = () => {
    const user = 'araujomaria';
    const pass = 'O20LK3WvdpKgVANh';
    const dbName = 'Netflix';

    const uri = `mongodb+srv://${user}:${pass}@cluster0.z8buk7p.mongodb.net/${dbName}?retryWrites=true&w=majority`;

    mongoose
    .connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('conectado a mongodb'))
    .catch((e) => console.log('error de conexión', e));
};
module.exports = dbConnect;