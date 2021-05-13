const { connect } = require('mongoose');

const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
  poolSize: 10,
  bufferMaxEntries: 0,
};

const dbConnectionURL = process.env.DB_URL;
async function dbConnect() {
  await connect(dbConnectionURL, options, (err) => {
    if (err) return console.log(err);

    console.log('Connection to databse is successful %s', dbConnectionURL);
  });
}
module.exports = { dbConnect };
