"use strict"
const PRODUCT_TYPE = {
    MILK_FOOD: 1,
    FRUIT: 2,
    VEGETABLE: 3,
    CLOTHES: 4,
    BAKERY: 5,
}

const {MILK_FOOD, FRUIT, VEGETABLE, CLOTHES, BAKERY} = PRODUCT_TYPE; //Деструктуризация свойств свойств объекта//
const data = [
    {
        name: 'Milk',
        price: 20,
        quantity: 1,
        type: PRODUCT_TYPE.MILK_FOOD,
    },
    {
        name: 'Apple',
        price: 10,
        quantity: 3,
        type: PRODUCT_TYPE.FRUIT,
    },
    {
        name: 'Butter',
        price: 12,
        quantity: 1,
        type: PRODUCT_TYPE.MILK_FOOD,
    },
    {
        name: 'Bread',
        price: 23,
        quantity: 1,
        type: PRODUCT_TYPE.BAKERY,
    },
    {
        name: 'Orange',
        price: 12,
        quantity: 3,
        type: PRODUCT_TYPE.FRUIT,
    },
    {
        name: 'T-Shirt',
        price: 200,
        quantity: 1,
        type: PRODUCT_TYPE.CLOTHES,
    },
    {
        name: 'Jacket',
        price: 400,
        quantity: 1,
        type: PRODUCT_TYPE.CLOTHES,
    },
    {
        name: 'Tomato',
        price: 15,
        quantity: 5,
        type: PRODUCT_TYPE.VEGETABLE,
    },
    {
        name: 'Onion',
        price: 10,
        quantity: 4,
        type: PRODUCT_TYPE.VEGETABLE,
    },
]

const length = data.length;
console.log(`Array length = ${length}`);
let sumAll = 0;
let sumOne = 0;
let sumMilkFood = 0;
let sumFruit = 0;
let sumVegetable = 0;
let sumClothes = 0;
let sumBakery = 0;

for (let i = 0; i < length; i++) {
    let {name, price, quantity, type} = data [i];

    // Высчитать сумму, потраченную на все покупки //
    console.log(`Price of one unit ${name} = ${price}`);
    sumOne = price * quantity;
    sumAll = (sumAll + sumOne);
    console.log(`The amount spent on the product, taking into account its quantity ${name} = ${sumOne}`);

    /*
    Высчитать сумму, потраченную на конкретный тип товаров
    (типы товаров указаны в объекте PRODUCT_TYPE и в самих объект в ключе type)
    */
    switch (type) {
        case MILK_FOOD :
            sumMilkFood = (sumMilkFood + sumOne);
            break;

        case FRUIT :
            sumFruit = (sumFruit + sumOne);
            break;

        case VEGETABLE :
            sumVegetable = (sumVegetable + sumOne);
            break;

        case CLOTHES :
            sumClothes = (sumClothes + sumOne);
            break;

        case BAKERY :
            sumBakery = (sumBakery + sumOne);
            break;
    }

}
console.log(`Total: amount spent on all purchases = ${sumAll}`);
console.log(`Sum of milk food = ${sumMilkFood}`);
console.log(`Sum of fruit = ${sumFruit}`);
console.log(`Sum of vegetable = ${sumVegetable}`);
console.log(`Sum of clothes = ${sumClothes}`);
console.log(`Sum of bakery = ${sumBakery}`);