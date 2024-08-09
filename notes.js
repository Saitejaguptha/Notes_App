const fs = require("fs");

const addNotes = (title, body) => {
  const notes = loadNotes();

  const duplicateNotes = notes.find((note) => note.title === title);

  if (!duplicateNotes) {
    notes.push({
      title: title,
      body: body,
    });

    console.log("Adding a New Note!..");
  } else {
    console.log("Title is already Taken");
  }

  saveNotes(notes);
};

const removeNotes = (title) => {
  const notes = loadNotes();

  const notestokeep = notes.filter((note) => note.title !== title);

  saveNotes(notestokeep);
};

const listNotes = () => {
  const notes = loadNotes();

  const loadnotes = notes.filter((note) =>
    console.log("Title: " + note.title + " " + "Body: " + note.body)
  );
};

const ReadNotes = (title) => {
  const notes = loadNotes();

  const readNote = notes.find((note) => note.title === title);

  if (readNote) {
    console.log("Title: " + readNote.title + " " + "Body: " + readNote.body);
  } else {
    console.log("Cannot find the note with title: " + title);
  }
};

const loadNotes = () => {
  try {
    const buffer = fs.readFileSync("notes.json");

    const dataJSON = buffer.toString();

    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};

const saveNotes = (notes) => {
  const datajson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", datajson);
};

module.exports = { addNotes, removeNotes, listNotes, ReadNotes };
