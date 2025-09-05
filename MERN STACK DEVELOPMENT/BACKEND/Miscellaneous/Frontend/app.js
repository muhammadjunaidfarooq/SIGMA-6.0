class Box {
    constructor(name, l, b){
        this.name = name;
        this.l = l;
        this.b = b;
    }
    area() {
        let area = this.l * this.b;
        console.log(`${this.name} is : ${area}`);
    }
}

class Square extends Box {
    constructor(name, a) {
        super(name, a, a);
    }
}

let b1 = new Square ("square", 2);
