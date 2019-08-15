const apples = 14;
console.log(apples)

console.log(`I have ${apples} apples.`)

// -----

const materials = ['wood', 'metal', 'stone'];
const words = {
    elephant: "The world's largest land mammal.",
    school: "A place of learning.",
    'ice cream': "A delicious milk-based dessert.",
};

console.log(materials);
console.log(words);

// -----

let num = 16;

if (num > 10) {
    console.log(`${num} is greater than 10.`);
} else if (num === 10) {
    console.log(`${num} is exactly 10.`);
} else {
    console.log(`${num} must be less than 10.`)
}

// -----

for (let x = 0; x < 11; x++) {
    console.log('Doing the same thing over and over.');
}

// -----

let base = 5;
for (let num = 0; num < 20; num++) {
    console.log(num + base);
}

// -----

let total = 0
for (let num = 0; num < 100; num++) {
    total += num;  
} 

console.log(total)

// -----

for (let height = 3; height < 15; height++) {
    if (height > 9) {
        console.log('You can get on the rollercoaster!');
    } else {
        console.log('You are too short to ride this rollercoaster.')
    }
}

// -----

const containers = ['purse', 'wallet', 'backback']

for(let index = 0; index < containers.length; index++) {
    console.log(containers[index])
}

// -----

function helloWorld() {
    console.log("Hello world!");
}

helloWorld()

// -----

function add(firstNum, secondNum) {
    return firstNum += secondNum
}

let amount = add(5, 7)
console.log(amount)