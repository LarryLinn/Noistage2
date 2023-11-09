const notesContainer = document.getElementById("app");
const addNoteButton = notesContainer.querySelector(".add-note");

let notes = [];

if (localStorage.getItem("stickynotes-notes")) {
  notes = localStorage.getItem("stickynotes-notes").split(",");
}

notes.forEach((note) => {
  const noteElement = createNoteElement(note);
  notesContainer.insertBefore(noteElement, addNoteButton);
});

addNoteButton.addEventListener("click", () => addNote());

function saveNotes(notes) {
  localStorage.setItem("stickynotes-notes", notes.join(","));
}

function createNoteElement(content) {
  const element = document.createElement("textarea");

  element.classList.add("note");
  element.value = content;
  element.placeholder = "double click to delete";

  element.addEventListener("change", () => {
    updateNote(element, content);
  });

  element.addEventListener("dblclick", () => {
    const doDelete = confirm("are u sure you want to delete that?");
    if (doDelete) {
      deleteNote(element);
    }
  });

  return element;
}

function addNote() {
  const noteElement = createNoteElement("");
  notesContainer.insertBefore(noteElement, addNoteButton);

  notes.push("");
  saveNotes(notes);
}

function updateNote(element, content) {
  const index = notes.indexOf(content);
  if (index !== -1) {
    notes[index] = element.value;
    saveNotes(notes);
  }
}

function deleteNote(element) {
  const index = notes.indexOf(element.value);
  if (index !== -1) {
    notes.splice(index, 1);
    saveNotes(notes);
    notesContainer.removeChild(element);
  }
}