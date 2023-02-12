"use srtict";
let users = ["Baxtiyor", "Doniyor", "Husniddin", "Ali"],
  numbers = [13, 45, 54, 2, 5, 40, 34],
  userName = "Baxtiyor",
  progremmers = [
    { name: "Mark Zuckberk", app: "Telegram" },
    { name: "Bill Geits", app: "Microsoft" },
    { name: "Larry Page", app: "Google" },
  ];

//length
console.log("---length---");
console.log(users.length);
console.log(userName.length);

//forEach
console.log("---forEach---");
users.forEach((user) => console.log(user + "lar"));
numbers.forEach((number) => console.log(number * 2));

// Map
console.log("---Map---");
let userl2 = users.map((user) => user + "2");
console.log(userl2);
let numers10 = numbers.map((number) => number * 10);
console.log(numers10);

// Filter
console.log("---Filter---");
let filteredNumber = numbers.filter((number) => number < 15);
console.log(filteredNumber);
let filteredUsers = users.filter((user) => user.length < 7);
console.log(filteredUsers);
let filteredProgrammers = progremmers.filter(
  (programmer) => programmer.name == "Larry Page"
);
console.log(filteredProgrammers);

//Some
console.log("---Some---");
let chercker = numbers.some((number) => number === 13);
console.log(chercker);
let chercker2 = numbers.every((number) => number > 5);
console.log(chercker2);

//Includes
console.log("---Includes---");
let latter = userName.includes("a");
console.log(latter);
let checkUsers = users.some((user) => user.includes("f"));
console.log(checkUsers);

//Push
console.log("---Push---");
users.push("Muhammad");
users.push("Bek");
let pushedElement = users.push("Ronaldo");
console.log(users);
console.log(`Pushed element: ${pushedElement}`);

//Pop
console.log("---Pop---");
users.pop();
console.log(users);
let PopedElement = users.pop();
console.log(users);
console.log(`Poped element: ${PopedElement}`);

//Unshift
console.log("---Unshift---");
users.unshift("Messi");
console.log(users);
let unshiftedElement = users.unshift("Levandovskiy");
console.log(users);
console.log(`Unshifted element ${unshiftedElement}`);

//Shift
console.log("---Shift---");
users.shift();
console.log(users);
let shiftedElement = users.shift();
console.log(users);
console.log(`Shifted element: ${shiftedElement}`);

//indexOf
console.log("---indexOf---");
let indexOfUser = users.indexOf("Doniyor");
console.log(indexOfUser);
let indexOfNumbers = numbers.indexOf(5);
console.log(indexOfNumbers);

//findIdex
console.log("---findIndex---");
let findIndexProgrammers = progremmers.findIndex(
  (programmer) => programmer.app === "Microsoft"
);
console.log(findIndexProgrammers);

//Concat
console.log("---concat---");
let concated = users.concat(numbers, "salom");
console.log(concated);

//Spread operator
console.log("---spread operator---");
let concatedArrays = [...users, ...numbers, userName, ...progremmers];
console.log(concatedArrays);

//split
console.log("---split---");
let newText = "fintech inovation hub";
console.log(newText);
let splitedText = newText.split("");
console.log(splitedText);

//reverse
console.log("---reverse---");
let reversedText = splitedText.reverse();
console.log(reversedText);

//join
console.log("---join---");
let joinedText = reversedText.join("");
console.log(joinedText);

//chain method
console.log("---chain method---");
let text2 = "salom";
console.log(text2);
let retext2 = text2.split("").reverse().join("");
console.log(retext2);

//toString method
console.log("---toString method---");
let usersToString = users.toString();
console.log(usersToString);

//Splice method
console.log("---Splice method---");
console.log(users);
users.splice(0, 1, "Ronaldo", "Messi", "Jak Ma");
console.log(users);

//Slice method
console.log("---Slice method---");
let slicedUsers = users.slice(0, 2);
console.log(slicedUsers);

//Dynamic type js
console.log("-------Dynamic type js-------");
function a() {
  console.log("Hello Function");
}
a();

a = 5;
console.log(a);
a = "hello";
console.log(a);
a = true;
console.log(a);

//Obejects
console.log("------Objects-----");
const objectMe = {
  name: "Baxtiyor",
  age: 27,
  student: true,
};
console.log(objectMe);

//add information to object with dot notation
console.log("-------dot notation------");
objectMe.gitHub = "@admiral";
console.log(objectMe);

//delete operator with dot notation
console.log("------delete operator with dot notation------");
delete objectMe.age;
console.log(objectMe);

//add information to object with bracket notation
console.log("------bracket notation------");
objectMe["city"] = "Tashkent";
console.log(objectMe);

let techlogy1 = "HTML";
objectMe[techlogy1] = true;

