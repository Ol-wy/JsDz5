let base = [
    {id: 1, img: "./img/image 1.png", title: 'Syltherine', subtitle: 'Stylish cafe chair', price: 'Rp 2.500.000', button: 'Delete'},
    {id: 2, img: './img/image 2.png', title: 'Leviosa', subtitle: 'Stylish cafe chair', price: 'Rp 2.500.000', button: 'Delete'},
    {id: 3, img: './img/image 3.png', title: 'Lolito', subtitle: 'Luxury big sofa', price: 'Rp 7.000.000', button: 'Delete'},
    {id: 4, img: './img/image 4.png', title: 'Respira', subtitle: 'Minimalist fan', price: 'Rp 500.000', button: 'Delete'},
    {id: 5, img: './img/image 5.png', title: 'Grifo', subtitle: 'Night lamp', price: 'Rp 1.500.000', button: 'Delete'},
    {id: 6, img: './img/image 6.png', title: 'Muggo', subtitle: 'Small mug', price: 'Rp 150.000', button: 'Delete'},
    {id: 7, img: './img/image 7.png', title: 'Pingky', subtitle: 'Cute bed set', price: 'Rp 7.000.000', button: 'Delete'},
    {id: 8, img: './img/image 8.png', title: 'Potty', subtitle: 'Stylish cafe chair', price: 'Rp 500.000', button: 'Delete'}
]

let row = document.querySelector('.row')

const addCardInRow = () => {
    base.forEach ((item) => {
        row.innerHTML += `<div class = 'card' id ='${item.id}'>
        <img class = 'card__img' src ='./${item.img}' alt = '${item.subtitle}'/>
        <h2 class = 'card__title'>${item.title}</h2>
        <p class = 'card__subtitle'>${item.subtitle}</p>
        <p class = 'card__price'>${item.price}</p>
        <button class = 'card__btn'>${item.button}</button>
        </div>`

    })

}


addCardInRow()

    function remove(){
        let w = this.closest('.card'), br = w.nextElementSibling;

        if(br.nodeType === 1 && br.nodeName === 'BR')
        br.remove();

        w.remove();
    }
    Array.from(document.querySelectorAll('.card__btn')).forEach(b => b.addEventListener('click', remove));

btn.addEventListener




