import {
    plus,
    cort,
    total,
    reset,
    getCount,
    sell
} from "./SHOP.module.js";

let countVal = document.querySelector('#countVal');
let add = document.querySelector('#add');
let buyCount = document.querySelector('.buyCount');
const checkbox = document.querySelector('.checkbox');
const buy = document.querySelector('#buy');
const boxInfo = document.querySelector('#boxInfo');

let itemValue
checkbox.addEventListener('click', function (event) {
    if (checkbox === event.target) {
        return
    }
    itemValue = event.target.value;
});
reset(document.querySelector('#balance'));
add.addEventListener('click', function () {
    if (countVal.value === '') {
        alert('Pusta stroka');
        return
    }
    buyCount.innerHTML += `<span>${cort(itemValue,countVal.value)}</span>`;
    plus(itemValue, countVal.value);
    sell(countVal.value, itemValue);
    boxInfo.innerHTML = '';
    countVal.value = '';
});
buy.addEventListener('click', function () {
    if (buyCount.innerHTML !== '') {
        boxInfo.innerHTML += `${buyCount.innerHTML}  <br/>  ${total()}`;
        buyCount.innerHTML = '';
        reset(document.querySelector('#balance'));
        document.querySelector('#beer').value = getCount('beer');
        document.querySelector('#wine').value = getCount('wine');
        document.querySelector('#pepsi').value = getCount('pepsi');
    }
});