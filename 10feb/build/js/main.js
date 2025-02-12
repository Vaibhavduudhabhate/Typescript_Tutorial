"use strict";
class coder {
    constructor(name, music, age, lang = "Typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `hello, I'm ${this.age}`;
    }
}
const Dave = new coder('Dave', 'Rock', 42);
console.log(Dave.getAge());
// console.log(Dave.age)
// console.log(Dave.lang)
class webDev extends coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sara = new webDev('Mac', "Sara", 'Lofi', 25);
console.log(Sara.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} ${this.instrument}`;
    }
}
const Page = new Guitarist("Jimmy", "guitar");
console.log(Page.play('strums'));
////////////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');
console.log(Peeps.count);
////////////////////////////////////
class Bands {
    constructor() {
        this.datastate = [];
    }
    get data() {
        return this.datastate;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === "string")) {
            this.datastate = value;
        }
        else
            throw new Error('Param is not an array of strings');
    }
}
const MyBands = new Bands();
MyBands.data = ['Neil Young', 'Led Zep'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'zz top'];
console.log(MyBands.data);
// MyBands.data = ['Van Halen', 5150]
