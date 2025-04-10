const fs = require("fs");

// ReadStream
const readStream = fs.createReadStream("./readStreamText.txt");
// WriteStream
const writeStream = fs.createWriteStream("./writeStreamText.txt");

readStream.on("data", (chunk) => {
  console.log("\n\n--------- NEW CHUNK ---------");
  console.log(chunk);
  //   writeStream.write(chunk);
});

readStream.pipe(writeStream);
