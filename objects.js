let name = 'Rajesh';
let age = 27;
let agefield = "age";
let obj = {
    name: name,
    [agefield]: age,
    "greet" () {
        console.log(this.name + "  " + this.age);
    }
}
console.log(obj);
obj['greet']();