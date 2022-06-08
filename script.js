let notes = document.querySelector("#notes");
let notesList = localStorage.getItem("notes") || [];

if (notesList.length != 0) notesList = JSON.parse(notesList);

function addNote() {
    let titleNote = document.querySelector("#titleNote");
    let textNote = document.querySelector("#textNote");
    if (titleNote.value == "" || textNote.value == "") {
        alert("Please fill all inputs!");
        return;
    }

    let note = {
        title: titleNote.value,
        text: textNote.value
    };
    notesList = [...notesList, note];
    titleNote.value = "";
    textNote.value = "";
    localStorage.setItem("notes", JSON.stringify(notesList));
    showNotes();
}

document.querySelector("#titleNote").addEventListener("keydown", (e) => {
    if (e.key == "Enter") addNote();
});

document.querySelector("#textNote").addEventListener("keydown", (e) => {
    if (e.key == "Enter") addNote();
});

function showNotes() {
    notes.innerHTML = "";
    for (let i = 0; i < notesList.length; i++) {
        let noteHTML = document.createElement("div");
        noteHTML.className = "note";
        let titleHTML = document.createElement("h1");
        titleHTML.className = "titleHTML";
        let textHTML = document.createElement("p");
        textHTML.className = "textHTML";
        titleHTML.innerHTML = Number(notesList.indexOf(notesList[i]) + 1) + ". " + notesList[i].title;
        textHTML.innerHTML = notesList[i].text;
        noteHTML.appendChild(titleHTML);
        noteHTML.appendChild(textHTML);
        notes.appendChild(noteHTML);
    }
}

showNotes();