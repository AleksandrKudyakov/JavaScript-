let goods = [
    {
        id: 1,
        name: "sneakers",
        description: "text",
        sizes: [38, 39, 40],
        price: 3000,
        available: true,
    },
    {
        id: 33,
        name: "shoes",
        description: "text",
        sizes: [35, 36, 37, 38, 40],
        price: 4000,
        available: false,
    },
    {
        id: 56,
        name: "slippers",
        description: "text",
        sizes: [38, 39, 42],
        price: 700,
        available: true,
    },
    {
        id: 127,
        name: "boots",
        description: "text",
        sizes: [37, 39, 40],
        price: 5000,
        available: true,
    },
    {
        id: 876,
        name: "high boots",
        description: "text",
        sizes: [36, 39],
        price: 7500,
        available: true,
    },

];

let basket = [];

function addGood(id, count){
    basket.push({"good": id, "amount": count});
}

function removeGood(id){
    let index = basket.findIndex(x => x.good == id);
    basket.splice(index, 1);
}

function cleanBasket(){
    basket.splice(0, basket.length);
}


function printGoodsInfo()
{
    let sum = 0;
    let amount = 0;

    basket.forEach(item => {
        var good = goods.find(x => x.id == item.good);
        amount += item.amount;
        sum+= item.amount * good.price;
        console.log("good: " + good.name + "; " + "price: " + good.price + "; " + "amount: " + item.amount);    
    });

    console.log("\nTotal amount: " + amount); 
    console.log("\nTotal sum: " + sum); 
}

function main() {
    addGood(1, 1);
    addGood(33, 2);

    removeGood(1);

    addGood(127, 1);
    addGood(876, 1);

    //cleanBasket();

    printGoodsInfo();
}


main();
