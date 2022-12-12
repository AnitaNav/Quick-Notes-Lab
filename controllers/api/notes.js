const note = require('../../models/note');
const Note = require('../../models/note');

module.exports = {
    createdAt,
    index
}

async function createdAt(req, res) {
    req.body.user = req.user._id;
    const note = await Note.create(req.body);
    res.json(note)
}

async function index(req, res) {
    const notes = await Note.find({});
    res.json(notes);
}