let techlogy2 = "CSS";
objectMe[techlogy2] = true;

let techlogy3 = "JS";
objectMe[techlogy3] = true;

let techlogy4 = "REACT JS";
objectMe[techlogy4] = false;

let techlogy5 = "NODE JS";
objectMe[techlogy5] = false;

//delete with bracket notation
console.log("------delete with bracket notation------");
delete objectMe["NODE JS"];

console.log(objectMe);

//short hands in objects
console.log("------short hands------");
let firsName = "Doniyor";
let lastName = "Abdullayev";

let userProfile = {
  firsName,
  lastName,
  age: 22,
};
console.log(userProfile);

//Global objects
console.log("------Global objects------");
console.log(window);
console.log(globalThis);
window.console.log("hello window");
globalThis.console.log("hello globalThis");

//object methods
console.log("------object methods------");

//object keys
console.log("------object keys------");
let objectKeys = Object.keys(userProfile);
console.log(objectKeys);

//object values
console.log("------object values------");
let objectValues = Object.values(userProfile);
console.log(objectValues);

//function in object=> object method
let helloMe = {
  name: "Baxtiyor",
  age: 27,
  location: "Yunusabat",
  hello() {
    console.log(
      `Hello evryone my name is ${this.name}, I'm ${this.age} years old and live in ${this.location}`
    );
  },
};

helloMe.hello();

//JSON
console.log("------JSON------");
let simpleObject = {
  carnName: "Audi",
  color: "Black",
  model: "A7 quadro",
  quentity: 2,
  price: "350.000$",
};

console.log(simpleObject);

// object to JSON
console.log("------Object to JSON------");
let objectJSON = JSON.stringify(simpleObject);
console.log(objectJSON);

//JSON to object
console.log("------JSON to object------");
let againObject = JSON.parse(objectJSON);
console.log(againObject);

//Mutation
console.log("------Mutation of object------");
console.log("------orgilan object------");
let object11 = {
  name: "Messi",
  age: 32,
  location: {
    city: "Argentina",
    home: "11 kvartal",
  },
};
console.log(object11);

//copied object
let object22 = object11;

object22.name = "Ronadldo";
object22.age = 35;
object22.location.city = "Tashkent";
object22.play = true;
console.log("------mutation------");
console.log(object11);

// run away mutation of object #1
console.log(
  "------Copied via (Object.assign({}, object11)) and changed object -------"
);
let object33 = Object.assign({}, object11);
object33.name = "Zidane";
object33.age = 50;
object33.location.city = "Namangan";
object33.location.home = "39-uy";

console.log(object33);

// run away mutation of object #2
console.log("------Copied via ({...object11}) and changed object -------");

let object44 = { ...object11 };
object44.name = "Xavi";
object44.age = 45;
object44.location.city = "Qatar";
object44.location.home = "150-qavat";

console.log(object44);

// run away mutation of object #3
console.log(
  "------Copied via (JSON.parse(JSON.stringify(object11))) and changed object -------"
);

let object55 = JSON.parse(JSON.stringify(object11));
object55.name = "Bruc Lee";
object55.age = 15;
object55.location.city = "Xitoy";
object55.location.home = "2-Pravinsiya";

console.log(object55);

// functions
console.log("------Function -------");
function myFn() {
  let aghk56 = 5,
    ceded;
  beefe = 10;
  aghk56 = aghk56 + 1;
  return (ceded = aghk56 + beefe);
}
console.log(myFn());

//function can change objec's information
console.log("------function can change objec's information -------");
let person = {
  name: "Baxtiyor",
  age: 18,
};
console.log("Orginal object");
console.log(person);

function change(objectName) {
  objectName.age = 27;
  return objectName;
}
change(person);
console.log("changing oblect");
console.log(change(person));
console.log("After changing orgilan object");
console.log(person);

//copy object in function
const person1 = {
  name: "someone",
  age: 10,
};
console.log("--------------copy object in function---------");
console.log("Orginal object");
console.log(person1);

function change1(b) {
  const copiedObject = Object.assign({}, b);
  copiedObject.age = 50;
  return copiedObject;
}
change1(person1);

console.log("changing oblect");
console.log(change1(person1));
console.log("After changing orgilan object");
console.log(person1);

//block scope
console.log("--------clock scope------");
let a12, b12;
function myFn1() {
  let a12 = 15;
  b12 = true;
  console.log(a12); //15
  console.log(b12); //true
}
myFn1();
console.log(a12); //undefind
console.log(b12); //true

//operator ...
console.log("-----operator ...------");
let obj23 = {
  name: "samsung",
  model: "galaxy",
  number: "note 8",
};
console.log(obj23);

let newObj23 = {
  ...obj23,
  number: "S21 ultra",
};
console.log(newObj23);

