AOS.init()
const modal__container = document.querySelector('.modal__container')
aboutdata.forEach((data, index) => {
    modal__container.innerHTML += `
    <div class="modal fade" id="${data.id}">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content text-dark">
                <div class="modal-header">
                    <h2 class="fw mb-0">${data.name}</h2>
                    <button class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="card">
                        <img src="${data.img}" class="card-top-img">
                        <div class="card-body">
                            <h2 class="card-title">時間 : ${data.date}</h2>
                            <h5 class="card-text">
                                ${data.text}
                            </h5>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn" data-bs-dismiss="modal">關閉</button>
                </div>
            </div>
        </div>
    </div>
    `
})
// item
const item__container = document.querySelector('.item__container')
ITEM_DATA.forEach((data, index) => {
    item__container.innerHTML += `
    <div class="item">
        <img src="${data.img}" class="item__img rounded-circle">
        <h3 class="my-3">${data.name}</h3>
        <h5 class="my-3">${data.text}</h5>
    </div>
    `
})

const items = document.querySelectorAll('.item')
const item_le = items.length
let count = 0
function getIndex(i) {
    if (i % item_le === 0) return 0
    if (Math.sign(i) >= 0) {
        return i % item_le
    } else {
        return i % item_le + item_le
    }
}
function upclass(n) {
    count += n
    let index = getIndex(count)
    let nextcount = Math.floor(item_le / 2)
    items.forEach(data => {
        data.classList = 'item'
    })
    items[index].classList.add('active')
    let i = getIndex(index + 1)
    items[i].classList.add('next')
    while (nextcount > 1) {
        i = (i + 1) % item_le
        items[i].classList.add('next2')
        nextcount -= 1
    }
    Math.sign(n) === 1 && trs(i)
    i = getIndex(index - 1)
    items[i].classList.add('prve')
    let lassindex = -1
    items.forEach((data, index) => {
        if (data.className == 'item') {
            data.classList.add('prve2')
            lassindex = index
        }
    })
    Math.sign(n) === -1 && trs(lassindex)
}
function trs(index) {
    items[index].classList.add('nono')
    setTimeout(() => {
        items[index].classList.remove('nono')
    }, 0);
}

upclass(0)
window.addEventListener('click', e => {
    e.target.classList.contains('next') && upclass(1)
    e.target.classList.contains('prve') && upclass(-1)
})
// order
const order__container = document.querySelector('.order__container')
const shop__body = document.querySelector('.shop__body')
const shop__sum = document.querySelector('.sum')
let price = 0
orderdata.forEach((data, index) => {
    order__container.innerHTML += `
    <div class="order__item">
        <img src="${data.img}" class="order__img">
        <div class="order__text">
            <div class="d-flex align-items-center">
                <h2 class="fw">${data.name}</h2>
                <h5 class="mb-0 fw ms-2">${data.time}</h5>
            </div>
            <h3 class="colortwo fw">$${data.price}&emsp; ${data.amounts}</h3>
            <h5 class="fw">${data.text}</h5>
            <div class="order__btnbox">
                <button class="btn fs-5 fw" onclick="reduce(${index})">-</button>
                <h2 class="order__amount fw colortwo text-center mb-0">0</h2>
                <button class="btn fs-5 fw" onclick="add(${index})">+</button>
            </div>
        </div>
    </div>
    `
    shop__body.innerHTML += `
    <div class="shop__item flex-row text-light my-3">
        <h3 class="fw">${data.name}</h3>
        <h4 class="fw shop__amount">${data.amount}</h4>
        <h3 class="fw shop__price">$${price}</h3>
    </div>
    `
})
const order__amount = document.querySelectorAll('.order__amount')
const shop__amount = document.querySelectorAll('.shop__amount')
const shop__price = document.querySelectorAll('.shop__price')
function reduce(index) {
    orderdata[index].amount = Math.max(0, orderdata[index].amount - 1)
    order__amount[index].innerText = orderdata[index].amount
    shop__amount[index].innerText = orderdata[index].amount
    sumsum()
}
function add(index) {
    orderdata[index].amount = orderdata[index].amount + 1
    order__amount[index].innerText = orderdata[index].amount
    shop__amount[index].innerText = orderdata[index].amount
    sumsum()

}
function sumsum(index) {
    let sum = 0
    shop__price.forEach((data, index) => {
        price = orderdata[index].amount * orderdata[index].price
        shop__price[index].innerText = `$${price}`
        sum += price
    })
    shop__sum.innerText = `總計 : ${sum}`
}
function order() {
    sum = 0
    shop__sum.innerText = `總計 : ${sum}`
    price = 0
    orderdata.forEach(data => {
        data.amount = 0
    })
    shop__price.forEach(data => {
        data.innerText = `$0`
    })
    shop__amount.forEach(data => {
        data.innerText = 0
    })
    order__amount.forEach(data => {
        data.innerText = 0
    })
    alert('感謝您的支持，您所要購買的商品項目已確認完畢，總計金額已匯出，大約在3-5天產品出貨，感謝您蒞臨本網站，期待下一次為您服務')
}
// footer
const footer = document.querySelector('.footer__contianer')
footerdata.forEach((element, index) => {
    footer.innerHTML += `
    <h3 class="fw mt-3 q-title">${element.name}</h3>
    <div class="btn fw" onclick="footerchage(${index})">點我回答→</div>
    `
});
const footer__input = document.querySelectorAll('.footer__input')
const footer__form = document.querySelector('.footer__form')


