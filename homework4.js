

var Person = [
{ name: "Helen", last_name: "O'Hara", gender: "female", age: 32, home_town: "Dublin" },
{ name: "Karl", last_name: "Wolf", gender: "male", age: 17, home_town: "Nurnberg" },
{ name: "Anna", last_name: "Markova", gender: "female", age: 8, home_town: "Moscow" },
{ name: "Lisa", last_name: "Smith", gender: "female", age: 20, home_town: "Chicago" }
];

// создаем класс операций над юнитами

// new star help 



var User = function(name, last_name, birth_day, gender, home_town){
	
	this.name = name;
	this.last_name = last_name;
	this.birth_day = birth_day;
	this.gender = gender;
	this.home_town = home_town;

	// считаем количество лет 

	this.getAge = function(birth_day){

		birth_day ? birth_day : birth_day = this.birth_day;  

		var mass = birth_day.split(".");
		var date = new Date();

		if ((date.getMonth() + 1) > mass[1]){

			return(date.getFullYear() - mass[2]);

		} else {

			if (date.getDate() >  mass[0] ){

				return(date.getFullYear() - mass[2] - 1);

			} else {

				return(date.getFullYear() - mass[2]);

			};
		};
	};

	// пушим в массив наши новые поля

	this.add_in_array = function(array){
		array[array.length] = {
			name : this.name,
			last_name : this.last_name,
			age : this.getAge(),
			gender : this.gender,
			home_town : this.home_town
		};
	};
};

// фильтруем массив юнитов по возрасту и половому признаку

function filter(array_of_person, f_gender, f_age, callback){

	var in_array = array_of_person;
	var array_result = new Array();

	in_array.forEach(function(item, index){

		if (in_array[index].gender == f_gender && in_array[index].age > f_age){

			array_result.push(in_array[index]);

		};

	});

	callback.call(this, array_result);
};

var unit1 = new User("Oleg", "Levitskiy", "13.04.1989", "male", "Kharkiv");

unit1.add_in_array(Person);

var unit2 = new User("Jon", "Ray", "25.01.1966", "male", "Boston");

unit2.add_in_array(Person);

filter(Person, "male", 18, function(result){
	console.log(result);
});




