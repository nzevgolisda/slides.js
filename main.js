
class Item {
    constructor({name, description, price}) {
        let el_name = document.createElement('div');
        let el_descr = document.createElement('div');
        let el_price = document.createElement('div');
        let el_img = document.createElement('img');
        this.element = document.createElement('div');
        el_name.innerHTML = 'Name: ' + name
        el_descr.innerHTML = ' Description: ' + description;
        el_price.innerHTML = ' Price: ' + price + ' €';
        el_img.src = './img/'+name+'.jpg';
        
        this.element.appendChild(el_name);
        this.element.appendChild(el_price);
        this.element.appendChild(el_descr);
        this.element.appendChild(el_img);
    };
};
function addImages(data) {
    for (let i = 0; i < data.length; i++) {
        let item = new Item(data[i]);
        document.body.appendChild(item.element);
    };
};
function createList(A, B) {
    let data = [];
    let n = A.length;
    for (let i = 0; i < n; i++) {
        data.push({name: i, description: A[i], price: B[i]});
    };
    addImages(data);
}

let A = [
    'Fks odifh ssdhmdsb fsmjxhf fskaic dduoao', 
    'Ajdsja dsaajlkjadlkjdas adlk sfdiudjsf'
];
let B = [
    '350', 
    '180'
];
createList(A, B);
let images = [];
let time = 2000; // time in milisec
let n = A.length
for (let i = 0; i < n; i++) {
    images.push('./img/'+i+'.jpg');
}
let i = 0;
function changeImg() {
    document.slide.src = images[i];
    if (i < images.length-1) {i++;}
    else {i = 0;}
    setTimeout("changeImg()", time);
};
window.onload = changeImg;
