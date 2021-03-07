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

const length = data.length;
console.log(`Длина массива = ${length}`);
let sumAll = 0;
let sumOne = 0;
let sumMilkFood = 0;
let sumFruit = 0;
let sumVegetable = 0;
let sumClothes = 0;
let sumBakery = 0;
for (let i = 0; i < length; i++) {
    let priceProduct = data[i].price;
    let quantityProduct = data[i].quantity;
    let typeProduct = data[i].type;
    // Высчитать сумму, потраченную на все покупки //
    console.log(`Цена одного продукта = ${priceProduct}`);
    sumOne = (priceProduct * quantityProduct);
    sumAll = (sumAll + sumOne);
    console.log(`Сумма, потраченная на продукт c учетом его количества = ${sumOne}`);

    /*
    Высчитать сумму, потраченную на конкретный тип товаров
    (типы товаров указаны в объекте PRODUCT_TYPE и в самих объект в ключе type)
    */
    switch (typeProduct) {
        case PRODUCT_TYPE.MILK_FOOD :
            sumMilkFood = (sumMilkFood + sumOne);
            break;

        case PRODUCT_TYPE.FRUIT :
            sumFruit = (sumFruit + sumOne);
            break;

        case PRODUCT_TYPE.VEGETABLE :
            sumVegetable = (sumVegetable + sumOne);
            break;

        case PRODUCT_TYPE.CLOTHES :
            sumClothes = (sumClothes + sumOne);
            break;

        case PRODUCT_TYPE.BAKERY :
            sumBakery = (sumBakery + sumOne);
            break;
    }

}
console.log(`Итого: сумма, потраченная на все покупки = ${sumAll}`);
console.log(`Сумма молочных продуктов = ${sumMilkFood}`);
console.log(`Сумма фруктов = ${sumFruit}`);
console.log(`Сумма овощей = ${sumVegetable}`);
console.log(`Сумма одежды = ${sumClothes}`);
console.log(`Сумма выпечки = ${sumBakery}`);