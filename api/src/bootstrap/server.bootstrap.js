const http = require('http')
const https = require('https');
const fs = require('fs');
const pem = require("pem");
/* app setup */
const PORT = process.env.PORT || 8080;
const hostname = "127.0.0.1";

const privateKey = fs.readFileSync('/etc/letsencrypt/live/mejorobera.com.ar/privkey.pem','utf8')
const certificate = fs.readFileSync('/etc/letsencrypt/live/mejorobera.com.ar/cert.pem','utf8')
const ca = fs.readFileSync('/etc/letsencrypt/live/mejorobera.com.ar/chain.pem','utf8')
const credentials = {
    key:privateKey,
    cert:certificate,
    ca:ca
}
// const pfx = fs.readFileSync("src/certificate/mejorobera.com.ar.pfx");
// pem.readPkcs12(pfx, { p12Password: "dattatec" }, (err, cert) => {
//     console.log(cert);
//});
// const options = {
//     pfx: fs.readFileSync( 'src/certificate/mejorobera.com.ar.pfx'),
//     passphrase: ''
//   };
//  console.log(pfx)
// ice factory
const serverFunction = () => {
    async function initialize(app) {
        const promiseServer = new Promise((resolve, reject) => {
        server = http.createServer( app);
        const httpsServer = https.createServer(credentials,app)
        httpsServer.listen(4001, ()=>{
            console.log('HTTPS Server running on port 4001')
        })
        server
            .listen(PORT)
            .on("listening", () => {
            console.log(
                `Mejor obera server is running at hosts: ${
                server.address().address
                } on port: ${server.address().port}`
            );
            resolve("succesful");
            })
            .on("error", (err) => {
            console.log(err);
            reject(err);
            });
        });
        await promiseServer;
    }
    
    return Object.freeze({ initialize });
};

module.exports = serverFunction;