const buttonStyle = {
  color: "red",
  background: "blue",
  fontSize: "2rem",
};
console.log(buttonStyle);

const buttonText = {
  textContent: "buy",
};
console.log(buttonText);

const fullButton = {
  ...buttonText,
  ...buttonStyle,
};
console.log(fullButton);

//anonim function
console.log("--------anonim function------");
function myFuncion123(a) {
  console.log(a + " function with name");
}
myFuncion123(15);

const myFuncion1234 = function (a) {
  console.log(a + " anonim function");
};
myFuncion1234(50);

//Default param of function
console.log("-------Default param of function------------");
function defaultParametr(a, b = 1) {
  return a * b;
}
console.log(defaultParametr(8, 5));
console.log(defaultParametr(8));

const defaultParametr1 = (f, h = "are you okay?") => {
  return f + " " + h;
};

console.log(defaultParametr1("with two param: Baxtiyor", "nima gap? "));
console.log(defaultParametr1("default perem: Baxtiyor"));

//Can't understand 49 lessson
console.log("-x-x-x-x-x-x-Can't understand 49 lessson-x-x-x-x-x-x");

// destruction
console.log("---------------- Destruction ----------");
let objact = {
  name: "Baxtiyor",
  age: 27,
  marrige: false,
  city01: "Dubai",
  location: {
    city: "Tashkent",
    street: "Yunusobod",
  },
};

const { name, age, marrige, city01 } = objact;
const { city, street } = objact.location;
console.log(city01);
console.log(city);

// ternary operator
console.log("---------------- ternary operator ----------");
let age10 = 15;
age10 > 5 ? console.log("5dan katta") : console.log("5dan kichik");

const obj54 = {
  name: "ph",
  madel: "idea pad",
  prosessor: "M1",
  ddr: 5,
};

// class
console.log("---------------- class ----------");

class Commentary {
  constructor(coment, user) {
    (this.comentText = coment), (this.comentSoni = 0);
    this.comentator = user;
  }
  comentNumber() {
    this.comentSoni = this.comentSoni + 1;
  }
}

const firstComment = new Commentary("Qoyile aka zo'r", "Baxtiyor");
console.log(firstComment);

const secondComent = new Commentary("go go bro", "Doniyor");
console.log(secondComent);

firstComment.comentNumber();
firstComment.comentNumber();
console.log(firstComment);

// instanceof
console.log("---------------- instanceof ----------");
console.log(firstComment instanceof Commentary);
console.log(firstComment instanceof Object);

// hasOwnProperty
console.log("---------------- hasOwnProperty ----------");
console.log(firstComment.hasOwnProperty("comentText"));
console.log(firstComment.hasOwnProperty("tex"));

// create array using class
console.log("---------------- create array using class ----------");
class NumbersArray extends Array {
  sum() {
    return this.reduce((el, acc) => (acc += el), 0);
  }
}

const numb1 = new NumbersArray(1, 2, 3);
console.log(numb1);

const numb2 = new NumbersArray("me", "you", 1, true, true, null);
console.log(numb2);

console.log(numb1.sum());

// promise
console.log("---------------- promise ----------");

const myPromise = new Promise((resolve, reject) => {
  console.log("creating promise");
});

//fetch
console.log("---------------- fetch ----------");
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.log(error));

// java script masala ****************************************
// Masala #1
// Kvadratning perimetri
let a569 = 5;
console.log(
  "Tomonlari " +
    a569 +
    "ga teng bo'lgan kvadratning perimetri " +
    4 * a569 +
    "ga teng"
);

// Masala #2
// Kvadratning yuzi
let ba = 7;
console.log(
  "Tomonlari " + ba + "ga teng bo'lgan kvadratning yuzi " + ba * ba + "ga teng"
);

// Masala #3
// To'rtburchakning perimetri va yuzini hisoblash
let afd = 5,
  bw = 7,
  P,
  S;
P = 2 * (afd + bw);
S = afd * bw;
console.log(
  "Tomonlari " +
    afd +
    " va " +
    bw +
    " bo'lgan to'g'ri to'rtburchakning perimetri: " +
    P +
    " yuzi: " +
    S +
    "ga teng"
);

// Masala #4
// Aylananing uzunligini
let rq = 6,
  pq = 3.14,
  lq;
lq = 2 * pq * rq;
console.log(
  "Radiusi: " + rq + "ga teng bo'lgan aylananing uzunligi: " + lq + "ga teng"
);

// Masala #5
// Kubning hajmi
let auih = 8,
  vw;
vw = Math.pow(8, 3);
console.log("Tomoni " + auih + "ga teng kubning hajmi " + vw);

// Masala #6
// Paralepipedning hami va to'la sirti
let a1025 = 2,
  bl = 5,
  cs = 8,
  sd,
  v;
