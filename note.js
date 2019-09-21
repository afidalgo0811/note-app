const fs = require("fs");
const chalk = require("chalk");

const getNotes = function () {
    return "my notes";
};

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    } catch (e) {
        return []; // empty file
    }
};

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON);
};
const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title;
    });
    if (duplicateNotes.length === 0) {
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
const removeNote = function (title) {
    const notes = loadNotes();
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title;
    });
    if (notesToKeep.length === notes.length) {

        console.log(chalk.red("Note not found"))

    } else {
        console.log(chalk.green("Note removed"))
        saveNotes(notesToKeep);
    }

};
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
};