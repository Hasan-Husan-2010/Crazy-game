let form = document.querySelector('.form');
let inp = document.querySelector('.inp');
let h1 = document.querySelector('.h1');
let x = parseInt(Math.random() * 101);
console.log(`To'g'ri Javob: ${x}`);


form.addEventListener('submit', (evt) =>{
    evt.preventDefault();
    let val1 = Number(inp.value);
    if(val1 > x){
        h1.textContent = `${val1}dan kichikroq son kiriting`;
        h1.classList.remove('red');
        h1.classList.remove('green');
        h1.classList.add('blueviolet');
    } else if(val1 < x){
        h1.textContent = `${val1}dan kattaroq son kiriting`;
        h1.classList.add('red');
        h1.classList.remove('green');
        h1.classList.remove('blueviolet');
    }else if (val1 === x){
        h1.textContent = `${val1} To'g'ri topdingiz`;
        h1.classList.remove('red');
        h1.classList.add('green');
        h1.classList.remove('blueviolet');
    }
});