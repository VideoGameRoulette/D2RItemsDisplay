function GetItem(item) {
  const itemContainer = document.createElement("div");
  itemContainer.classList.add("item");
  itemContainer.innerHTML += `<div class="item-name" id="${
    item.fullName.includes("Rune") ? "RUNE" : item.quality
  }">${item.fullName}</div>`;
  if (item.ethereal) {
    itemContainer.innerHTML += `<div class="eth" id="ETHEREAL">Ethereal</div>`;
  }
  item.affixes.map((affix) => {
    itemContainer.innerHTML += `<div class="stat">${affix.name}: ${affix.value}</div>`;
  });
  return itemContainer;
}

function appendItem(userData) {
  const main = document.getElementById("root");
  main.innerHTML = "";
  userData.equipped.map((item) => {
    main.appendChild(GetItem(item));
  });
}

function setData(json) {
  const { items } = json;
  const userData = { ...items };
  console.log(userData);
  appendItem(userData);
}

function jsonLoad() {
  let file = document.querySelector("#inputId").files[0]; // GET FILE FROM USER INPUT
  let fr = new FileReader(); // CREATE NEW INSTANCE OF FILEREADER CLASS
  fr.onload = (e) => {
    setData(JSON.parse(e.target.result));
  }; // ON FILE LOAD RUN GETDATA FUNCTION
  fr.readAsText(file); // READ FILE AS TEXT
}
