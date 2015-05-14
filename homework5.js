
// hello this is test

var box = function () {

	this.side = 10;

	// метод определяющий площадь
	
	this.area = function () {
		return Math.pow(this.side, 2);
	};
	
	// метод определяющий периметр
	
	this.perimeter = function () {
		return 4 * this.side;
	};
};

var circle = function () {

	box.call(this);

	this.radius = this.side / 2;
	
	// метод определяющий площадь
	
	this.area = function () {
		return Math.PI * Math.pow(this.radius, 2);
	};
	
	// метод определяющий периметр
	
	this.perimeter = function () {
		return 2 * Math.PI * this.radius;
	};
};

var ellipse = function () {
	
	circle.call(this);
	
	this.semimajor_axis = this.radius;
	
	this.semiminor_axis = 3;
	
	// метод определяющий площадь

	this.area = function () {
		return Math.PI * this.semimajor_axis * this.semiminor_axis;
	};
	
	// метод определяющий периметр
	
	this.perimeter = function () {
		return 4 * ((Math.PI * this.semimajor_axis * this.semiminor_axis + Math.pow((this.semimajor_axis - this.semiminor_axis) ,2)) /  (this.semimajor_axis + this.semiminor_axis));
	};	
	
};

var square = function(){

	box.call(this);

	// метод определяющий площадь
	
	this.area = function () {
		return 6 * Math.pow(this.side, 2);
	};
	
	// метод определяющий периметр
	
	this.perimeter = function () {
		return 12 * this.side;
	};

};

var object = new box();
console.log("площадь квадрата = " + object.area());
console.log("периметр квадрата = " +object.perimeter());

var object1 = new circle();
console.log("площадь круга = " + object1.area());
console.log("периметр круга = " +object1.perimeter());

var object2 = new ellipse();
console.log("площадь эллипса = " + object2.area());
console.log("периметр эллипса = " + object2.perimeter());

var object3 = new square();
console.log("площадь параллелепипеда = " + object3.area());
console.log("периметр параллелепипеда = " + object3.perimeter());






