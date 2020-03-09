const notes = require('./note.js');
const yargs = require('yargs');

//console.log(validator.isEmail("afidalgo@gmail.com"));
//create add cmd
yargs
  .command(
    'add',
    'adding a note',
    {
      title: {
        alias: 'title',
        describe: 'Note Title',
        demandOption: true,
        type: 'string'
      },
      body: {
        alias: 'body',
        describe: 'Note body',
        demandOption: true,
        type: 'string'
      }
    },
    argv => {
      notes.addNote(argv.title, argv.body);
    }
  )
  .options('add', {
    describe: 'add a note'
  })
  .help().argv;

//remove cmd
yargs
  .command(
    'remove',
    'remove a note',
    {
      title: {
        alias: 'title',
        describe: 'Note Title',
        demandOption: true,
        type: 'string'
      }
    },
    argv => {
      notes.removeNote(argv.title);
    }
  )
  .options('remove', {
    describe: 'remove a note'
  })
  .help().argv;

//list notes cmd
yargs
  .command('list', 'list notes', argv => {
    notes.listNotes();
  })
  .options('list', {
    describe: 'list notes'
  })
  .help().argv;
yargs.parse();
