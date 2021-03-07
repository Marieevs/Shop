"use strict"
const PRODUCT_TYPE = {
    MILK_FOOD: 1,
    FRUIT: 2,
    VEGETABLE: 3,
    CLOTHES: 4,
    BAKERY: 5,
}

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

/*
Высчитаь сумму, потраченную на все покупки
 */
const length = data.length;
console.log('Длина массива = ', length);
let summaAll = 0;
let summaOne = 0;
for (let i = 0; i < data.length; i++) {
    console.log('Цена одного продукта = ', data[i].price);
    summaOne = (data[i].price * data[i].quantity);
    summaAll = (summaAll + data[i].price * data[i].quantity);
    console.log('Сумма, потраченная на продукт c учетом его количества = ', summaOne);
}
console.log('Итого: сумма, потраченная на все покупки = ', summaAll);

/*
Высчитать сумму, потраченную на конкретный тип товаров
(типы товаров указаны в объекте PRODUCT_TYPE и в самих объект в ключе type)
 */

let summaMilkFood = 0;
let summaFruit = 0;
let summaVegetable = 0;
let summaClothes = 0;
let summaBakery = 0;

for (let i = 0; i < data.length; i++)
    switch (data[i].type) {
        case PRODUCT_TYPE.MILK_FOOD :
            summaMilkFood = (summaMilkFood + data[i].price * data[i].quantity);
            break;

        case PRODUCT_TYPE.FRUIT :
            summaFruit = (summaFruit + data[i].price * data[i].quantity);
            break;

        case PRODUCT_TYPE.VEGETABLE :
            summaVegetable = (summaVegetable + data[i].price * data[i].quantity);
            break;

        case PRODUCT_TYPE.CLOTHES :
            summaClothes = (summaClothes + data[i].price * data[i].quantity);
            break;

        case PRODUCT_TYPE.BAKERY :
            summaBakery = (summaBakery + data[i].price * data[i].quantity);
            break;
    }

console.log('Сумма молочных продуктов = ', summaMilkFood);
console.log('Сумма фруктов = ', summaFruit);
console.log('Сумма овощей = ', summaVegetable);
console.log('Сумма одежды = ', summaClothes);
console.log('Сумма выпечки = ', summaBakery);