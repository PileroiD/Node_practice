const yargs = require("yargs");
const {
    addNote,
    removeNote,
    printNotes,
    editNote,
} = require("./controller.js");

yargs.command({
    command: "add",
    descrribe: "Add new note to list",
    builder: {
        title: {
            type: "string",
            describe: "Note title",
            demandOption: true,
        },
    },
    handler({ title }) {
        addNote(title);
    },
});

yargs.command({
    command: "remove",
    descrribe: "Remove note by id",
    builder: {
        id: {
            type: "string",
            describe: "Title id",
            demandOption: true,
        },
    },
    handler({ id }) {
        removeNote(id);
    },
});

yargs.command({
    command: "edit",
    describe: "Edit note",
    builder: {
        id: {
            type: "string",
            describe: "Title id",
            demandOption: true,
        },
        title: {
            type: "string",
            describe: "New note title",
            demandOption: true,
        },
    },
    handler({ id, title }) {
        editNote(id, title);
    },
});

yargs.command({
    command: "list",
    descrribe: "Print all notes",
    async handler() {
        printNotes();
    },
});

yargs.parse();
