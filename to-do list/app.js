const button = document.querySelector(".button");
const container = document.getElementById("toDoContainer");
const input = document.getElementById("input");
const select = document.querySelector(".options");




button.addEventListener("click", () => {
const text = document.createElement("li");
text.textContent = input.value;
input.value = "";
text.classList.add("lista");
const deleteButton = document.createElement("button");
deleteButton.classList.add("deletebtn");
deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
text.appendChild(deleteButton);
container.appendChild(text);

deleteButton.addEventListener("click", () => {
deleteButton.parentElement.remove();
});

text.addEventListener("dblclick", () => {
text.style.textDecoration = "line-through";
});
});

select.addEventListener("change", () => {
const allItems = Array.from(container.children);
const selectedValue = select.value;

allItems.forEach(item => {
if (selectedValue === "completed") {
item.style.display = item.style.textDecoration === "line-through" ? "" : "none";
} else if (selectedValue === "uncompleted") {
item.style.display = item.style.textDecoration === "line-through" ? "none" : "";
} else {
item.style.display = "";
}
});
});
