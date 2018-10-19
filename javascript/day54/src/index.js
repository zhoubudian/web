class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    showName(){
        console.log(`我是${this.name},今年${this.age}`);
    }
}
let p = new  Person("Alice",20);
p.showName();

class Coder extends Person{
  constructor(name,age,compay){
      super(name,age);
      this.compay = compay;
  }
  showCoder(){
      console.log(`我是${this.name},今年${this.age},在${this.compay}公司`);
  }
}
let c = new Coder("Alic",20,"BAT");
c.showCoder();