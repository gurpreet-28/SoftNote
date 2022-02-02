let notes = [];
const noteArea = document.getElementById("note-area");
const addBtn = document.getElementById("add-btn");
let notesList = document.getElementById("notes");
const search = document.getElementById("search");
const searchIcon = document.getElementById("search-icon");
// let noteTitle = document.getElementById("note-title");
let notesFromLocalStorage = JSON.parse(localStorage.getItem("notes"));

if (notesFromLocalStorage) {
  notes = notesFromLocalStorage;
  showNotes();
}
if (notes.length != 0) {
  showNotes();
} else {
  notesList.innerText = "You dont have any note...🙃";
}

function showNotes() {
  let list = "";
  for (let i = 0; i < notes.length; i++) {
    list += `<div class="note">
        <div class="note-heading-and-note">
          <h2 class="heading">Note ${i + 1}</h2>
          <p class="main-note">${notes[i]}</p>
        </div>
        <div class="delandedit">
          <button class="delete-btn" id="del ${i}" onclick="deleteNote(this.id)">Delete Note</button>
          <button class="edit-btn" id="edit ${i}">Edit Note</button>
          <button class="fav-btn" id="fav ${i}">Favourite</button>
        </div>
      </div>`;
  }
  notesList.innerHTML = list;
}
addBtn.addEventListener("click", () => {
  if (noteArea.value == "") {
    alert("note field cannot be empty...🙂");
  } else {
    notes.push(noteArea.value);
    localStorage.setItem("notes", JSON.stringify(notes));
    noteArea.value = "";
    showNotes();
  }
});

function deleteNote(index) {
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  showNotes();
}

search.addEventListener("input", () => {
  let searchValue = search.value.toLowerCase();
  let notes = document.querySelectorAll(".note");
  notes.forEach(function (element) {
    let noteTxt = element.getElementsByTagName("p")[0].innerText.toLowerCase();
    if (noteTxt.includes(searchValue)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});

//for mobile navigation
const bars = document.querySelector(".fa-bars");
const navMenu = document.getElementById("navigation");

bars.addEventListener("click", () => {
  if (navMenu.style.display == "none") {
    navMenu.style.display = "block";
  } else {
    navMenu.style.display = "none";
  }
});
