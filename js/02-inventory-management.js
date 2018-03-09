/*eslint-env browser*/
var storage;

function showMenu() {
    "use strict";
    window.console.log("Welcome to the Invenotry Management Application");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("view - View all products");
    window.console.log("update - Update stock");
    window.console.log("exit - Exit the program");
    window.console.log("");
}

function viewAllProducts(inventory) {
    "use strict";
    storage = localStorage.getItem("array");


    if (storage !== null) {
        var newSku1, newSku2, newSku3, newSku4, newSku5, newProduct1, newProduct2, newProduct3, newProduct4, newProduct5, newQuantity1, newQuantity2, newQuantity3, newQuantity4, newQuantity5, newCost1, newCost2, newCost3, newCost4, newCost5, newItem1, newItem2, newItem3, newItem4, newItem5, finalArray;
        inventory = [storage.split(",")];

       
        
        newSku1 = inventory[0][1];
        newSku2 = inventory[0][9];
        newSku3 = inventory[0][17];
        newSku4 = inventory[0][25];
        newSku5 = inventory[0][33];

        newProduct1 = inventory[0][3];
        newProduct2 = inventory[0][11];
        newProduct3 = inventory[0][19];
        newProduct4 = inventory[0][27];
        newProduct5 = inventory[0][35];

        newQuantity1 = "(" + inventory[0][5] + ")";
        newQuantity2 = "(" + inventory[0][13] + ")";
        newQuantity3 = "(" + inventory[0][21] + ")";
        newQuantity4 = "(" + inventory[0][29] + ")";
        newQuantity5 = "(" + inventory[0][37] + ")";

        newCost1 = "$" + inventory[0][7];
        newCost2 = "$" + inventory[0][15];
        newCost3 = "$" + inventory[0][23];
        newCost4 = "$" + inventory[0][31];
        newCost5 = "$" + inventory[0][39];

        newItem1 = [newSku1, newProduct1, newQuantity1, newCost1];
        newItem2 = [newSku2, newProduct2, newQuantity2, newCost2];
        newItem3 = [newSku3, newProduct3, newQuantity3, newCost3];
        newItem4 = [newSku4, newProduct4, newQuantity4, newCost4];
        newItem5 = [newSku5, newProduct5, newQuantity5, newCost5];

        finalArray = [newItem1, newItem2, newItem3, newItem4, newItem5];

        finalArray.sort();


        window.console.log(finalArray[0].join(" "));
        window.console.log(finalArray[1].join(" "));
        window.console.log(finalArray[2].join(" "));
        window.console.log(finalArray[3].join(" "));
        window.console.log(finalArray[4].join(" "));




    } else if (storage === null) {
        var sku1, sku2, sku3, sku4, sku5, product1, product2, product3, product4, product5, quantity1, quantity2, quantity3, quantity4, quantity5, cost1, cost2, cost3, cost4, cost5;

        sku1 = inventory[0][0][1];
        sku2 = inventory[1][0][1];
        sku3 = inventory[2][0][1];
        sku4 = inventory[3][0][1];
        sku5 = inventory[4][0][1];

        product1 = inventory[0][1][1];
        product2 = inventory[1][1][1];
        product3 = inventory[2][1][1];
        product4 = inventory[3][1][1];
        product5 = inventory[4][1][1];

        quantity1 = "(" + inventory[0][2][1] + ")";
        quantity2 = "(" + inventory[1][2][1] + ")";
        quantity3 = "(" + inventory[2][2][1] + ")";
        quantity4 = "(" + inventory[3][2][1] + ")";
        quantity5 = "(" + inventory[4][2][1] + ")";

        cost1 = "$" + inventory[0][3][1];
        cost2 = "$" + inventory[1][3][1];
        cost3 = "$" + inventory[2][3][1];
        cost4 = "$" + inventory[3][3][1];
        cost5 = "$" + inventory[4][3][1];

        var firstItem = [sku1, product1, quantity1, cost1],
            secondItem = [sku2, product2, quantity2, cost2],
            thirdItem = [sku3, product3, quantity3, cost3],
            fourthItem = [sku4, product4, quantity4, cost4],
            fifthItem = [sku5, product5, quantity5, cost5],
            skuArray = [firstItem, secondItem, thirdItem, fourthItem, fifthItem];


        skuArray = skuArray.sort();

        window.console.log(skuArray[0].join(" ").toString());
        window.console.log(skuArray[1].join(" ").toString());
        window.console.log(skuArray[2].join(" ").toString());
        window.console.log(skuArray[3].join(" ").toString());
        window.console.log(skuArray[4].join(" ").toString());

    }


}


function updateSkuNumber(array) {
    "use strict";
    var skuNumber = Number(window.prompt("Please enter sku number")), sku1 = array[0][0][1], sku2 = array[1][0][1], sku3 = array[2][0][1], sku4 = array[3][0][1], sku5 = array[4][0][1];
    
    if (skuNumber !== null) {
        if (skuNumber === sku1) {
            var tempQuant1 = window.prompt("Please enter new quantity");
            if (tempQuant1 !== isNaN || tempQuant1 !== null) {
                array[0][2][1] = tempQuant1;
                localStorage.array = array;
               
            }
        } else if (skuNumber === sku2) {
            var tempQuant2 = window.prompt("Please enter new quantity");
            if (tempQuant2 !== isNaN || tempQuant2 !== null) {
                array[1][2][1] = tempQuant2;
                localStorage.array = array;
               
            }
        } else if (skuNumber === sku3) {
            var tempQuant3 = window.prompt("Please enter new quantity");
            if (tempQuant3 !== isNaN || tempQuant3 !== null) {
                array[2][2][1] = tempQuant3;
                localStorage.array = array;
                
            }
        } else if (skuNumber === sku4) {
            var tempQuant4 = window.prompt("Please enter new quantity");
            if (tempQuant4 !== isNaN || tempQuant4 !== null) {
                array[3][2][1] = tempQuant4;
                localStorage.array = array;
                
            }
        } else if (skuNumber === sku5) {
            var tempQuant5 = window.prompt("Please enter new quantity");
            if (tempQuant5 !== isNaN || tempQuant5 !== null) {
                array[4][2][1] = tempQuant5;
                localStorage.array = array;

            }
        }



    }
}


function main() {
    "use strict";
    showMenu();

    var inventory = [];
    var products1, products2, products3, products4, products5 = []


    

    /*Products List 1*/

    products1 = [["sku", 6666], ["product", "Apple"], ["quantity", 2], ["cost", 1.99]];
    products2 = [["sku", 9000], ["product", "Orange"], ["quantity", 1], ["cost", 1.56]];
    products3 = [["sku", 3333], ["product", "Flamethrower"], ["quantity", 20000], ["cost", 499.99]];
    products4 = [["sku", 4444], ["product", "Hat"], ["quantity", 5], ["cost", 12.99]];
    products5 = [["sku", 5555], ["product", "Jeans"], ["quantity", 10], ["cost", 16.99]];

    inventory = [products1, products2, products3, products4, products5];


    var command, bool = true;

    showMenu();

    while (bool === true) {
        command = window.prompt("Enter a command");
        window.console.log(command);
        command = command.toUpperCase();
        if (command !== null) {
            if (command === "VIEW") {
                viewAllProducts(inventory);
            } else if (command === "UPDATE") {
                updateSkuNumber(inventory);
            } else if (command === "EXIT") {
                bool === false;
                break;
            } else {
                window.alert("Command entered wasn't valid");
            }
        } else {
            break;
        }
    }
    window.console.log("Program terminated");
    window.console.log(inventory);

}

main();
