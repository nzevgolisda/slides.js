
class Item {
    constructor(name, description, price) {
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