function footerchage(index) {
    footer__form.innerHTML = `
    <h2 class="fw colorone">${footerdata[index].name}</h2>
    <div class="my-5">
            <label class="fw fs-4 colorone">姓名</label>
            <input type="text" class="footer__input name__input" placeholder="name" required="required">
        </div>
        <div class="my-5">
            <label class="fw fs-4 colorone">信箱</label>
            <input type="email" class="footer__input gmail__input" placeholder="gmail"
                required="required">
        </div>
        <div class="my-5">
            <label class="fw fs-4 colorone">${footerdata[index].id}</label>
            <input type="text" class="footer__input message__input" placeholder="message"
                required="required">
        </div>
        <div class="my-5 footer__btnbox">
            <button class="btn bgtwo" type="reset">重設</button>
            <button class="btn bgtwo" type="submit">送出</button>
    </div>
    `
}
function footerea() {
    window.event.preventDefault()
    // borad__container.innerHTML += `
    // <div class="borad__box">
    //     <p class="mb-1">${name__input.value}</p>
    //     <p class="mb-1">${gmail__input.value}</p>
    // </div>
    // <p class="fs-4 borad__message position-relative ps-2">${message__input.value}</p>
    // </div>
    // `
    footer__input.forEach(data => {
        data.value = ''
    })
    alert('感謝您寶饋的建議，我們將會持續改進，感謝您蒞臨本網站，期待下一次為您服務!')
}
// anime
const center = document.querySelectorAll('.center__box>li')
const teacher = document.querySelectorAll('.teacher__box>li')
const cookie = document.querySelectorAll('.cookie__box>li')
var animate = anime({
    targets: '.center__box',
    translateX: '-100%',
    easing: 'linear',
    duration: 20000,
    direction: 'alternate',
})
var animate2 = anime({
    targets: '.teacher__box',
    translateX: '-100%',
    easing: 'linear',
    duration: 20000,
    direction: 'reverse',
    loop: true,
})
var animate3 = anime({
    targets: '.cookie__box',
    translateX: '-100%',
    easing: 'linear',
    duration: 20000,
    direction: 'reverse',
    loop: true,
})
var animate3 = anime({
    targets: '.poll__box',
    translateX: '-100%',
    easing: 'linear',
    duration: 15000,
    direction: 'reverse',
    loop: true,
})
center.forEach(element => {
    element.onmouseover = animate.pause
})
center.forEach(element => {
    element.onmouseout = animate.play
})
teacher.forEach(element => {
    element.onmouseover = animate2.pause
})
teacher.forEach(element => {
    element.onmouseout = animate2.play
})