
// создаем класс квадрат

var box = function () {
	this.side = 10;
};

// добавляем в структуру класса метод расчета площади

box.prototype.area = function (side) {
	return Math.pow(side, 2);
};

// добавляем в структура класса метод рассчета периметра

box.prototype.perimeter = function (side) {
	return 4 * side;
};

// создаем обьект бокс и выводим в консоль площадь и периметр данного обьекта

var object = new box();
console.log("area box = " + object.area(object.side));
console.log("perimeter box = " + object.perimeter(object.side));

// создаем класс круг, наследуем свойства и методы класса квадрат

var circle = function () {
	box.call(this);
};

circle.prototype = new box();

// добавляем в структура класса круг метод расчета площади

circle.prototype.area_circle = function () {
	return Math.PI  * this.area(this.side/2);
};

// добавляем в структуру класса круг метод расчета периметра

circle.prototype.perimeter_circle = function () {
	return Math.PI * this.side;
}; 

// создаем объект класса круг и выводим, используя методы, свойства класса квадрат, периметр и площадь круга

var object2 = new circle();

console.log("area circle = " + object2.area_circle());
console.log("perimeter circle =" + object2.perimeter_circle());

// создаем класс эллипс, наследуем свойства и методы круга

var ellipse = function () {
	circle.call(this);

	this.semimajor_axis = (this.perimeter_circle() / Math.PI) / 2;

	this.semiminor_axis = 3;
};

ellipse.prototype = new circle();

// добавляем в структура класса эллипс метод расчета площади

ellipse.prototype.area_ellipse = function () {
	return Math.PI * this.semimajor_axis * this.semiminor_axis;
};

// добавляем в структуру класса эллипс метод расчета периметра

ellipse.prototype.perimeter_ellipse = function () {
	return 4 * ((Math.PI * this.semimajor_axis * this.semiminor_axis + Math.pow((this.semimajor_axis - this.semiminor_axis) ,2)) /  (this.semimajor_axis + this.semiminor_axis));
};

// создаем объект класса эллипс и выводим, используя методы, свойства класса круг, периметр и площадь эллипса

var object3 = new ellipse();
console.log("area ellipse = " + object3.area_ellipse());
console.log("perimeter_ellipse = " + object3.perimeter_ellipse());

// создаем класс параллелепипед и наследуем свойства и методы класса квадрат

var cube = function () {
	box.call(this);
};

cube.prototype = new box();

// добавляем в структура класса параллелепипед метод расчета площади

cube.prototype.area_cube = function () {
	return 6 * this.area(this.side);
};

// добавляем в структуру класса параллелепипед метод расчета периметра

cube.prototype.perimeter_cube = function () {
	return 12 * this.side;
};

// создаем объект класса параллелепипед и выводим, используя методы, свойства класса квадрат, периметр и площадь параллелепипеда

var object4 = new cube();
console.log("area cube = " + object4.area_cube());
console.log("perimeter cube = " + object4.perimeter_cube());