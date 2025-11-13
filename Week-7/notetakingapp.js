function saveNote(title, content) {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(
        { title, content }
    );
    localStorage.setItem("notes", JSON.stringify(notes));
    console.log("Note saved!");
}

function getNotes() {
    return JSON.parse(localStorage.getItem("notes")) || [];
}

function deleteNote(title) {
    const notes = getNotes().filter(note => note.title !== title);
    localStorage.setItem("notes", JSON.stringify(notes));
    console.log(`Deleted note: ${title}`);
}
saveNote("Meeting", "Discuss project milestones");
saveNote("Shopping", "Milk, Bread, Eggs");
console.log(getNotes());
deleteNote("Meeting");
console.log(getNotes());