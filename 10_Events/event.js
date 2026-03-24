let box = document.querySelector('div');

box.addEventListener('mouseover',() =>{
    box.style.background = 'blue';
})

box.addEventListener('mouseout',() => {
    box.style.background = 'url("https://picsum.photos/200/300")';
})