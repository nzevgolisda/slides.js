
class Item {
    constructor([name, description, price]) {
        let el_descr = document.createElement('div');
        el_descr.innerHTML = ' Description: ' + description;
        let el_price = document.createElement('div');
        el_price.innerHTML = ' Price: ' + price + ' €';
        let el_img = document.createElement('img');
        el_img.src = './img/'+name+'.jpg';
        this.element = document.createElement('div');
        this.element.appendChild(el_descr);
        this.element.appendChild(el_price);
        this.element.appendChild(el_img);
    }
}
function addImage2Body([name, description, price]) {
    let item = new Item([name, description, price]);
    document.body.appendChild(item.element);
}
function addImages(data) {
    for (let i = 0; i < data.length; i++) {
        div_item = [data[i].id, data[i].description, data[i].price];
        addImage2Body(div_item);
    }
}
let data = [
    {id: 0, price: 0, description: "", name: "[Name]"},
    {id: 1, price: 0, description: "", name: "[Name]"},
    {id: 2, price: 0, description: "", name: "[Name]"},
    {id: 3, price: 0, description: "", name: "[Name]"},
    {id: 4, price: 0, description: "", name: "[Name]"},
    {id: 5, price: 0, description: "", name: "[Name]"}
];
addImages(data);
