// 语法糖
class Point {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    static distance(a, b) {
        if (a instanceof Point && b instanceof Point) {
            return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2 + (a.z - b.z) ** 2).toFixed(2);
        }
        console.error('a or b is not instanceof Point');
    }

    toString(){
        return '(' + this.x + ', ' + this.y + ', ' + this.z + ')';
    }
    superMethod() {
        console.log('superMethod');
    }
}

class ColorPoint extends Point {
    constructor(x, y, z, color) {
        super(x, y, z);
        this.color = color;
    }

    get gx() {
        return this.color;
    }
    set gx(value) {
        this.color = 'blue';
    }

    toString() {
        return super.toString() + ' in ' + this.color;
    }
}

// Test Code
let point1 = new ColorPoint(3, 4, 5, 'red');
let point2 = new ColorPoint(1, 2, 3, 'blue');
point1.toString();
point1.superMethod();
Point.distance(point1, point2);