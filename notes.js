const fs = require('fs');

function getNotes(notesPath){
  return fs.readFileSync(notesPath,'utf8')
};

module.exports = getNotes;