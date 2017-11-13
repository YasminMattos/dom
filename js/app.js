var container = document.getElementById('container');

//h1 elment
var h1 = document.createElement('h1');
h1.textContent = 'Box picture';
container.appendChild(h1);

//Figure: image & figcaption
var figure = document.createElement('figure');
container.appendChild(figure);

var img = document.createElement('img');
img.setAttribute('src', 'assets/images/color-box.jpg');
img.setAttribute('alt', 'box');
figure.appendChild(img);
/*
var text = document.createElement('figcaption');
text.textContent = 'box description'
figure.appendChild(text);
*/

var img2 = document.createElement('img');
img2.setAttribute('src', 'assets/images/box.jpg');
img2.setAttribute('alt', 'box');
figure.appendChild(img2);


function clickImage1() {
    img.setAttribute('src', 'assets/images/box.jpg');
};

function clickImage2() {
    img2.setAttribute('src', 'assets/images/color-box.jpg');
};

img.addEventListener('click', clickImage1);

img2.addEventListener('click', clickImage2);


/*
img.addEventListener('click', function() {
    img.setAttribute('src', 'assets/images/box.jpg')
} );
*/

