let items = [];

const itemsDiv = document.getElementById('items')
const input = document.getElementById('inputForItem')
const storageKey = "items";

function renderItems() {
    itemsDiv.innerHTML = null;

    for (const [idx, item] of Object.entries(items)) {
        const container = document.createElement("div");
        container.style.border = "4px black solid"
        container.style.boxShadow = "none";
        container.style.marginBottom = "10px";
        container.style.marginTop = "10px";
        container.style.backgroundColor= "lightgray"
        
        const text = document.createElement("p");
        text.style.display = "inline";
        text.style.marginTop = "10px";
        text.style.marginRight = "20px";
        text.style.color = "black";
        text.textContent = item;

        const button = document.createElement("button");
        button.textContent = "Delete";
        button.style.height = "auto";
        button.style.marginTop = "10px";
        button.onclick = () => removeItem(idx);

        container.appendChild(text);
        container.appendChild(button);

        itemsDiv.appendChild(container);
    }
}

function addItem() {
    const value = input.value;
    if (!value) {
        alert("Cannot Add Empty To Do");
        return;
    }
    items.push(value);
    renderItems();
    input.value = "";
    saveItems();
}

function removeItem(idx) {
    items.splice(idx, 1);
    renderItems();
    saveItems();
}

function saveItems() {
    const stringItems = JSON.stringify(items);
    localStorage.setItem(storageKey, stringItems)
}

function loadItems() {
    const oldItems = localStorage.getItem(storageKey);
    if (oldItems) items = JSON.parse(oldItems);
    renderItems()
}

document.addEventListener("DOMContentLoaded", loadItems);


