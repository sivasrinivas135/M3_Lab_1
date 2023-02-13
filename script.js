//Q_1

window.console.log("\n");
window.console.log(" Question 1 ");
window.console.log("\n");

var a=["The Platform","Squid Game","The 100","Alice in the Border land","Intern"];
window.console.log(a[1]);

//Q_2

window.console.log("\n");
window.console.log(" Question 2 ");
window.console.log("\n");

var movies = new Array(5);
movies[0]="The Platform";
movies[1]="Squid Game";
movies[2]="The 100";
movies[3]="Alice in the Border land";
movies[4]="Intern";
window.console.log(movies[0]);

//Q_3

window.console.log("\n");
window.console.log(" Question 3 ");
window.console.log("\n");

movies.splice(2, 0, "Friends");
window.console.log(movies.length);

//Q_4

window.console.log("\n");
window.console.log(" Question 4 ");
window.console.log("\n");

var movies_1 = [];
movies_1[0]="The Platform";
movies_1[1]="Squid Game";
movies_1[2]="The 100";
movies_1[3]="Alice in the Border land";
movies_1[4]="Intern";
//movies_1.shift(0);
delete movies_1[0];
window.console.log(movies_1);

//Q_5

window.console.log("\n");
window.console.log(" Question 5 ");
window.console.log("\n");

var movies_2 = [];
movies_2[0]="The Platform";
movies_2[1]="Squid Game";
movies_2[2]="The 100";
movies_2[3]="Alice in the Border land";
movies_2[4]="Intern";
movies_2[5]="Hello";
movies_2[6]="Friends";
for (var i in movies_2) {
  window.console.log(movies_2[i]);
}

//Q_6
window.console.log("\n");
window.console.log("Question 6");
window.console.log("\n");
for(var i of movies_2) {
  "use strict";
  window.console.log(i);
}

//Q_7 

window.console.log("\n");
window.console.log(" Question 7 ");
window.console.log("\n");
movies_2.sort();
for(var i of movies_2) {
  "use strict";
  window.console.log(i);
}

//Q_8 

window.console.log("\n");
window.console.log(" Question 8 ");
window.console.log("\n");

var movies_2 = ["The Platform","Squid Game","The 100","Alice in the Border land","Intern","Hello","Friends"];
var leastFavMovies = ["Hey you ","Nothing ","Coming "];

window.console.log("Movies I like:");

window.console.log("\n");
for(var i of movies_2) {
  "use strict";
  window.console.log(i);
}

window.console.log("\n");
window.console.log("Movies I regret watching:");

window.console.log("\n");
for(var i of leastFavMovies) {
  "use strict";
  window.console.log(i);
}

//Q_9

window.console.log("\n");
window.console.log(" Question 9 ");
window.console.log("\n");

var Allmovies = movies_2.concat(leastFavMovies);
Allmovies.sort().reverse();
for(var i of Allmovies) {
  "use strict";
  window.console.log(i);
}

//Q_10

window.console.log("\n");
window.console.log(" Question 10");
window.console.log("\n");
//window.console.log(Allmovies.pop());
var lastmovie = Allmovies.slice(-1)[0];
window.console.log(lastmovie);

//Q_11

window.console.log("\n");
window.console.log(" Question 11");
window.console.log("\n");

window.console.log(Allmovies.shift());

//Q_12

window.console.log("\n");
window.console.log(" Question 12");
window.console.log("\n");

var movies_2 = ["The Platform","Squid Game","The 100","Alice in the Border land","Intern","Hello","Friends"];
var leastFavMovies = ["Hey you ","Nothing ","Coming "];
var Allmovies = movies_2.concat(leastFavMovies);
Allmovies.sort().reverse();
var leastFavMoviesindices = [];

Allmovies.forEach((movie, index) => {
  if (leastFavMovies.includes(movie)) {
    leastFavMoviesindices.push(index); }
});

var goodmovies = ["Star wars","Harry Porter","The Magic land"]

leastFavMoviesindices.forEach((index) => {
    Allmovies[index] = goodmovies.shift();
});

for (var index = 0; index < Allmovies.length; index++) {
    "use strict";
    window.console.log(Allmovies[index] );
}
window.console.log("\n");


//Q_13

window.console.log("\n");
window.console.log(" Question 13");
window.console.log("\n");

var movies3 = [["The Platform", 1], ["Squid Game", 2], ["Alice in the Border land", 3], ["Intern", 4], ["Friends", 5]];

var movieNames = movies3.filter(function(movie) {
  return typeof movie[0] === "string";
});

window.console.log(movieNames.map(movie => movie[0]));


//Q_14

window.console.log("\n");
window.console.log(" Question 14");
window.console.log("\n");

var employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];

var showEmployee = function(employees) {
  window.console.log("Employees: ");
  window.console.log("\n"); 
  employees.forEach(function(employee) {
    window.console.log(employee);
  });
};

showEmployee(employees);

//Q_15

window.console.log("\n");
window.console.log(" Question 15");
window.console.log("\n");

var values = [58, '', 'abcd', true, null, false, 0];

var filterValues = function(values){
    return values.filter(function(v) {
  return v !== false && v !== null && v !== 0  && v !== "";
});
};

window.console.log(filterValues([58, '', 'abcd', true, null, false, 0]));


//Q_16

window.console.log("\n");
window.console.log(" Question 16");
window.console.log("\n");


var RandomNumber = function(v) {
  return v[Math.floor(Math.random() * v.length)];
};
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
window.console.log(RandomNumber(nums));

//Q_17

window.console.log("\n");
window.console.log(" Question 17");
window.console.log("\n");

var LargestNumber = function(v){
    return Math.max(...v);
}

var nums = [102 , 13, 20 , 3 , 1001 ,0 , 7 ];
window.console.log(LargestNumber(nums));












