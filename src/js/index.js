import '../scss/main.scss';


console.log('HELLO 🚀')
const hamburger = document.querySelector('.burger')
const navigation = document.querySelector('.navigation')
const heroShapes = document.querySelectorAll('.hero__shape')
setInterval(() => {

    heroShapes.forEach(shape => {
        shape.style.borderTopLeftRadius = `${Math.floor(Math.random() * 100)+40}%`;
        shape.style.borderTopRightRadius = `${Math.floor(Math.random() * 100)+40}%`;
        shape.style.borderBottomLeftRadius = `${Math.floor(Math.random() * 100)+40}%`;
        shape.style.borderBottomRightRadius = `${Math.floor(Math.random() * 100)+40}%`;
    })
}, 4000)

hamburger.addEventListener('click', () => {
navigation.classList.toggle('navigation--open')
hamburger.classList.toggle('open')
})