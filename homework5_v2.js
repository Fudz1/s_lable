
// ������� ����� �������

var box = function () {
	this.side = 10;
};

// ��������� � ��������� ������ ����� ������� �������

box.prototype.area = function (side) {
	return Math.pow(side, 2);
};

// ��������� � ��������� ������ ����� �������� ���������

box.prototype.perimeter = function (side) {
	return 4 * side;
};

// ������� ������ ���� � ������� � ������� ������� � �������� ������� �������

var object = new box();
console.log("area box = " + object.area(object.side));
console.log("perimeter box = " + object.perimeter(object.side));

// ������� ����� ����, ��������� �������� � ������ ������ �������

var circle = function () {
	box.call(this);
};

circle.prototype = new box();

// ��������� � ��������� ������ ���� ����� ������� �������

circle.prototype.area_circle = function () {
	return Math.PI  * this.area(this.side/2);
};

// ��������� � ��������� ������ ���� ����� ������� ���������

circle.prototype.perimeter_circle = function () {
	return Math.PI * this.side;
}; 

// ������� ������ ������ ���� � �������, ��������� ������, �������� ������ �������, �������� � ������� �����

var object2 = new circle();

console.log("area circle = " + object2.area_circle());
console.log("perimeter circle =" + object2.perimeter_circle());

// ������� ����� ������, ��������� �������� � ������ �����

var ellipse = function () {
	circle.call(this);

	this.semimajor_axis = (this.perimeter_circle() / Math.PI) / 2;

	this.semiminor_axis = 3;
};

ellipse.prototype = new circle();

// ��������� � ��������� ������ ������ ����� ������� �������

ellipse.prototype.area_ellipse = function () {
	return Math.PI * this.semimajor_axis * this.semiminor_axis;
};

// ��������� � ��������� ������ ������ ����� ������� ���������

ellipse.prototype.perimeter_ellipse = function () {
	return 4 * ((Math.PI * this.semimajor_axis * this.semiminor_axis + Math.pow((this.semimajor_axis - this.semiminor_axis) ,2)) /  (this.semimajor_axis + this.semiminor_axis));
};

// ������� ������ ������ ������ � �������, ��������� ������, �������� ������ ����, �������� � ������� �������

var object3 = new ellipse();
console.log("area ellipse = " + object3.area_ellipse());
console.log("perimeter_ellipse = " + object3.perimeter_ellipse());

// ������� ����� �������������� � ��������� �������� � ������ ������ �������

var cube = function () {
	box.call(this);
};

cube.prototype = new box();

// ��������� � ��������� ������ �������������� ����� ������� �������

cube.prototype.area_cube = function () {
	return 6 * this.area(this.side);
};

// ��������� � ��������� ������ �������������� ����� ������� ���������

cube.prototype.perimeter_cube = function () {
	return 12 * this.side;
};

// ������� ������ ������ �������������� � �������, ��������� ������, �������� ������ �������, �������� � ������� ���������������

var object4 = new cube();
console.log("area cube = " + object4.area_cube());
console.log("perimeter cube = " + object4.perimeter_cube());