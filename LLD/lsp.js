class ReadOnlyFile {
  read() {
    return "Reading from read-only file";
  }
}

class WriteOnlyFile {
  write(data) {
    console.log(`Writing to write-only file: ${data}`);
  }
}

class ReadWriteFile {
  read() {
    return "Reading from read-write file";
  }

  write(data) {
    console.log(`Writing to read-write file: ${data}`);
  }
}
function loadFile(file) {
  if (typeof file.read === 'function') {
    console.log(file.read(), typeof file.read);
  } else {
    console.log("❌ This file is not readable");
  }
}

function saveFile(file, data) {
  if (typeof file.write === 'function') {
    file.write(data);
  } else {
    console.log("❌ This file is not writable");
  }
}
const roFile = new ReadOnlyFile();
const woFile = new WriteOnlyFile();
const rwFile = new ReadWriteFile();

loadFile(roFile);  // ✅ OK
saveFile(roFile, "Test"); // ❌ Not writable

loadFile(woFile);  // ❌ Not readable
saveFile(woFile, "Test"); // ✅ OK

loadFile(rwFile);  // ✅ OK
saveFile(rwFile, "Test"); // ✅ OK
