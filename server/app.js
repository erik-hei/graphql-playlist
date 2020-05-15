const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema')

const app = express();

app.use('/graphql', graphqlHTTP({
    schema
}));

app.listen(4000, () => {
    console.log("🎻 You are listening to the smooth sounds of port 4000 🎻")
});

