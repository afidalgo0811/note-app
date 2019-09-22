const fs = require("fs");
const chalk = require("chalk");

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return []; // empty file
  }
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(note => note.title === title);
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log(chalk.green("New Note added!"));
  } else {
    console.log(chalk.blue("Note title already taken!"));
  }
};
const removeNote = title => {
  const notes = loadNotes();
  const notesToKeep = notes.filter(note => note.title !== title);
  if (notesToKeep.length === notes.length) {
    console.log(chalk.red("Note not found"));
  } else {
    console.log(chalk.green("Note removed"));
    saveNotes(notesToKeep);
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.bgMagenta("Your Notes"));
  notes.forEach(note => {
    console.log(chalk.yellow(note.title));
  });
};
const readNote = title => {
  const notes = loadNotes();
  const note = notes.find(note => note.title === title);
  if (note) {
    console.log(chalk.bgMagenta(note.title));
    console.log(chalk.yellow(note.body));
  } else {
    console.log(chalk.red(title + " not found!"));
  }
};
module.exports = {
 
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};
