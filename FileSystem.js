const fs = require("fs");

// --- Reading Files
const readFile = (file) => {
  fs.readFile(file, (err, data) => {
    if (err) console.log(err.message);

    console.log(data.toString());
  });
};

// --- Writing Files
const writeFile = (file, content) => {
  if (!fs.existsSync(file)) {
    fs.writeFile(file, content, () => {
      console.log("file created");
    });
  } else {
    fs.writeFile(file, content, () => {
      console.log("file edited");
    });
  }
};

// --- Directories
const makeDirectory = (folder) => {
  if (!fs.existsSync(folder)) {
    fs.mkdir(folder, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Folder created");
      }
    });
  } else {
    fs.rmdir(folder, (err) => {
      if (err) console.log(err);
      console.log("Folder deleted");
    });
  }
};

// --- Delete Files
const deleteFile = (file) => {
  if (fs.existsSync(file)) {
    fs.unlink(file, (err) => {
      console.log("File deleted");
    });
  }
};
