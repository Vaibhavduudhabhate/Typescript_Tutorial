// ? Short Hand Properties

class Persons {
    constructor(
        public name : string,
        public age :number,
        protected hobbies : string[]
    ){}

    introduceParent():string{
        return `hiii I'm ${this.name} and my age is ${this.age} . I Love ${this.hobbies.join(",")}.` 
    }
}