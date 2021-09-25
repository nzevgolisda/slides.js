
let i = 0;
let n = 64;
let images = [];
let time = 3000;
for (i = 0; i < n; i++) {
    images.push('./img/'+i+'.jpg');
}
function changeImg() {
    document.slide.src = images[i];
    if (i < images.length - 1) {
        i++;
    }else {
        i = 0;
    }
    setTimeout("changeImg()", time);
}
window.onload = changeImg