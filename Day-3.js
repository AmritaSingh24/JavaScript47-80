//Factory function
function createCircle(radius){
    return{
        radius,
        draw(){
            console.log('draw');
        }
    };
}
const myCircle = createCircle(1);

//constructor function
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}
const circle = new Circle(1);


// function are objects

function Circle(radius) {
    this.radius = radius;
    this.draw = function (){
        console.log('draw');
    }
}
Circle.call({},1);
Circle.apply({}, [1, 2, 3]);
const another = new Circle(1);

// Value vs Reference Types

let x = { value : 10};
let y = x;
x.value = 20;
let obj = {
    value: 10
};
function increase(obj){
    obj.value++;
}
increase(obj);
console.log(obj);

//Enumbering properties of an object

const circle = {
    radius: 1,
    draw(){
        console.log('draw');
    }
};

for (let key in circle){
    console.log(key, circle[key]);
}

for (let key of Object.keys(circle)){
    console.log(key);
}

for(let entry of Object.entries(circle))
    console.log(entry);
if ('color' in circle) console.log('yes');

// Claning an object
const circle = {
    radius: 1,
    draw(){
        console.log('draw');
    }
};

// const another = {};
// for (let key in circle)
// another[key] = circle[key];
// const another = Object.assign({}, circle);
const another = {...circle};
console.log(another);

//exercise 60
// street 
// city
// zipCode
// showAddress(address)

let address = {
    street: 'a',
    city: 'b',
    zipCode: 'c'
};
function showAddress(address){
    for (let key in address)
       console.log(key, address[key]);
}

showAddress(address);

// exercise 61
let address = new Address('a', 'b', 'c');
console.log(address);

    // Factory Function
    function createAddress(street, city, zipCode){
        return {
            street,
            city,
            zipCode
        };
    }

    // Constructor Function
    function Address(street, city, zipCode){
        this.street = street;
        this.city = city;
        this.zipCode = zipCode;
    }

// exercise 62

    let address1 = new Address('a', 'b', 'c');
    let address2 = new Address('a', 'b', 'c');
    let address3 = address1;

    console.log(areEqual(address1, address2));
    console.log(areSame(address1, address2));
    console.log(areSame(address1, address3));

    //Constructor Function
    function Address(street, city, zipCode){
        this.street = street;
        this.city = city;
        this.zipCode = zipCode;
    }

    function areEqual(address1, address2){
        return address1.street === address2.street &&
        address1.city === address2.city &&
        address1.zipCode === address2.zipCode;
    }

    function areSame(address1, address2){
        return address1 === address2;
    }

// exercise 63

let post = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 10,
    comments: [
        {author: 'a', body: 'b'},
        { author: 'c', body: 'd'},
    ],
    isLive: true
};

console.log(post);

// exercise 64
let post = new Post('a', 'b', 'c');
console.log(post);

function Post(title, body, author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

// exercise 65
let priceRange = [
    {
        label: '$',
        tooltip: 'Inexpensive',
        minPerPerson: 0,
        maxPerPerson: 10

    },
    {
        label: '$$',
        tooltip: 'Moderate',
        minPerPerson: 11,
        maxPerPerson: 20

    },
    {
        label: '$$$',
        tooltip: 'Expensive',
        minPerPerson: 21,
        maxPerPerson: 50

    }
];

let restaurants = [
    { averagePerPerson: 5}
]

//Adding Elements
const numbers = [3, 4];
numbers.push(5, 6);
numbers.unshift(1, 2);
numbers.splice(2, 0, 'a', 'b');
console.log(numbers);

//finding elements (Primitives)
const numbers = [1, 2, 3, 1, 4]

console.log(numbers.indexOf(1, 2));
console.log(numbers.lastIndexOf(1));

console.log(numbers.indexOf(1) !== -1);
console.log(numbers.includes(1));

// //finding elements (object)
const courses = [
    {
        id: 1, 
        name: 'a'
    },
    {
        id: 2,
        name: 'b'
    },
];
const course = courses.findIndex(function(course){
    return course.name === 'a';
});
console.log(course);

// Array
const courses = [
    {
        id: 1, 
        name: 'a'
    },
    {
        id: 2,
        name: 'b'
    },
];
const course = courses.find(course => course.name === 'a');
    
console.log(course);

//Removing Element
const numbers = [1, 2, 3, 4];

//End
const last = numbers.pop();

//Beginning
const first = numbers.shift();

//Middle
numbers.splice(2, 2);
console.log(numbers);

//Emptying an Array
let numbers = [1, 2, 3, 4];
let another = numbers;

//sol 1
numbers = [];

//sol 2
numbers.length = 0;

//sol 3 
numbers.splice(0, numbers.length);

//sol4
while (numbers.length > 0)
 numbers.pop();
 console.log(numbers);
 console.log(another);

// Combining Array
const first = [{id: 1}];
const second = [4, 5, 6];
const combined = first.concat(second);
first[0].id = 10;
const slice = combined.slice();
console.log(combined);
console.log(slice)

//The Spread Operator
const first = [1, 2, 3];
const second = [4, 5, 6];

//const combined = first.concat(second);
const combined = [...first, 'a', ...second, 'b'];

//const copy = combined.slice();
const copy = [...combined];

//Iterating an Array
const numbers = [1, 2, 3];
for (let number of numbers)
console.log(number);
numbers.forEach((number, index) => console.log(index, number))

//Joining Araay
const numbers = [1, 2, 3];
const joined = numbers.join(',');
console.log(joined);

const message = 'this is my first message ';
const parts = message.split(' ');
console.log(parts);

const combined = parts.join('-');
console.log(combined);

//Sorting Array
const numbers = [2, 3, 1];
numbers.sort();
console.log(numbers);
numbers.reverse();
console.log(numbers);

const courses =[
    {
        id: 1,
        name: 'Node-js'
    },
    {
        id: 2,
        name: 'JavaScript'
    }
];
courses.sort(function(a, b){
    const nameA =  a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if(nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});
console.log(courses);

// Testing the element of an Array
const numbers = [1, -1, 2, 3];
// const allPositive = numbers.every(function(value){
//     return value >= 0;
// });
// console.log(allPositive);

const atLeastOnePositive = numbers.every(function(value){
    return value >= 0;
});
console.log(atLeastOnePositive);

//Filtering Array
const numbers = [1, -1, 2, 3];
const filtered = numbers.filter(function(value){
    return value >= 0;
})
console.log(filtered)

//Mapping an Array
const numbers = [1, -1, 2, 3];
const filtered = numbers.filter(n => n >= 0);
const items = filtered.map(n => `<li>` + n + `</li>`)
const html = `<ul>` + items.join("") + `</ul>`;
console.log(html);

const numbers = [1, -1, 2, 3];
const items = numbers
.filter(n => n >= 0)
.map(n => ({ value: n }))
.filter(obj => obj.value > 1)
.map(obj => obj.value);
// const filtered = numbers.filter(n => n >= 0);
// const items = filtered.map(n => ({ value: n}));

console.log(items);

