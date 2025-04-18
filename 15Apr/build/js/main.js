"use strict";
// ? Short Hand Properties
class Persons {
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduceParent() {
        return `hiii I'm ${this.name} and my age is ${this.age} . I Love ${this.hobbies.join(",")}.`;
    }
}
