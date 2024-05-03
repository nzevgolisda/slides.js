
function addImage2Body(name, description, price) {
    let item = new Item(name, description, price);
    document.body.appendChild(item.element);
}

function addImages() {
    let i;
    let data = [
        {id: 0, price: 0, description: "", name: "[Name]"},
        {id: 1, price: 0, description: "", name: "[Name]"},
        {id: 2, price: 0, description: "", name: "[Name]"},
        {id: 3, price: 0, description: "", name: "[Name]"},
        {id: 4, price: 0, description: "", name: "[Name]"},
        {id: 5, price: 0, description: "", name: "[Name]"}
    ];
    for (i = 0; i < data.length+1; i++) {
        addImage2Body(data[i].id, data[i].description, data[i].price);
    }
}

addImages();
