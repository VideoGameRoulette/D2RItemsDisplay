let itemsData = {};

$.getJSON("./index.json",
	function (json) {
		const { items } = json;
		itemsData = items;
		console.log({ items });
	}
);

function GetItem(item) {
	const itemContainer = document.createElement("div");
	itemContainer.classList.add("item");
	itemContainer.innerHTML += `<div class="item-name" id="${item.fullName.includes("Rune") ? "RUNE" : item.quality}">${item.fullName}</div>`;
	if (item.ethereal) {
		itemContainer.innerHTML += `<div class="eth" id="ETHEREAL">Ethereal</div>`;
	}
	item.affixes.map((affix) => {
		itemContainer.innerHTML += `<div class="stat">${affix.name}: ${affix.value}</div>`;
	});
	return itemContainer;
}

const main = document.getElementById("root");
main.innerHTML = "";

if (itemsData.equipped.length > 0) {
	itemsData.equipped.map((item) => {
		main.appendChild(GetItem(item));
	});
}