v = a1025 * bl * cs;
sd = 2 * (a1025 * bl + bl * cs + cs * a1025);
console.log("hajm: " + v);
console.log("yuzi: " + sd);

// Masala #7
// Doiraning yuzi va uzunligini aniqlash
let r = 4,
  pf = 3.14,
  l,
  s;
l = 2 * pf * r;
s = pf * r * r;
console.log("Uzunligi " + l);
console.log("Yuzi " + s);

// Masala #8
// O'rta arifmetik
let azsd = 32,
  br = 42,
  ct = (azsd + br) / 2;
console.log("O'rta arifmetik: " + ct);

// Masala #9
// O'rta geometrik
let a4rt = 2,
  be = 8,
  cg;
cg = Math.sqrt(a4rt * be);
console.log("O'rta geometrik: " + cg);

// Masala #10
// Ikki sonning yig'indisi, ko'paytmasi va kvadratlari
let x = 15,
  y = 24,
  axcv;
axcv = x + y; //yig'indi
console.log("Sonlar yigindisi " + axcv);
console.log("Sonlar ko'paytmasi: " + x * y);
console.log(x + "ning kvadrat " + x * x);
console.log(y + "ning kvadrat " + y * y);

// Masala #11
// Sonning muduli
let ah56 = -45;
console.log(ah56 + " sonning muduli " + Math.abs(ah56));

// Masala #12
// To'g'ri to'rtburchakning gipotenuzasi va perimetrini
let ayui = 3,
  b = 4,
  c,
  p;
c = Math.sqrt(ayui * ayui + b * b);
p = ayui + b + c;
console.log("Gepotenuza " + c);
console.log("Perimetr " + p);

// Masala #13
// Bitta asosga ega bo'lgan aylanalarnig kattasini yuzidan kichigini yuzini ayrgandagi hosil bo'lgan yuzani topish
let r1 = 3,
  r2 = 2,
  pz = 3.14,
  s3;
s3 = pz * (r1 * r1 - r2 * r2);
console.log("Hosil bulgan yuza: " + s3);

// learning js with Bogdan Stashchuk ************************************************
const myInfo = {
  name: "Bakhtiyor",
};
console.log(myInfo);

myInfo.family = "Abdullaev";
console.log(myInfo);

myInfo.age = 26;
console.log(myInfo);

myInfo.workingOn = true;
console.log(myInfo);

delete myInfo.workingOn;
console.log(myInfo);

myInfo["marriedStatus"] = false;

console.log(myInfo);

const html = "HTML";
myInfo[html] = true;
console.log(myInfo);

const css = "CSS";
myInfo[css] = true;
console.log(myInfo);

delete myInfo.family;
console.log(myInfo);

delete myInfo.marriedStatus;
console.log(myInfo);

const bootstrap = "Bootstrap";
myInfo[bootstrap] = true;
console.log(myInfo);

const car = {
  model: "audi",
  version: "rs7",
  tuning: {
    color: "black",
    saca: true,
    zapaska: true,
  },
};
console.log(car);
delete car.tuning.zapaska;

const name56 = "Bakhtiyor";
const age56 = 26;
const user = {
  age56,
  name56,
  marriedStatus: false,
  car: function () {
    console.log("audi rs a7");
  },
};
console.log(user);
const best = {
  blue: "yes",
  red: true,
  other() {
    console.log("hello world");
  },
};
console.log(best);

const post = {
  user: "maxrush",
  password: "bsf55_00",
  profile: {
    photo: true,
    username: true,
    cover: false,
  },
};
console.log(post);
const jsonPost = JSON.stringify(post);
console.log(jsonPost);
const parsePost = JSON.parse(jsonPost);
console.log(parsePost);

const person23 = {
  firsName: "Bakhtiyor",
  age: 26,
};
console.log(person23);

const person2 = person;
person2.age = 27;
person2.car = true;
console.log(person);

const person21 = {
  ism: "Baxtiyor",
  yosh: 26,
  car: {
    color: "red",
    model: "audi",
  },
};
console.log(person21);

const person256s = Object.assign({}, person);
person256s.ism = "Doniyor";
person256s.yosh = 22;
person256s.car.color = "black";
console.log("Object.asign({},person)");
console.log(person);
console.log(person256s);

const person3 = { ...person };
person3.ism = "Muhammad";
person3.yosh = 22;
person3.car.model = "mercedes";
console.log("sepecate ...person");
console.log(person);
console.log(person3);

const person4 = JSON.parse(JSON.stringify(person));
person4.ism = "messi";
person4.yosh = 35;
person4.car.color = "white";
person4.car.model = "MBW";
console.log("JSON.parse(JSON.stringify(person))");
console.log(person);
console.log(person4);
