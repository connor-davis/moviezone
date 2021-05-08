const { generateKeyPair } = require("crypto");
const fs = require("fs");

generateKeyPair(
  "rsa",
  {
    modulusLength: 4096,
    publicKeyEncoding: {
      type: "spki",
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs8",
      format: "pem",
      cipher: "aes-256-cbc",
      passphrase: "top secret",
    },
  },
  (error, public, private) => {
    if (error) return console.log(error);

    fs.writeFileSync("certs/publicKey.pem", public);
    fs.writeFileSync("certs/privateKey.pem", private);
  }
);
