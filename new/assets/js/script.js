const btn =document.querySelector('.dep')
const ul =document.querySelector('.all-ul')


btn.addEventListener('click', function(){
    console.log('salam');
    ul.classList.toggle("opacity")
})
