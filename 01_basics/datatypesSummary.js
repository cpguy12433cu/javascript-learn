//kis tarike se data ko memeory me rakha jata hai aur tarike se uska access hota hai 

//primitive(call by val)

// 7 types: string ,number ,boolean , null , undefined, symbol(make unique), bigInt 

//Non-primitive (reference type ) array, obj , functions
//all non-primitive type has a  function return type and (* function has function object return type)

//js is dynamically typed 
//lets say 
//const a=45;
//a=true;

//symbol type
const id=Symbol('123'); //it has a return of symbol data type 
const anid=Symbol('123');
//can bot will  be same ? no 
console.log(id===anid);

const bigNo=387483448978347878737723897393879388947875665737534444577777777777777777777777n;
console.log(bigNo);
console.log(typeof bigNo);

//non primitive 
const Pankaj=["hii", "hey", "hello"];
console.log(typeof Pankaj);

let myObj={
    name:"Pankaj",
    age:22,
    class:"2nd",
}
console.log(typeof myObj);

//can we treat a fn as an var ? Yes

const myfn = function() {
    console.log("I treat a function as a variable");
};

console.log(typeof myfn);