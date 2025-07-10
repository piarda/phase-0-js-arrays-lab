// Write your code here
let products = ["Laptop", "Phone", "Headphones", "Monitor"];

function logFirstProduct() {
    if (products.length > 0) {
        console.log(products[0]);
    } else {
        console.log("Inventory is empty");
    }
}

function addProduct(productName) {
    products.push(productName);
    console.log(`Added product: ${productName}`);
}

function updateProductName(index, newName) {
    if (index >= 0 && index < products.length) {
        console.log(`Name of ${index} from "${products[index]}" updating to "${newName}"`);
        products[index] = newName;
    } else {
        console.log("Invalid product.");
    }
}

function removeLastProduct() {
    if (products.length > 0) {
        const removed = products.pop();
        console.log(`Removed last product: ${removed}`);
    } else {
        console.log("No products to remove.");
    }
}


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
