const NotesModel = require('./notesModel')

describe ('get notes', () => {
    const model = new NotesModel();
    it('it should list notes', () => {
        expect(model.getNotes()).toEqual([]);
});
});

describe ('add notes', () => {
    const model = new NotesModel();
    note = 'Buy milk';
    model.addNotes(note);
    it('it should add notes', () => {
        expect(model.getNotes()).toEqual(['Buy milk']);
});
});

describe ('add notes', () => {
    const model = new NotesModel();
    note = 'Buy milk';
    model.addNotes(note);
    model.reset()
    it('it should add notes', () => {
        expect(model.getNotes()).toEqual([]);
});
});