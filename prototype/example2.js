// 객체 생성자 상속 받는법
/*
상속 : 
*/

// function Animal(type, name, sound){
//     this.type = type;
//     this.name = name; 
//     this.sound = sound;
//     // this.say = function(){
//     //     console.log(this.sound);
//     // }
// };

// Animal.prototype.say = function() {
//     console.log(this.sound);
// }
// const dog = new Animal('강아지', '멍멍이', '멍멍');
// const cat = new Animal('고양이', '냐옹이', '냐옹');

// function Dog(name, sound) {
//     this.type = '강아지';
//     this.name = name;
//     this.sound = sound;
// };

// function Cat(name, sound) {
//     this.type = '고양이';
//     this.name = name;
//     this.sound = sound;
// }

// Dog.prototype.say = function(){
//     console.log(this.sound);
// }
// Cat.prototype.say = function(){
//     console.log(this.sound);
// }

// const dog = new Dog('멍멍이', '멍멍');
// const cat = new Cat('냐옹이', '냐옹');


function Animal(type, name, sound) { //객체 생성자
    this.type = type;
    this.name = name;
    this.sound = sound;
}

//공유되는 함수와 값을 설정 
Animal.prototype.say = function(){ //프로토타입 Say 함수 집어 넣어줬고
    console.log(this.sound);
}

// 재사용, 상속
function Dog(name, sound) {
    Animal.call(this, '개', name, sound); //call이라는 함수로 재사용할 대상을 불러준다
}

function Cat(name, sound) {
    Animal.call(this, '고양이', name, sound);
}

Dog.prototype = Animal.prototype;
Cat.prototype = Animal.prototype;

const dog = new Animal('멍멍이', '멍멍'); // 객체생성자를 new 키워드를 통해 호출시 새로운 객체를 만들게 되고, 값을 넣거나, 프로토 타입으로 함수를 넣어서 기능구현 가능하게 하는것
const cat = new Animal('냐옹이', '냐옹');

dog.say();
cat.say();