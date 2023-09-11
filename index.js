console.log('The notes app is running');

const NotesModel = require('./notesModel');
notesmodel = new NotesModel();
console.log(notesmodel.getNotes());

