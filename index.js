const fs = require('fs');
const https = require('https');
const app = require('./src/app');

const port = process.env.PORT || 8000;

// Carregar certificado autoassinado
const options = {
  key: fs.readFileSync('./src/certs/key.pem'),
  cert: fs.readFileSync('./src/certs/cert.pem')
};

// Rodar servidor HTTPS
https.createServer(options, app).listen(port, '0.0.0.0', () => {
  console.log(`Executando em https://0.0.0.0:${port}`);
});
