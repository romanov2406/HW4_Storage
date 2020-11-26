let _bank = 100;
export const _storage = {
    beer: {
        count: 200,
        price: 41
    },
    wine: {
        count: 80,
        price: 35
    },
    pepsi: {
        count: 10,
        price: 35
    }
}


let totalPrice = 0
export function plus(item ,count){
    return totalPrice += _storage[item].price * count;
}

export function sell(count, item) {
    _storage[item].count =  _storage[item].count - count;
    const total = _storage[item].price * count
    console.log(_storage[item].count);
    let copy = total;
    totalPrice +=  total; 
    _bank += copy;
    console.log(_storage[item].count);
}

export function cort(item, value){
  return  `${item}: ${value}`
}
export function total(){
    _bank += totalPrice
    console.log(totalPrice);
    console.log(_bank);
    return `Total price ${totalPrice}`
}
export function reset(selector,selecttor2,selector3,selector4){
    totalPrice = 0
    selector.value = `${_bank}UAN`
    console.log(totalPrice);
}
export function getCount(item) {
    return ` ${_storage[item].count}шт`;
}