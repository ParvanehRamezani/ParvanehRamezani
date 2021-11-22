let product1 = {

    productName: 'Bag',
    productPrice: 10
}

let product2 = {

    productName: 'Shoes',
    productPrice: 50
}


function buyProduct() {

    if (product1.productPrice > product2.productPrice) {
        return product1.productName;

    } else {
        return product2.productName;
 
    }
    console.log((product1.productName, product2.productName) + "is more expensive.");
}

buyProduct(product1, product2);

