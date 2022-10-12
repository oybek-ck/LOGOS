let products = {
    cardPalinCHikenk: {
        name: 'Ягненок',
        price: 620,
        kcall: 700,
        amount: 0,
        get sum() {
            return this.price * this.amount
        },
        get calcKall() {
            return this.kcall * this.amount
        },
    },
    cardCikeckBurger: {
        name: 'Индейка',
        price: 450,
        kcall: 500,
        amount: 0,
        get sum() {
            return this.price * this.amount
        },
        get calcKall() {
            return this.kcall * this.amount
        },
    },
    cardGusFish: {
        name: 'Гусь',
        price: 7900,
        kcall: 600,
        amount: 0,
        get sum() {
            return this.price * this.amount
        },
        get calcKall() {
            return this.kcall * this.amount
        },
    },
    cardUtkChichekn: {
        name: 'Утка',
        price: 3230,
        kcall: 700,
        amount: 0,
        get sum() {
            return this.price * this.amount
        },
        get calcKall() {
            return this.kcall * this.amount
        },
    },
}
const plus0rMinusBtn = document.querySelectorAll('.indeyka__link'),
    cardBefore = document.querySelector(".card-befor");



plus0rMinusBtn.forEach(el => {
    el.addEventListener('click', function (e) {
        e.preventDefault();
        plus0rMinus(this)
    })
})

function plus0rMinus(btn) {
    const parent = btn.closest('.card-box'),
        parentId = parent.getAttribute('id'),
        price = parent.querySelector('.card__korzn-text span'),
    out = parent.querySelector('.card-boxs__text'),
    elementData = btn.getAttribute("data-syumbol");
    if (elementData == '+' && products[parentId].amount < 30) products[parentId].amount++
    else if (elementData == '-' && products[parentId].amount > 0) products[parentId].amount--
    out.innerHTML = products[parentId].amount
    price.innerHTML = products[parentId].sum + ` ₽`
}