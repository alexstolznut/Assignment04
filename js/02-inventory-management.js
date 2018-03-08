/*eslint-env browser*/


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



//    if (storage === null) {
        skuArray = skuArray.sort();
        for (var i in skuArray) 
            window.console.log(skuArray[i].join(" ").toString());
        
//    } else {
//        storage = localStorage.getItem("array");
////        skuArray = storage;
////        sku1 = storage[0][0][1];
////    sku2 = storage[1][0][1];
////    sku3 = storage[2][0][1];
////    sku4 = storage[3][0][1];
////    sku5 = storage[4][0][1];
////
////    product1 = storage[0][1][1];
////    product2 = storage[1][1][1];
////    product3 = storage[2][1][1];
////    product4 = storage[3][1][1];
////    product5 = storage[4][1][1];
////
////    quantity1 = "(" + storage[0][2][1] + ")";
////    quantity2 = "(" + storage[1][2][1] + ")";
////    quantity3 = "(" + storage[2][2][1] + ")";
////    quantity4 = "(" + storage[3][2][1] + ")";
////    quantity5 = "(" + storage[4][2][1] + ")";
////
////    cost1 = "$" + storage[0][3][1];
////    cost2 = "$" + storage[1][3][1];
////    cost3 = "$" + storage[2][3][1];
////    cost4 = "$" + storage[3][3][1];
////    cost5 = "$" + storage[4][3][1];
////
////        firstItem = [sku1, product1, quantity1, cost1],
////        secondItem = [sku2, product2, quantity2, cost2],
////        thirdItem = [sku3, product3, quantity3, cost3],
////        fourthItem = [sku4, product4, quantity4, cost4],
////        fifthItem = [sku5, product5, quantity5, cost5],
////        skuArray = [firstItem, secondItem, thirdItem, fourthItem, fifthItem];
////        window.console.log(skuArray);
////        skuArray = skuArray;
////        window.console.log(skuArray[0].join(" "). toString());
////        for (var x in skuArray) {
////            window.console.log(skuArray[x].toString());
////        }
//    }

}


function updateSkuNumber(array) {
    "use strict";
    var skuNumber = Number(window.prompt("Please enter sku number"));
    var sku1 = array[0][0][1];
    var sku2 = array[1][0][1];
    var sku3 = array[2][0][1];
    var sku4 = array[3][0][1];
    var sku5 = array[4][0][1];
    window.console.log(skuNumber, sku1, sku2, sku3, sku4, sku5);
    if (skuNumber !== null) {
        if (skuNumber === sku1) {
            var tempQuant1 = window.prompt("Please enter new quantity");
            if (tempQuant1 !== isNaN || tempQuant1 !== null) {
                array[0][2][1] = tempQuant1;
                localStorage.array = array;
                //                return array.splice(0, 2, 1, tempQuant1);
            }
        } else if (skuNumber === sku2) {
            var tempQuant2 = window.prompt("Please enter new quantity");
            if (tempQuant2 !== isNaN || tempQuant2 !== null) {
                array[1][2][1] = tempQuant2;
                localStorage.array = array;
                //                return array.splice(1, 2, 1, tempQuant2);
            }
        } else if (skuNumber === sku3) {
            var tempQuant3 = window.prompt("Please enter new quantity");
            if (tempQuant3 !== isNaN || tempQuant3 !== null) {
                array[2][2][1] = tempQuant3;
                localStorage.array = array;
                //                return array.splice(2, 2, 1, tempQuant3);
            }
        } else if (skuNumber === sku4) {
            var tempQuant4 = window.prompt("Please enter new quantity");
            if (tempQuant4 !== isNaN || tempQuant4 !== null) {
                array[3][2][1] = tempQuant4;
                localStorage.array = array;
                //                return array.splice(3, 2, 1, tempQuant4);
            }
        } else if (skuNumber === sku5) {
            var tempQuant5 = window.prompt("Please enter new quantity");
            if (tempQuant5 !== isNaN || tempQuant5 !== null) {
                array[4][2][1] = tempQuant5;
                localStorage.array = array;

            }
        }
        window.console.log(array);


    }
}


function main() {
    "use strict";
    showMenu();

    var inventory = [];
    var products1, products2, products3, products4, products5 = []


    //, products2, products3, products4, products5 = [];

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
        //        command = command.toUpperCase();
        if (command !== null) {
            if (command === "view") {
                viewAllProducts(inventory);
            } else if (command === "update") {
                updateSkuNumber(inventory);
            } else if (command === "exit") {
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
