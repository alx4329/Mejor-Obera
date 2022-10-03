const app = require("./app");
const server = require("./bootstrap/server.bootstrap");
const database = require("./bootstrap/database.bootstrap");
// var transporter = require('./mailer/mailer');
const start = async () => {
  const appServer = server();
  const appDatabase = database();

  try {
    appServer.initialize(app);
    appDatabase
      .initialize()
    //   .then(()=>{
    //     transporter.verify((err, success) => {
    //       err
    //         ? console.log(err)
    //         : console.log(`=== Server is ready to take messages: ${success} ===`);
    //      });
    //   })
      .catch((reason) => {
        console.log("couldn't connect with db because of " + reason);
      });
  } catch (e) {
    //TODO: Catch error and disconnect db
    // appDatabase.disconnect();
    console.log("there was an error");
    console.log(e);
  }
};

start();