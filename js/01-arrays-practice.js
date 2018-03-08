/*eslint-env browser*/
//STEP 1
//var array = ["Land Before Time", "Land Before Time 2", "Land Before Time 3", "Land Before Time 4", "Land Before Time 5"];
//window.console.log(array[1]);
//STEP 2
//var movies = new Array(5);
//movies[0] = "Land Before Time";
//movies[1] = "Land Before Time 2";
//movies[2] = "Land Before Time 3";
//movies[3] = "Land Before Time 4";
//movies[4] = "Land Before Time 5";
//window.console.log(movies[0]);
//STEP 3
//var movies = new Array(5);
//movies[0] = "Land Before Time";
//movies[1] = "Land Before Time 2";
//movies[2] = "Land Before Time 3";
//movies[3] = "Land Before Time 4";
//movies[4] = "Land Before Time 5";
//movies.push("Land Before Time 6");
//window.console.log(movies.length);

//STEP 4

//var movies = ["Land Before Time", "Land Before Time 2", "Land Before Time 3", "Land Before Time 4", "Land Before Time 5"];
//delete movies[0];
//window.console.log(movies);
//STEP 5

//var movies = ["Land Before Time", "Land Before Time 2", "Land Before Time 3", "Land Before Time 4", "Land Before Time 5", "Land Before Time 6", "Land Before Time 7"];
//for(var i = 0; i < 7; i = i + 1){
//    window.console.log(movies[i]);
//}


//STEP 6
//var movies = ["Land Before Time", "Land Before Time 2", "Land Before Time 3", "Land Before Time 4", "Land Before Time 5", "Land Before Time 6", "Land Before Time 7"];
//for(var i in movies){
//    window.console.log(movies[i]);
//}

//STEP 7
//var movies = ["Land Before Time 2", "Land Before Time", "Land Before Time 3", "Land Before Time 4", "Land Before Time 5", "Land Before Time 6", "Land Before Time 7"];
//var array = [];
//for(var i in movies){
//    array.push(movies[i]);
//    if (array.length === movies.length){
//    window.console.log(array.sort());
//    }
//}


//STEP 8
//var movies = ["Land Before Time 2", "Land Before Time ", "Land Before Time 3", "Land Before Time 4", "Land Before Time 5", "Land Before Time 6", "Land Before Time 7"];
//var array = [];
//var leastFavMovies = ["Dumb and Dumber", "Dumb and Dumber 3", "Dumb and Dumber 2"];
//for (var i in movies) {
//    array.push(movies[i]);
//    array.sort();
//   
//    if (array.length === movies.length) {
//        window.console.log("Movies I like: ");
//        window.console.log("");
//        for (i in array) {
//            window.console.log(array[i]);
//        }
//        array = [];
//        for ( var x in leastFavMovies){
//            array.push(leastFavMovies[x]);
//            array.sort();
//            if (array.length === leastFavMovies.length){
//                window.console.log("");
//                window.console.log("Movies I regret watching:");
//                window.console.log("");
//                for (i in array){
//                    window.console.log(array[i]);
//                }
//            }
//        }
//    }
//}

//STEP 9

//var movies = ["Land Before Time 2", "Land Before Time ", "Land Before Time 3", "Land Before Time 4", "Land Before Time 5", "Land Before Time 6", "Land Before Time 7"];
//var leastFavMovies = ["Dumb and Dumber", "Dumb and Dumber 3", "Dumb and Dumber 2"];
//movies = movies.concat(leastFavMovies);
//window.console.log(movies.sort().reverse());

//STEP 10

//function array() {
//    var movies = ["Land Before Time 2", "Land Before Time ", "Land Before Time 3", "Land Before Time 4", "Land Before Time 5", "Land Before Time 6", "Land Before Time 7"];
//    var leastFavMovies = ["Dumb and Dumber", "Dumb and Dumber 3", "Dumb and Dumber 2"];
//    movies = movies.concat(leastFavMovies);
//    movies = movies.sort().reverse();
//    var lm = movies.length;
//    return window.console.log(movies[lm-1]);
//}
//array();
//STEP 11
//function array() {
//    var movies = ["Land Before Time 2", "Land Before Time ", "Land Before Time 3", "Land Before Time 4", "Land Before Time 5", "Land Before Time 6", "Land Before Time 7"];
//    var leastFavMovies = ["Dumb and Dumber", "Dumb and Dumber 3", "Dumb and Dumber 2"];
//    movies = movies.concat(leastFavMovies);
//    movies = movies.sort().reverse();
//    return window.console.log(movies[0]);
//}
//array();
//STEP 12
//function array() {
//    var movies = ["Land Before Time 2", "Land Before Time ", "Land Before Time 3", "Land Before Time 4", "Land Before Time 5", "Land Before Time 6", "Land Before Time 7"];
//    var leastFavMovies = ["Dumb and Dumber", "Dumb and Dumber 3", "Dumb and Dumber 2"];
//    movies = movies.concat(leastFavMovies);
//    movies = movies.sort().reverse();
//    for(var i in leastFavMovies){
//        movies[movies.indexOf(leastFavMovies[i])] = window.prompt("What's a movie you like?");
//    }
//
//   window.console.log(movies);
//
//    
//}
//array();

