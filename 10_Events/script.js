let btn = document.querySelectorAll('button');

btn.forEach((btn) =>{
    btn.addEventListener('click',(e) =>{
        document.body.style.background = `${e.target.id}`;
    })
})


