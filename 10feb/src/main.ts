class coder{
    // name:string
    // music:string
    // age:number
    // lang:string
    secondLang! : string

    constructor(
       public readonly name:string,public music:string,private age:number,protected lang:string
    ){
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }
}