//STEP 13

//var employee1 = [], employee2 = [];
//employee1["id"] = 111;
//employee1["name"] = "Jordan";
//employee1["title"] = "Manager";
//employee1["department"] = "Shoes";
//employee1["currentEmployee"] = true;
//
//employee2["id"] = 222;
//employee2["name"] = "Sarah";
//employee2["title"] = "CEO";
//employee2["department"] = "Corporate";
//employee2["currentEmployee"] = true;
//
//var employees = [];
//employee1.push(employee2);
//employees.push(employee1);
//window.console.log(employees);

//STEP 14

//var employee1 = [], employee2 = [];
//employee1["id"] = 111;
//employee1["name"] = "Jordan";
//employee1["title"] = "Manager";
//employee1["department"] = "Shoes";
//employee1["currentEmployee"] = true;
//
//employee2["id"] = 222;
//employee2["name"] = "Sarah";
//employee2["title"] = "CEO";
//employee2["department"] = "Corporate";
//employee2["currentEmployee"] = true;
//
//var employees = [employee1, employee2];
//
//var i;
//
//
//for (i = 0; i < employees.length; i +=1) {
//    window.console.log(employees[i]["id"]);
//    window.console.log(employees[i]["name"]);
//    window.console.log(employees[i]["title"]);
//    window.console.log(employees[i]["department"]);
//    window.console.log(employees[i]["currentEmployee"]);
//}




//STEP 15

//var employee1 = [],
//    employee2 = [],
//    employee3 = [];
//employee1["id"] = 111;
//employee1["name"] = "Jordan";
//employee1["title"] = "Manager";
//employee1["department"] = "Shoes";
//employee1["currentEmployee"] = true;
//
//employee2["id"] = 222;
//employee2["name"] = "Sarah";
//employee2["title"] = "CEO";
//employee2["department"] = "Corporate";
//employee2["currentEmployee"] = true;
//
//employee3["id"] = 333;
//employee3["name"] = "Josh";
//employee3["title"] = "Cashier";
//employee3["department"] = "Register";
//employee3["currentEmployee"] = false;
//
//
//var employees = [employee1, employee2, employee3];
//
//var i;
//
//
//for (i = 0; i < employees.length; i += 1) {
//    if (employees[i]["currentEmployee"] === false) {
//        
//
//           window.console.log(employees[i]["name"] + " is not employeed")
//       
//    } else {
//         window.console.log(employees[i]["id"]);
//            window.console.log(employees[i]["name"]);
//            window.console.log(employees[i]["title"]);
//            window.console.log(employees[i]["department"]);
//            window.console.log(employees[i]["currentEmployee"]);
//    }
//}



//STEP 16

//var movies = [["The Hangover", 5], ["Take Me Home Tonight", 4], ["Mulan", 5], ["The Shape of Water", 2], ["Coco", 5]];
//
//for (var name in movies){
//    var movieNames = movies[name].filter(function(item){
//        "use strict";
//        return typeof item === "string";
//    })
//    
//    window.console.log(movieNames)
//}

//STEP 17
//var array = ["Jordan", "Sasha", "Scott", "Susan", "Cindy", "Brussel", "Russel"];
//
//function breakArray(array){
//    window.console.log("Employees:");
//    window.console.log("");
//    for(var i in array){
//        window.console.log(array[i]);
//    }
//}
//
//breakArray(array);
//STEP 18

//var array = [0, false, null, "alex", "hi", 21];
//
//function filterArray(array){
//    for ( var i in array){
//        if((array[i] === 0) || (array[i] === false) || (array[i] === null)){
//            window.console.log("");
//        } else {
//            window.console.log(array[i]);
//        }
//    }
//}
//
//filterArray(array);
//STEP 19

//var array = [1,2,3,4,5,6,7,8,9,10];
//
//function randomArray(array){
//    var arrayLength = array.length;
//    var randomNumber = Math.random()* arrayLength;
//    randomNumber = Math.round(randomNumber);
//    return window.console.log(array[randomNumber]);
// 
//}
//
//randomArray(array);
//STEP 20

//var array = [5,10,40,2,3,20];
//function maxArray(array){
//   
//    return window.console.log(Math.max.apply(Math, array));
//}
//
//maxArray(array);