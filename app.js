const validator = require("validator");
const notes = require("./note.js");
const chalk = require("chalk");
const yargs = require("yargs");

//console.log(validator.isEmail("afidalgo@gmail.com"));

//create add cmd
yargs
    .command(
        "add",
        "adding a note", {
            title: {
                alias: "title",
                describe: "Note Title",
                demandOption: true,
                type: 'string'
            },
            body: {
                alias: "body",
                describe: "Note body",
                demandOption: true,
                type: 'string'
            }
        },
        function (argv) {

            notes.addNote(argv.title, argv.body)
        }
    )
    .options("add", {
        describe: "add a note"
    })
    .help().argv;


yargs.parse();