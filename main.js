
function addImage2Body(name, description, price) {
    let item = new Item(name, description, price);
    document.body.appendChild(item.element);
    //$(document.body).append(item.element);
}

function addImages() {
    let i;
    let data = [
        {id: 0, price: 0, description: "", name: "[Name]"},
        {id: 1, price: 0, description: "", name: "[Name]"},
        {id: 2, price: 0, description: "", name: "[Name]"},
        {id: 3, price: 0, description: "", name: "[Name]"},
        {id: 4, price: 0, description: "", name: "[Name]"},
        {id: 4, price: 0, description: "", name: "[Name]"},
        {id: 6, price: 0, description: "", name: "[Name]"},
        {id: 7, price: 0, description: "", name: "[Name]"},
        {id: 8, price: 0, description: "", name: "[Name]"},
        {id: 9, price: 0, description: "", name: "[Name]"},
        {id: 10, price: 0, description: "", name: "[Name]"},
        {id: 11, price: 0, description: "", name: "[Name]"},
        {id: 12, price: 0, description: "", name: "[Name]"},
        {id: 13, price: 0, description: "", name: "[Name]"},
        {id: 14, price: 0, description: "", name: "[Name]"},
        {id: 14, price: 0, description: "", name: "[Name]"},
        {id: 16, price: 0, description: "", name: "[Name]"},
        {id: 17, price: 0, description: "", name: "[Name]"},
        {id: 18, price: 0, description: "", name: "[Name]"},
        {id: 19, price: 0, description: "", name: "[Name]"},
        {id: 20, price: 0, description: "", name: "[Name]"},
        {id: 21, price: 0, description: "", name: "[Name]"},
        {id: 22, price: 0, description: "", name: "[Name]"},
        {id: 23, price: 0, description: "", name: "[Name]"},
        {id: 24, price: 0, description: "", name: "[Name]"},
        {id: 24, price: 0, description: "", name: "[Name]"},
        {id: 26, price: 0, description: "", name: "[Name]"},
        {id: 27, price: 0, description: "", name: "[Name]"},
        {id: 28, price: 0, description: "", name: "[Name]"},
        {id: 29, price: 0, description: "", name: "[Name]"},
        {id: 30, price: 0, description: "", name: "[Name]"},
        {id: 31, price: 0, description: "", name: "[Name]"},
        {id: 32, price: 0, description: "", name: "[Name]"},
        {id: 33, price: 0, description: "", name: "[Name]"},
        {id: 34, price: 0, description: "", name: "[Name]"},
        {id: 34, price: 0, description: "", name: "[Name]"},
        {id: 36, price: 0, description: "", name: "[Name]"},
        {id: 37, price: 0, description: "", name: "[Name]"},
        {id: 38, price: 0, description: "", name: "[Name]"},
        {id: 39, price: 0, description: "", name: "[Name]"},
        {id: 40, price: 0, description: "", name: "[Name]"},
        {id: 41, price: 0, description: "", name: "[Name]"},
        {id: 42, price: 0, description: "", name: "[Name]"},
        {id: 43, price: 0, description: "", name: "[Name]"},
        {id: 44, price: 0, description: "", name: "[Name]"},
        {id: 44, price: 0, description: "", name: "[Name]"},
        {id: 46, price: 0, description: "", name: "[Name]"},
        {id: 47, price: 0, description: "", name: "[Name]"},
        {id: 48, price: 0, description: "", name: "[Name]"},
        {id: 49, price: 0, description: "", name: "[Name]"},
        {id: 50, price: 0, description: "", name: "[Name]"},
        {id: 51, price: 0, description: "", name: "[Name]"},
        {id: 52, price: 0, description: "", name: "[Name]"},
        {id: 53, price: 0, description: "", name: "[Name]"},
        {id: 54, price: 0, description: "", name: "[Name]"},
        {id: 54, price: 0, description: "", name: "[Name]"},
        {id: 56, price: 0, description: "", name: "[Name]"},
        {id: 57, price: 0, description: "", name: "[Name]"},
        {id: 58, price: 0, description: "", name: "[Name]"},
        {id: 59, price: 0, description: "", name: "[Name]"},
        {id: 60, price: 0, description: "", name: "[Name]"},
        {id: 61, price: 0, description: "", name: "[Name]"},
        {id: 62, price: 0, description: "", name: "[Name]"},
        {id: 63, price: 0, description: "", name: "[Name]"},
        {id: 64, price: 0, description: "", name: "[Name]"},
    ];
    for (i = 0; i < data.length; i++) {
        addImage2Body(data[i].id, data[i].description, data[i].price);
    }
}

addImages();