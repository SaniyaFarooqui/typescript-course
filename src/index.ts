let saniya : string = "Saniya"
console.log(saniya)

let sufiya :number = 12
console.log(sufiya)

let alfiyadata :boolean = true
  let saniyavalue : Array<string> = ["s","a","n","i","y","a"]
console.log(saniyavalue)
let saniyanumber : Array<number> = [1,2,3,4,5,6,7,8,9,10]
console.log(saniyanumber)

interface fullname{
    name:string,
    surname:string,
    age:number
}

let objectvalue : fullname = {
    name:"arbaz",
    surname:"Khan",
    age:21
}

function SaniyaMethod(v1 : string | string[] | number ,v2:string) : string{
    return v1+" "+v2
}
let valueDatatype = SaniyaMethod("Arbaz","Khan");
console.log(valueDatatype)

//typescript for arrow function
let SaniyaMethod2 = (value1:number,value2:number) : number => {
    return value1+value2
}
let data = SaniyaMethod2(12,12);
console.log(data)

//optional ( ? )
interface Saniya{
    name : string,
    surname : string,
    age ? : number
}

let arbaz :Saniya = {
    name:"arbaz",
    surname:"Khan",
} 

//Generics Type
interface Arbaz<T>{
    name:string,
    age:number
}

let SaniyaValue : Arbaz<object> = {
    name:"Arbaz",
    age:21
}

interface SufiyaType{
    x:number,
    y:number
}

let SufiyaMethod = (sufia:SufiyaType) => {
    console.log(`${sufia.x}" " ${sufia.y}`)
}
let answer = SufiyaMethod({x:21,y:22});