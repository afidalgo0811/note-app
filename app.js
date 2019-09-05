console.log("app.js");

const validator = require("validator");
const getNotes = require("./note.js");
const chalk = require("chalk");
const yargs = require("yargs");

//console.log(validator.isEmail("afidalgo@gmail.com"));

//create add cmd
yargs
    .command(
        "add",
        "adding a note",
        function (argv) {
            return argv.option("title", {
                alias: "title",
                describe: "Note Title",
                demandOption: true,
                type: 'string'
            });
        },
        function (argv) {
            console.log("adding a new note", argv.title);
        }
    )
    .options("add", {
        describe: "add a note"
    })
    .help().argv;


console.log(yargs.argv);